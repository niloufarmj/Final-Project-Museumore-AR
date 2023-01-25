from selenium import webdriver
import os
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
import time


if os.path.exists("/home/nanami/Documents/final project/scan/targets.mind"):
  os.remove("demofile.txt")

profile = webdriver.FirefoxProfile()
profile.set_preference("browser.download.folderList", 2)
profile.set_preference("browser.download.manager.showWhenStarting", False)
profile.set_preference("browser.download.dir", "/home/nanami/Documents/final project/scan")
profile.set_preference("browser.helperApps.neverAsk.saveToDisk", "application/x-gzip")


driver = webdriver.Firefox(firefox_profile=profile)

#launch URL
driver.get("https://hiukim.github.io/mind-ar-js-doc/tools/compile/")
chooseFile = driver.find_element(By.CLASS_NAME, "dz-hidden-input")

files = ""
for path in os.listdir("/home/nanami/Documents/final project/museumore_backend/media"):
    # check if current path is a file
    if os.path.isfile(os.path.join("/home/nanami/Documents/final project/museumore_backend/media", path)):
        files = files + ("/home/nanami/Documents/final project/museumore_backend/media/" + path + "\n")

print(files)

chooseFile.send_keys(files)

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

