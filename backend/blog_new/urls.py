from django.urls import path
from blog_new import views
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.routers import DefaultRouter

app_name = 'blog_api'


# modelView class based url
# router = DefaultRouter()
# router.register('posts/', views.PostViewSet, basename='post')
# urlpatterns = router.urls




# generic class based view url 
urlpatterns = [
    path('posts/', views.PostList.as_view() , name="listcreate"),
    path('posts/<int:pk>/', views.PostDetail.as_view(),  name="detailcreate"),
    path('upload/', views.PostUpload.as_view(), name='upload'),
]


urlpatterns = format_suffix_patterns(urlpatterns)