from django.shortcuts import render


def index(request):
    context = {}
    return render(request, "index.html", context)


def product(request):
    context = {}
    return render(request, "product.html", context)


def seller(request):
    context = {}
    return render(request, "seller.html", context)


def buyer(request):
    context = {}
    return render(request, "buyer.html", context)


def order(request):
    context = {}
    return render(request, "order.html", context)
