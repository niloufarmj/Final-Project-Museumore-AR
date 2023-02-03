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
from selenium.common.exceptions import TimeoutException
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


    # options = Options()
    # options.add_argument('--headless')

    driver = webdriver.Firefox(firefox_profile=profile)
    # driver.set_page_load_timeout(10)

    #launch URL
    # try: 
    driver.get("https://hiukim.github.io/mind-ar-js-doc/tools/compile/")
    # except TimeoutException:
    #     print('Time consuming:', time.time() - t)

    

    count = 0
    dir_path = "/home/nanami/Documents/final project/museumore_backend/media/target_images"
    for path in os.scandir(dir_path):
        if path.is_file():
            count += 1
    
    print(count)

    files = [""] * count

    for path in os.listdir(dir_path):
        # check if current path is a file
        if os.path.isfile(os.path.join(dir_path, path)):
            name = path.split('.')	
            filename = name[0].split('/')
            print(filename[-1])
            files[int(filename[-1])] = dir_path + "/" + path
            

    for i in range(0, count):
        file_address = files[i]
        print(file_address)
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
