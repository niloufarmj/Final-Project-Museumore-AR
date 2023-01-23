from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import time

options = Options()

options.headless = True

driver = webdriver.Chrome("/usr/bin/chromedriver", options=options)

#launch URL
driver.get("https://hiukim.github.io/mind-ar-js-doc/tools/compile/")
chooseFile = driver.find_element(By.CLASS_NAME, "dz-hidden-input")
chooseFile.send_keys("/home/nanami/Documents/final project/museumore_backend/media/gallary_profile/PXL_20210115_234648271.jpg")

time.sleep(0.5)

driver.find_element(By.CLASS_NAME, "startButton_OY2G").click()

#identify search box
# m = driver.find_element_by_name("q")
# #enter search text
# m.send_keys("Tutorialspoint")
# time.sleep(0.2)
# #perform Google search with Keys.ENTER
# m.send_keys(Keys.ENTER)