# with open('students.txt', 'w') as file:
#     LINES = [
#         'Marcos 10\n',
#         'Felipe 4\n',
#         'José 6\n',
#         'Ana 10\n',
#         'Maria 9\n',
#         'Miguel 5\n'
#       ]
#     file.writelines(LINES)
#     file.close()
all_students = []
try:
    with open('students.txt', 'r') as file:
        for line in file:
            grades = line
            grades = grades.split(" ")
            if int(grades[1]) < 6:
                all_students.append(grades[0] + '\n')
except FileNotFoundError:
    print("Arquivo inexistente")

with open('reproved_students.txt', 'w') as file:
    file.writelines(all_students)
    file.close()
