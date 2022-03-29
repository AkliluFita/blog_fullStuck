from django.urls import path
from users.views import UserCreate, CustomUserCreate, BlacklistTokenUpdateView

app_name = 'users'

urlpatterns = [
    path('register/', CustomUserCreate.as_view(), name="create_user"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist')
 ]