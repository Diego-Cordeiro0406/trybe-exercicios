class Retangle:
    def __init__(self, base, height) -> None:
        self.base = base
        self.height = height

    def calculate_area(self):
        return f"A area do retangulo é {self.base * self.height}"

    def calculate_perimeter(self):
        return f"O perimetro do retangulo é {2 * (self.base + self.height)}"
