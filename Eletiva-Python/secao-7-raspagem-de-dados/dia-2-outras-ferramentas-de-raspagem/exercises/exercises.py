from selenium import webdriver
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()

response = firefox.get("https://quotes.toscrape.com/")

# exercise 1

# title = firefox.find_element(By.CLASS_NAME, "quote")
# print(title.find_element(By.TAG_NAME, "span").get_attribute("innerHTML"))

# exercises 2

paragraphs = firefox.find_elements(By.TAG_NAME, "p")

for paragraph in paragraphs:
    print(paragraph.get_attribute("innerHTML"))
