class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        self._buckets = [[] for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
        return None

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)

        print(self.get_value(id_num))

        for item in self._buckets[address]:
            if item.id_num == id_num:
                item.name = new_name

        print(self.get_value(id_num))

    def has(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return True
        return False


# employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
# registry = HashMap()

# for id_num, name in employees:
#     employee = Employee(id_num, name)
#     registry.insert(employee)

# print(registry.get_value(23))
# registry.update_value(10, 'name30')
# print(registry.has(44))

double = {x: x + x for x in range(3, 21)}
for i in double.keys():
    if i % 2 == 1:
        double[i] = i**3
    else:
        double[i] = i + i
print(double)

# Para cada char na string:
# 	- Se o char não estiver no dicionário, inclua com o valor 1;

# 	- Se estiver, incremente o valor.


# Exemplo:

str = "bbbbaaaacccaaaaaaddddddddccccccc"
# saída: {'b': 4, 'a': 10, 'c': 10, 'd': 8}
result = dict()
for char in str:
    if char not in result:
        result[char] = 1
    else:
        result[char] += 1
str = "coxinha"
# saída: {'c': 1, 'o': 1, 'x': 1, 'i': 1, 'n': 1, 'h': 1, 'a': 1}
# Explicação: Nenhuma letra repete em coxinha :)
