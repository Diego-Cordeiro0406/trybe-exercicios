from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    price = models.FloatField()
    seller = models.ForeignKey(
        "Seller",
        on_delete=models.CASCADE,
        related_name="products",
    )


class Seller(models.Model):
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=20)


class Buyer(models.Model):
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=20)


class Order(models.Model):
    buyer = models.ForeignKey(
        Buyer,
        on_delete=models.CASCADE,
        related_name="orders",
    )
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
    )
