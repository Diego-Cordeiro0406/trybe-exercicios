from django import forms
from products.models import Product, Seller, Buyer, Order


class CreateProductForm(forms.Form):
    class Meta:
        model = Product
        fields = "__all__"


class CreateSellerForm(forms.Form):
    class Meta:
        model = Seller
        fields = "__all__"


class CreateBuyerForm(forms.Form):
    class Meta:
        model = Buyer
        fields = "__all__"


class CreateOrderForm(forms.Form):
    class Meta:
        model = Order
        fields = "__all__"
