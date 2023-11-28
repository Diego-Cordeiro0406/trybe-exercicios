from abc import ABC, abstractmethod


class Person(ABC):
    @abstractmethod
    def print_role(self) -> None:
        pass


class Manager(Person):
    def print_role(self) -> None:
        print("Meu cargo é de gerente")


class Seller(Person):
    def print_role(self) -> None:
        print("Meu cargo é de vendedor")


x = Manager()
y = Seller()
x.print_role()
y.print_role()
