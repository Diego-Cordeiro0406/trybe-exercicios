from typing import Protocol


class CalculatePerimeter(Protocol):
    def calculate_perimeter(self) -> int:
        pass


class Square(CalculatePerimeter):
    def __init__(self, side: int) -> None:
        self.side = side

    def calculate_perimeter(self) -> int:
        return self.side * 4


class Triangle(CalculatePerimeter):
    def __init__(self, side_1: int, side_2: int, side_3: int) -> None:
        self.side_1 = side_1
        self.side_2 = side_2
        self.side_3 = side_3

    def calculate_perimeter(self) -> int:
        return self.side_1 + self.side_2 + self.side_3


q = Square(4)
t = Triangle(1, 2, 3)

print(q.calculate_perimeter())
print(t.calculate_perimeter())
