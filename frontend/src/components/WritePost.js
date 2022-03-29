import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Input,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import http from "../httpCommon";
import { useNavigate } from "react-router-dom";
import { Context } from "../contex/context";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  writePost: {
    flex: "80%",
    padding: "15px",
    background: "#dadaa4",
  },
  image: {
    // objectFit: "cover",
    height: "250px",
    width: "50%",
  },
}));

export default function WritePost() {
  const { user } = React.useContext(Context);
  const PF = process.env.REACT_APP_PUBLIC_URL;
  const classes = useStyles();
  const navigate = useNavigate();

  const initialNewPost = Object.freeze({
    author: user.user_id,
    title: "",
    content: "",
    image: null,
  });

  const [newPost, setNewPost] = useState(initialNewPost);

  // handle change
  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  // handle image file
  const handleImageFile = (e) => {
    setNewPost({
      ...newPost,
      image: e.target.files[0],
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let data_form = new FormData();
    const imageName = newPost.image.name;
    data_form.append("name", imageName); //req.body.name
    data_form.append("title", newPost.title);
    data_form.append("author", newPost.author);
    data_form.append("content", newPost.content);
    data_form.append("image", newPost.image);
    newPost.image = imageName;
    console.log(newPost);
    // try {
    //   await axios.post("http://localhost:8000/api_new/upload/", data_form, {
    //     headers: {
    //       "content-type": "multipart/form-data",
    //     },
    //   });
    // } catch (err) {
    //   console.log(err);
    // }

    try {
      await http.post("posts/", data_form);
    } catch (err) {
      console.log(err);
    }
    navigate("/"); //after create new post redirect me to home
    window.location.reload(); //to refresh the browser after create new post
    console.log(newPost);
  };

  const { title, content } = newPost;
  return (
    <div className={classes.writePost}>
      <Card>
        <label htmlFor="icon-button-file">
          <Input
            accept="image/*"
            id="icon-button-file"
            type="file"
            onChange={handleImageFile}
          />
          <CardMedia
            component="img"
            height="300"
            image="http://localhost:8000/media/posts/default.jpg"
            alt="green iguana"
            className={classes.image}
          />
        </label>
        <CardContent className={classes.cardContent}>
          <div>
            {" "}
            <Box
              sx={{
                width: 800,
                maxWidth: "100%",
              }}
              className={classes.updateForm}
            >
              <div>
                <TextField
                  fullWidth
                  label="Title"
                  id="fullWidth"
                  margin="normal"
                  onChange={handleChange}
                  value={title}
                  name="title"
                />
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Content"
                  style={{ width: 800 }}
                  minRows={7}
                  margin="normal"
                  onChange={handleChange}
                  value={content}
                  name="content"
                />
              </div>
            </Box>
          </div>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={handleSubmit}>
            Publish
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
