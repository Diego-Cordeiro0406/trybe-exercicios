from parsel import Selector
import requests

# exercise 1

# response = requests.get("https://httpbin.org/encoding/utf8")
# print(response.text)

# exercise 2

# response = requests.get("https://api.github.com/users/diego-cordeiro0406")
# to_dict = {
#   "username": response.json()["login"],
#   "url": response.json()["url"]
# }
# print(to_dict)

# exercise 3

# response = requests.get(
#   "https://scrapethissite.com/pages/advanced/?gotcha=headers",
#   headers={"Accept": "text/html", "User-Agent": "Chrome/121.0.0.0"}
#   )
# print(response.text)

# exercise 4

# response = requests.get(
#   "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
#   )
# selector = Selector(text=response.text)

# title = selector.css(".product_main h1::text").get()
# price = selector.css(
#   ".product_main .price_color::text").re_first(r"\d+\.\d{2}")
# description = selector.css("#product_description ~ p::text").get()
# suffix = "...more"
# if description.endswith(suffix):
#     description = description[:-len(suffix)]
# print(f"{title}, {price}, {description}")

# exercise 5

response = requests.get(
  "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
  )
selector = Selector(text=response.text)

title = selector.css(".product_main h1::text").get()
price = selector.css(
  ".product_main .price_color::text").re_first(r"\d+\.\d{2}")
description = selector.css("#product_description ~ p::text").get()
image = selector.css(".carousel-inner img::attr(src)").get()

suffix = "...more"

if description.endswith(suffix):
    description = description[:-len(suffix)]
quantity = selector.css(".product_main .availability::text").re_first(r"\d")

print(f"{title}, {price}, {description}, {image}, {quantity}")
