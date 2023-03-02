from django.contrib import admin
from django.urls import path, include, re_path
from museumore.views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
      path('admin/', admin.site.urls),
      re_path(r'^api/gallaries/$', GallaryListView.as_view()),
      re_path(r'^api/gallaries/(?P<pk>\d+)/$', GallaryView.as_view()),
      re_path(r'^api/targetfiles/$', TargetFileListView.as_view()),
      re_path(r'^api/targetfiles/(?P<pk>\d+)/$', TargetFileView.as_view()),
      re_path(r'^api/items/$', ItemListView.as_view()),
      re_path(r'^api/items/(?P<pk>\d+)/$', ItemView.as_view())
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
