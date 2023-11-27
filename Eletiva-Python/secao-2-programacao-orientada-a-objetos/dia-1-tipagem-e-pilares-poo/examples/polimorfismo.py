class Product:
    def __init__(self, name: str, price: float) -> None:
        self.name = name
        self.price = price

    def description(self) -> None:
        pass

    def price(self) -> None:
        pass


class Book(Product):
    def __init__(self, name: str, author: str, price: float) -> None:
        super().__init__(name, price)
        self.author = author

    def description(self) -> str:
        return f"{self.name} por {self.author}"

    def price(self) -> float:
        return self.price


class DVD(Product):
    def __init__(self, name: str, direction: str, price: float) -> None:
        super().__init__(name, price)
        self.direction = direction

    def description(self) -> str:
        return f"{self.name} dirigido por {self.direction}"

    def price(self) -> float:
        return self.price
