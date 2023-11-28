# from typing import Union


# class HomeAppliance:
#     def __init__(
#         self, color: str, power: int, voltage: int, price: Union[float, int]
#     ) -> None:
#         self.color = color
#         self.price = price
#         self.power = power
#         self.voltage = voltage
#         self.max_speed = 3

#         # Inicia os valores de `speed` e `is_on`
#         # chamando o método `turn_off` direto no construtor
#         self.turn_off()

#     def turn_on(self, speed: int) -> None:
#         self.is_on = True
#         self.speed = speed if speed <= self.max_speed else self.max_speed

#     def turn_off(self) -> None:
#         self.is_on = False
#         self.speed = 0


class Vehicle:
    def __init__(self, name: str, capacity: int) -> None:
        self.name = name
        self.capacity = capacity

    def move(self, distance: int) -> str:
        return (
            f"{self.name} carried "
            + f"{self.capacity} people across"
            + f" {distance} kilometers."
            )


class Car(Vehicle):
    def move(self, distance: int) -> str:
        return (f"Car {super().move(distance)}")


class Motorcycle(Vehicle):
    def __init__(self, name: str) -> None:
        self.name = name
        self.capacity = 2


carro = Car("Civic", 4)
moto = Motorcycle("Titan")
print(carro.move(10))
print(moto.move(10))
