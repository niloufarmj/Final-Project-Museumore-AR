from selenium import webdriver
import os
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
import time


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