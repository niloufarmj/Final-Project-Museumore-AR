from __future__ import unicode_literals
from rest_framework import viewsets
from .serializers import *
from .models import *
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import permissions
from rest_framework.response import Response
from django.http import Http404
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from selenium import webdriver
import os
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
import time


# Create your views here.

class GallaryListView(ListCreateAPIView):
    queryset = Gallary.objects.all()
    serializer_class = GallarySerializer

class GallaryView(RetrieveUpdateDestroyAPIView):
    serializer_class = GallarySerializer
    queryset = Gallary.objects.all()

class ItemListView(ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ItemView(RetrieveUpdateDestroyAPIView):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()

class MyView(APIView):
    def get(self, request, *args, **kwargs):
        compileTargets()
        return Response(data="done", status=200)

def compileTargets():
    if os.path.exists("/home/nanami/Documents/final project/scan/targets.mind"):
        os.remove("/home/nanami/Documents/final project/scan/targets.mind")

    profile = webdriver.FirefoxProfile()
    profile.set_preference("browser.download.folderList", 2)
    profile.set_preference("browser.download.manager.showWhenStarting", False)
    profile.set_preference("browser.download.dir", "/home/nanami/Documents/final project/scan")
    profile.set_preference("browser.helperApps.neverAsk.saveToDisk", "application/x-gzip")


    driver = webdriver.Firefox(firefox_profile=profile)

    #launch URL
    driver.get("https://hiukim.github.io/mind-ar-js-doc/tools/compile/")

    count = 0
    dir_path = "/home/nanami/Documents/final project/museumore_backend/media/target_images"
    for path in os.scandir(dir_path):
        if path.is_file():
            count += 1

    files = [""] * count

    for path in os.listdir(dir_path):
        # check if current path is a file
        if os.path.isfile(os.path.join(dir_path, path)):
            files[int(path[0])] = dir_path + "/" + path
            

    for i in range(0, count):
        file_address = files[i]
        chooseFile = driver.find_element(By.CLASS_NAME, "dz-hidden-input")
        chooseFile.send_keys(file_address)
        time.sleep(0.1)

    time.sleep(0.5)

    driver.find_element(By.CLASS_NAME, "startButton_OY2G").click()

    flag = True
    while flag == True:
        time.sleep(1)
        try:
            driver.find_element(By.CLASS_NAME, "startButton_OY2G")
        except: 
            flag = True
        else:
            flag = False

    driver.find_element(By.CLASS_NAME, "startButton_OY2G").click()

    driver.close()


# class GallaryListApiView(APIView):
    
#     def get(self,  request, format=None):
#         gallaries = Gallary.objects.all()
#         serializer = GallarySerializer(gallaries, many=True)
#         return Response(serializer.data)

#     def post(self, request, format=None):
#         serializer = GallarySerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class GallaryDetailApiView(APIView):
    
#     def get_object(self, Gallary_id):        
#         try:
#             return Gallary.objects.get(id=Gallary_id)
#         except Gallary.DoesNotExist:
#             raise Http404

#     def get(self, request, gallary_id, format=None):      
#         gallary_instance = self.get_object(gallary_id)
#         serializer = GallarySerializer(gallary_instance)
#         return Response(serializer.data)

#     def put(self, request, gallary_id, format=None):
#         gallary_instance = self.get_object(gallary_id)
#         serializer = GallarySerializer(gallary_instance, data=request.data, partial = True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, gallary_id, format=None):
#         gallary_instance = self.get_object(gallary_id)
#         gallary_instance.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT) 

# class ItemListApiView(APIView):
    
#     def get(self,  request, format=None):
#         items = Item.objects.all()
#         serializer = ItemSerializer(items, many=True)
#         return Response(serializer.data)

#     def post(self, request, format=None):
#         serializer = ItemSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# class ItemDetailApiView(APIView):
    
#     def get_object(self, Item_id):        
#         try:
#             return Item.objects.get(id=Item_id)
#         except Item.DoesNotExist:
#             raise Http404

#     def get(self, request, item_id, format=None):      
#         item_instance = self.get_object(item_id)
#         serializer = ItemSerializer(item_instance)
#         return Response(serializer.data)

#     def put(self, request, item_id, format=None):
#         item_instance = self.get_object(item_id)
#         serializer = ItemSerializer(item_instance, data=request.data, partial = True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, item_id, format=None):
#         item_instance = self.get_object(item_id)
#         item_instance.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT) 
