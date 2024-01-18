from django.contrib import admin
from products.models import Product, Seller, Buyer, Order


admin.site.register(Product)
admin.site.register(Seller)
admin.site.register(Buyer)
admin.site.register(Order)
