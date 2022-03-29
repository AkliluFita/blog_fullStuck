from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from users.serializers import RegisterUserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from rest_framework import generics
from users.models import NewUser


# Create your views here.

# class based custom register user
class CustomUserCreate(APIView):
    permission_classes = [AllowAny]   # permission always must have full access unless we can not create new user

    def post(self, request, format='json'):
        serializer = RegisterUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlacklistTokenUpdateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

# class based default register user
class UserCreate(generics.CreateAPIView):
    queryset = NewUser.objects.all()
    serializer_class = RegisterUserSerializer
    permission_classes = [AllowAny]


