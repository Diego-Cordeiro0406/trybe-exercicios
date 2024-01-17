from django.urls import path
from products.views import index, product, seller, buyer, order


urlpatterns = [
    path("", index, name="home-page"),
    path("product/", product, name="product-page"),
    path("seller/", seller, name="seller-page"),
    path("buyer/", buyer, name="buyer-page"),
    path("order/", order, name="order-page"),
]
