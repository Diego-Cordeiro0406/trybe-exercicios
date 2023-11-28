# from abc import ABC, abstractmethod


class Product:
    def print_price(self):
        raise NotImplementedError("Esse metodo deve ser implementado")


class Book(Product):
    def __init__(self, name: str, price: float) -> None:
        self.name = name
        self.price = price

    def print_price(self):
        print(f"o livro {self.name} custa R$ {self.price} reais")


x = Book("batata", 2.99)
x.print_price()
