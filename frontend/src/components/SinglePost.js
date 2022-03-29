import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import http from "../httpCommon";
// import { useLocation } from "react-router";
import { useParams } from "react-router";
import * as timeago from "timeago.js";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { Context } from "../contex/context";

const useStyles = makeStyles((theme) => ({
  singlePost: {
    flex: "80%",
    padding: "15px",
    background: "#dadaa4",
  },

  name: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },

  carItem: {
    backgroundColor: "#ffff",
    padding: "14px",
    textAlign: "center",
    color: "black",
    borderRadius: "10px",
  },

  cardContent: {
    position: "relative",
  },
  date: {
    position: "absolute",
    marginTop: "10px",
  },
  errorAlarm: {
    color: "red",
  },
}));

export default function SinglePost() {
  const { user } = React.useContext(Context);
  const PF = process.env.REACT_APP_PUBLIC_URL;
  const classes = useStyles();
  const navigate = useNavigate();
  const postId = useParams().id;
  console.log(postId);

  const [post, setPost] = useState([]);
  const [error, setError] = useState("");

  // get single post
  useEffect(() => {
    const getSinglePost = async () => {
      try {
        const res = await http.get(`posts/${postId}`);
        console.log(res.data);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getSinglePost();
  }, [postId, user.title]);

  // delete post
  const handleDelete = async () => {
    try {
      const res = await http.delete(`posts/${postId}`);
      console.log("deleted post:" + res.data);
      navigate("/"); //after create new post redirect me to home
      window.location.reload(); //to refresh the browser after create new post
    } catch (error) {
      console.log(error.response.data.detail);
      setError(error.response.data.detail);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  // update post
  const initialUpdatePost = {
    author: user.user_id,
    title: "",
    content: "",
  };

  const [updatePost, setUpdatePost] = useState(initialUpdatePost);
  const [updateMode, setUpdateMode] = useState(false);

  // handle change
  const handleChange = (e) => {
    setUpdatePost({
      ...updatePost,
      [e.target.name]: e.target.value,
    });
  };

  // update post function
  const handleEdit = async () => {
    try {
      const res = await http.put(`posts/${postId}/`, updatePost);
      // updatePost(res.data);
      console.log("edited post:" + res.data);
      setUpdateMode(false);
      // navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
      setError(error);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const { title, content } = updatePost;
  return (
    <div className={classes.singlePost}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={post.image}
          alt="green iguana"
        />
        {updateMode ? (
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
                    placeholder={title}
                    onChange={handleChange}
                    value={title}
                    name="title"
                  />
                  <TextareaAutosize
                    aria-label="empty textarea"
                    label="content"
                    placeholder={content}
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
        ) : (
          <CardContent className={classes.cardContent}>
            <div className={classes.name}>
              <Typography variant="body2" component="div">
                Author:{post.username}
              </Typography>
              <Typography variant="body2" component="div">
                Date: {timeago.format(post.published)}
              </Typography>
            </div>
            <hr />
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
          </CardContent>
        )}
        {updateMode ? (
          <CardActions>
            <Button variant="contained" onClick={handleEdit}>
              Finish Edit
            </Button>
            <Button variant="contained" onClick={() => setUpdateMode(false)}>
              Back
            </Button>
          </CardActions>
        ) : (
          <CardActions>
            {user.user_id === post.author && (
              <Button variant="contained" onClick={() => setUpdateMode(true)}>
                Edit
              </Button>
            )}
            {user.user_id === post.author && (
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={handleDelete}
              >
                Delete
              </Button>
            )}
          </CardActions>
        )}
      </Card>
      {/* error alarm */}
      <Typography gutterBottom variant="h8" className={classes.errorAlarm}>
        {error}
      </Typography>
    </div>
  );
}
