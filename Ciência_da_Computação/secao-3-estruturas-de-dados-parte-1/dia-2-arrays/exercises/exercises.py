# 1 - OK
# 0 - Instabilidades

valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
cartas = [1, 4, 4, 7, 6, 6]
produtos = [1, 3, 1, 1, 2, 3]


# Exercicio 1
def calcular_instabilidades(list):
    instabilidades = 0
    for index in list:
        if index == 0:
            instabilidades += 1
    return instabilidades


# Exercicio 2
def mesclar_cartas(cartas):
    meio = len(cartas) // 2

    primeira_parte = cartas[:meio]
    segunda_parte = cartas[meio:]

    cartas_mescladas = []

    for elemento1, elemento2 in zip(primeira_parte, segunda_parte):
        cartas_mescladas.append(elemento1)
        cartas_mescladas.append(elemento2)
    return cartas_mescladas


# Exercicio 3
def combinar_indices(list):
    numero_de_combinacoes = 0
    for index in range(len(list)):
        for j in range(index + 1, len(list)):
            if list[index] == list[j]:
                numero_de_combinacoes += 1
    return numero_de_combinacoes


# Exercicio 4
def entradas_e_saidas(target):
    entradas = [1, 2, 3]
    saidas = [3, 2, 7]
    pessoas = 0
    for index in range(len(entradas)):
        if index <= target <= saidas[index]:
            pessoas += 1
    return pessoas


print(calcular_instabilidades(valores_coletados))
print(mesclar_cartas(cartas))
print(combinar_indices(produtos))
print(entradas_e_saidas(4))
