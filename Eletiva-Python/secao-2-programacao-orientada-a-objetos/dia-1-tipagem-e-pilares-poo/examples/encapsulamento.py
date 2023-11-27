class MonthlyExpense:
    def __init__(
            self,
            internet: int,
            grocery: int,
            power: int,
            water: int,
            rent: int
          ) -> None:
        self.internet = internet
        self.grocery = grocery
        self._power = power
        self._water = water
        self.__rent = rent

    @property
    def power(self):
        return self._power

    @power.setter
    def power(self, value: int):
        self._power = value

    @property
    def water(self):
        return self._water

    @water.setter
    def power(self, value: int):
        self._water = value
