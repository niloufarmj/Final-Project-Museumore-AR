from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from museumore import views

# router = routers.DefaultRouter()
# router.register(r'gallaries', views.GallaryView, 'gallary')
# router.register(r'items', views.ItemView, 'item')

urlpatterns = [
      path('admin/', admin.site.urls),
      #path('api/', include(router.urls)),  
      path('api/gallaries/', views.GallaryListApiView.as_view()),
      path('api/gallaries/<int:gallary_id>/', views.GallaryDetailApiView.as_view()),  
]
