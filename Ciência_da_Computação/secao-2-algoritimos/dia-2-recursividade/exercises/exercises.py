# Exercicio 1: Forma iterativa
def count_pair_iterative(n):
    numero_de_pares = 0
    for num in range(n+1):
        if num % 2 == 0 and num != 0:
            numero_de_pares += 1
    return numero_de_pares


# Exercicio 2: Forma recursiva
def count_pair_recursive(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + count_pair_recursive(n-1)
    else:
        return count_pair_recursive(n-1)


def maiorinteiro_aux(lista, tamanho):
    if tamanho == 1:
        return lista[0]
    else:
        maior_do_resto_da_lista = maiorinteiro_aux(lista, tamanho-1)
        if maior_do_resto_da_lista > lista[tamanho-1]:
            return maior_do_resto_da_lista
        else:
            return lista[tamanho-1]


def maiorinteiro(lista):
    tamanho = len(lista)
    return maiorinteiro_aux(lista, tamanho)
