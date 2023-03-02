from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers
from museumore.views import *
from django.conf import settings
from django.conf.urls.static import static


# router = routers.DefaultRouter()
# router.register(r'gallaries', views.GallaryView, 'gallary')
# router.register(r'items', views.ItemView, 'item')

urlpatterns = [
      path('admin/', admin.site.urls),
      #path('api/', include(router.urls)),  
      #path('api/gallaries/', views.GallaryListApiView.as_view()),
      #path('api/gallaries/<int:gallary_id>/', views.GallaryDetailApiView.as_view()), 
      #path('api/items/', views.ItemListApiView.as_view()),
      #path('api/items/<int:item_id>/', views.ItemDetailApiView.as_view()),
      re_path(r'^api/gallaries/$', GallaryListView.as_view()),
      re_path(r'^api/gallaries/(?P<pk>\d+)/$', GallaryView.as_view()),
      re_path(r'^api/targetfiles/$', TargetFileListView.as_view()),
      re_path(r'^api/targetfiles/(?P<pk>\d+)/$', TargetFileView.as_view()),
      re_path(r'^api/items/$', ItemListView.as_view()),
      re_path(r'^api/items/(?P<pk>\d+)/$', ItemView.as_view()), 
      re_path(r'^compile/$', MyView.as_view())
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
