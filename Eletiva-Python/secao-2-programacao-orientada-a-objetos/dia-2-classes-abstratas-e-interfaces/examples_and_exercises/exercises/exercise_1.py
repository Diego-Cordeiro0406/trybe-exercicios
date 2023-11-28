from abc import ABC, abstractmethod


class Employee(ABC):
    @abstractmethod
    def calculate_bonus(self):
        pass


class Developer(Employee):
    def __init__(self, salary: int) -> None:
        self.__salary = salary

    def calculate_bonus(self) -> int:
        return self.__salary + ((20 * self.__salary) / 100)


class Analyst(Employee):
    def __init__(self, salary: int) -> None:
        self.__salary = salary

    def calculate_bonus(self) -> int:
        return self.__salary + ((30 * self.__salary) / 100)


class Manager(Employee):
    def __init__(self, salary: int) -> None:
        self.__salary = salary

    def calculate_bonus(self) -> int:
        return self.__salary + ((40 * self.__salary) / 100)


class Worker(Employee):
    def __init__(self, salary: int) -> None:
        self.__salary = salary

    def calculate_bonus(self) -> int:
        return self.__salary + ((10 * self.__salary) / 100)


def main():
    developer = Developer(1500)
    analyst = Analyst(1600)
    manager = Manager(1800)
    worker = Worker(1200)
    print(developer.calculate_bonus())
    print(analyst.calculate_bonus())
    print(manager.calculate_bonus())
    print(worker.calculate_bonus())


if __name__ == "__main__":
    main()
