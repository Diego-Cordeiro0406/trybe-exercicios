from django.shortcuts import render, redirect
from products.forms import CreateProductForm, CreateSellerForm, CreateBuyerForm, CreateOrderForm
from products.models import Product, Seller, Buyer, Order


def index(request):
    context = {}
    return render(request, "index.html", context)


def seller(request):
    form = CreateSellerForm()
    if request.method == "POST":
        form = CreateSellerForm(request.POST)
        if form.is_valid():
            Seller.objects.create(**form.cleaned_data)
            return redirect("home-page")
    context = {"form": form}
    return render(request, "seller.html", context)


def product(request):
    form = CreateProductForm()
    if request.method == "POST":
        form = CreateProductForm(request.POST)
        if form.is_valid():
            Product.objects.create(**form.cleaned_data)
            return redirect("home-page")
    context = {"form": form}
    return render(request, "product.html", context)


def buyer(request):
    form = CreateBuyerForm()
    if request.method == "POST":
        form = CreateBuyerForm(request.POST)
        if form.is_valid():
            Buyer.objects.create(**form.cleaned_data)
            return redirect("home-page")
    context = {"form": form}
    return render(request, "buyer.html", context)


def order(request):
    form = CreateOrderForm()
    if request.method == "POST":
        form = CreateOrderForm(request.POST)
        if form.is_valid():
            Order.objects.create(**form.cleaned_data)
            return redirect("home-page")
    context = {"form": form}
    return render(request, "order.html", context)
