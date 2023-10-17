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


# print(
#     ret_bigger_chart(
# ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
# )
#     )
# printSquare(5)
# print(calculateAverage([12, 13, 14, 16, 18, 20]))
# print(ret_bigger(5, 10))
