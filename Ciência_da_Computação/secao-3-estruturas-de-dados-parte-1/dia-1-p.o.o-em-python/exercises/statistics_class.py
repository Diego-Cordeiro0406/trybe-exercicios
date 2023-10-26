class Statistics:
    def __init__(self, numbers):
        self.numbers = numbers

    def average(self):
        total = 0
        for index in self.numbers:
            total += index
        return total / len(self.numbers)


statistics = Statistics([1, 2, 3, 4])
print(statistics.average())
