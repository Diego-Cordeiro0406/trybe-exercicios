# Exercicio 1
def ret_bigger(a, b):
    if a > b:
        return a
    else:
        return b


# Exercicio 2
def calculateAverage(li):
    average = 0
    for index in li:
        average += index
    return average / len(li)


# Exercicio 3
def printSquare(value):
    counter = 1
    while counter <= value:
        print(value * '*')
        counter += 1


# Exercicio 4
def ret_bigger_chart(li):
    chart = ''
    for char in li:
        if len(char) > len(chart):
            chart = char
    return chart


# Exercicio 6
def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"


# Exercicio 7
def ret_smaller(li):
    smaller = 0
    for index in li:
        smaller += index
    for value in li:
        if value < smaller:
            smaller = value
    return smaller


# Exercicio 8
def printTriangle(value):
    counter = 1
    while counter <= value:
        print(counter * '*')
        counter += 1


# Exercicio 9
def sum_of_all(value):
    return sum(range(1, value + 1))


def calculate_fuel(liters, type):
    if type == "A":
        price = 1.90
        discount = 0.03
    if liters > 20:
        discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
    if liters > 20:
        discount = 0.06
    total = price * liters
    total -= total * discount
    return total


# print(calculate_fuel(20, 'A'))
# printTriangle(5)
# print(sum_of_all(5))
# print(ret_smaller([1, 5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))
# print(
#     ret_bigger_chart(
# ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
# )
#     )
# printSquare(5)
# print(calculateAverage([12, 13, 14, 16, 18, 20]))
# print(ret_bigger(5, 10))
