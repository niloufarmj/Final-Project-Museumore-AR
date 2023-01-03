from __future__ import unicode_literals
from rest_framework import viewsets
from .serializers import *
from .models import *
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import permissions
from rest_framework.response import Response
from django.http import Http404

# Create your views here.

# class GallaryView(viewsets.ModelViewSet):
#     serializer_class = GallarySerializer
#     queryset = Gallary.objects.all()


# class ItemView(viewsets.ModelViewSet):
#     serializer_class = ItemSerializer
#     queryset = Item.objects.all() 

class GallaryListApiView(APIView):
    # 1. List all
    def get(self,  request, format=None):
        gallaries = Gallary.objects.all()
        serializer = GallarySerializer(gallaries, many=True)
        return Response(serializer.data)

    # 2. Create
    def post(self, request, format=None):
        serializer = GallarySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GallaryDetailApiView(APIView):
    
    def get_object(self, Gallary_id):        
        try:
            return Gallary.objects.get(id=Gallary_id)
        except Gallary.DoesNotExist:
            raise Http404

    def get(self, request, gallary_id, format=None):      
        gallary_instance = self.get_object(gallary_id)
        serializer = GallarySerializer(gallary_instance)
        return Response(serializer.data)

    def put(self, request, gallary_id, format=None):
        gallary_instance = self.get_object(gallary_id)
        serializer = GallarySerializer(gallary_instance, data=request.data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, gallary_id, format=None):
        gallary_instance = self.get_object(gallary_id)
        gallary_instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 
