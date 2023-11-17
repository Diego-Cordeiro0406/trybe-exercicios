# from math import factorial
# import random


# def map_factorial(numbers):
#     result = []

#     for num in numbers:
#         result.append(factorial(num))

#     return result


# def main():
#     input_list = [1, 2, 3, 4, 5]
#     return map_factorial(input_list)


# if __name__ == "__main__":
#     main()


# DIGITS_MAP = {
#     0: "zero",
#     1: "um",
#     2: "dois",
#     3: "três",
#     4: "quatro",
#     5: "cinco",
#     6: "seis",
#     7: "sete",
#     8: "oito",
#     9: "nove",
# }


# def generate_int_description(integer):
#     """Transforma dígitos de um número em texto PT-BR"""
#     digits = list(str(integer))

#     description = f"{DIGITS_MAP.get(int(digits[0]))}"
#     for digit in digits[1:]:
#         description += f" {DIGITS_MAP.get(int(digit))}"

#     return description


# def main():
#     integer = random.randint(10000, 99999)

#     description = generate_int_description(integer)

#     print(f"Descrição do número {integer}: '{description}'")


# if __name__ == "__main__":
#     main()


def insertion_sort(array):
    for i in range(1, len(array)):
        current_value = array[i]
        position = i

        while position > 0 and array[position - 1] > current_value:
            array[position] = array[position - 1]
            position -= 1

        array[position] = current_value

    return array


def main():

    array = [23, 423, 1, 54, 8, 980, 45, 768, 34, 55, 88, 99, 100, 234, 567]

    sorted_array = insertion_sort(array)

    print(f"Array ordenado: {sorted_array}")


if __name__ == "__main__":
    main()
