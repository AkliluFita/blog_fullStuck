from django.http import HttpResponse, JsonResponse
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.views import APIView
from blog_new.models import Post
from blog_new.serializers import PostSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated, DjangoModelPermissionsOrAnonReadOnly, SAFE_METHODS, BasePermission


# custom permission (to access editting only for logged in user)
class PostUserWritePermission(BasePermission):
    message = 'Editing posts is restricted to the author only.'

    def has_object_permission(self, request, view, obj):

        if request.method in SAFE_METHODS:
            return True    # the user can read only

        return obj.author == request.user     #check user for write permission



# class based modelViewSet
# class PostViewSet(viewsets.ModelViewSet):        # ModelViewSet gives access for all request method
#     permission_classes = [PostUserWritePermission]
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

# # class based api view

class PostUpload(APIView):
    permission_classes = [PostUserWritePermission]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, format=None):
        print(request.data)
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PostList(generics.ListCreateAPIView):
    parser_classes = [MultiPartParser, FormParser]
    queryset = Post.objects.all()   # to collect all data from database
    serializer_class = PostSerializer
    permission_classes = [PostUserWritePermission]


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny]    # the custom permission from the above class
    # parser_classes = (MultiPartParser, FormParser)