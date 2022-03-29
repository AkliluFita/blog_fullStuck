
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from rest_framework.schemas import get_schema_view
from rest_framework.documentation import include_docs_urls

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('blog.urls')),
    # for new api design
    path('api_new/', include('blog_new.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),  # to activate the new user with the login
    # for JWT url configuration
    path('api_new/token/obtain/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api_new/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # user url path
    path('api_new/user/', include('users.urls', namespace='users')),
    # schema and doc
    path('schema', get_schema_view(
        title="Blog API",
        description="API for all descriptions",
        version="1.0.0"
    ), name='openapi-schema'),
    path('docs/', include_docs_urls(title='BlogAPI')),

]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
