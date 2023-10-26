class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def __str__(self) -> str:
        if self.__ligada is True:
            return f"""
                - Informações -
                - tamanho: {self.__tamanho}
                - volume: {self.__volume}
                - canal: {self.__canal}
                - ligada?: {self.__ligada}
              """
        return f"""
                - Informações -
                - tamanho: {self.__tamanho}
                - ligada?: {self.__ligada}
              """

    def ligar_desligar(self):
        if self.__ligada is True:
            self.__ligada = False
        self.__ligada = True

    def aumentar_volume(self):
        if self.__ligada is False:
            raise ValueError("Ligue a tv para poder aumentar o volume")
        elif self.__volume >= 99:
            raise ValueError("O volume já está no máximo")
        self.__volume += 1

    def diminuir_volume(self):
        if self.__ligada is False:
            raise ValueError("Ligue a tv para poder diminuir o volume")
        elif self.__volume == 0:
            raise ValueError("O volume já está no minimo")
        self.__volume -= 1

    def modificar_canal(self, value):
        if self.__ligada is False:
            raise ValueError("Ligue a tv para poder trocar de canal")
        elif value == 0 or value > 99:
            raise ValueError("Canal inexistente")
        self.__canal = value


tv = TV("32 polegadas")
tv.ligar_desligar()
# tv.aumentar_volume()
# tv.diminuir_volume()
# tv.diminuir_volume()
tv.modificar_canal(1)
print(tv)
