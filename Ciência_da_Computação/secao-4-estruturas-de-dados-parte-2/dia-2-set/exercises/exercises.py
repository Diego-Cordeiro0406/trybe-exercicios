def nota_partida(escolhas, adivinhas):
    return max(escolhas.difference(adivinhas))


def nota_redutor(escolhas, adivinhas):
    return min(escolhas.difference(adivinhas))


def nota_individual(escolhas, adivinhas):
    set_escolhas = set(escolhas)
    set_adivinhas = set(adivinhas)

    return nota_partida(set_escolhas, set_adivinhas) - nota_redutor(
        set_escolhas, set_adivinhas
    )


def quem_ganhou_blefe(jogadas):
    jogadores = list(jogadas.keys())

    primeira_nota = nota_individual(
        jogadas[jogadores[0]], jogadas[jogadores[1]])

    segunda_nota = nota_individual(
        jogadas[jogadores[1]], jogadas[jogadores[0]])

    if primeira_nota > segunda_nota:
        return jogadores[0]
    elif primeira_nota < segunda_nota:
        return jogadores[1]
    else:
        return None


entrada = {"Clara": [0, 1, 5, 9, 10], "Marco": [0, 2, 8, 9, 10]}

quem_ganhou = quem_ganhou_blefe(entrada)

if quem_ganhou:
    print(f"Quem ganhou: {quem_ganhou} ")
else:
    print("Deu empate")


# def longer_no_repeating_substring_len(string):
#     biggest = 0
#     for index, _ in enumerate(string):
#         substr = set()
#         for letter in string[index:]:
#             if letter in substr:
#                 break
#             substr.add(letter)
#         if len(substr) > biggest:
#             biggest = len(substr)
#     return biggest


def longer_no_repeating_substring_len(string):
    # início da substring analisada
    sub_start = 0
    # tamanho da substring sem repetir letras
    size_sub = 0
    # índice inicial da maior substring
    start_index = 0
    # dicionário onde vamos armazenar as letras da string
    position = {}

    for i in range(0, len(string)):
        # insere cada letra da string no dicionário position
        # como chave, e sua posição, o valor
        if string[i] not in position:
            position[string[i]] = i

        # se a letra já estiver no dicionário
        else:
            # e o índice dela for maior que o índice de
            # início da substring analisada anteriormente
            if position[string[i]] >= sub_start:
                # ele calcula o tamanho dessa substring nova
                currlen = i - sub_start
                # e caso seja maior que o da anterior
                # substitui pela nova
                if size_sub < currlen:
                    size_sub = currlen
                    # e o ínice inicial passa a ser
                    # o inicial dessa substring mais longa
                    start_index = sub_start
                # a nova substring vai começar depois
                # da última posição conhecida da letra
                # para evitar repetições
                sub_start = position[string[i]] + 1
            # atualiza a última posição
            # conhecida da letra
            position[string[i]] = i
    # compara o tamanho da última substring
    # com o tamanho da maior substring
    # e atualiza os valores
    if size_sub < i - sub_start:
        size_sub = i - sub_start
        start_index = sub_start
    # fatiamos a palavra de acordo com os índices
    return string[start_index: (start_index + size_sub)]
