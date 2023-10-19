# import random


# Exercicio 1
# name = input('insira seu nome: ')

# for i in range(len(name), 0, -1):
#     nome_sem_ultimo = name[:i - 1]
#     print(nome_sem_ultimo)


# Exercicio 2 e 3
# with open('answer.txt', 'w') as file:
#     words = ["batata\n", "melão\n", "manga\n"]
#     file.writelines(words)
#     file.close()

# answers = []

# with open('answer.txt', 'r') as file:
#     answers = [linha.strip() for linha in file]


# print(answers)
# word = random.choice(answers)

# scrambled_word = "".join(random.sample(word, len(word)))
# print(scrambled_word)

# answer = input('digite a palavra desembaralhada: ')

# if answer == word:
#     print(f'Acertou! A palavra era {word}')
# else:
#     print(f'Errou, a palavra era {word}')


import json
import csv


def retrieve_books(file):
    return json.load(file)


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_percentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    # retrieve books
    with open("books.json") as file:
        books = retrieve_books(file)

    # count by category
    book_count_by_category = count_books_by_categories(books)

    # calculate percentage
    number_of_books = len(books)
    books_percentage_rows = calculate_percentage_by_category(
        book_count_by_category, number_of_books
    )

    # write csv
    header = ["categoria", "percentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, books_percentage_rows)
