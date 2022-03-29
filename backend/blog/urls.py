from django.urls import path
from blog import views
from rest_framework.urlpatterns import format_suffix_patterns

# urlpatterns = [
#     path('posts/', views.post_list),
#     path('posts/<int:pk>/', views.post_detail),
# ]

urlpatterns = [
    path('posts/', views.PostList.as_view()),
    path('posts/<int:pk>/', views.PostDetail.as_view()),
]


urlpatterns = format_suffix_patterns(urlpatterns)