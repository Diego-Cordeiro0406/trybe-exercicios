class Queue:
    def __init__(self):
        self._data = list()

    def enqueue(self, value):
        self._data.append(value)

    def dequeue(self):
        # Se não houver mais itens na fila, o método retornará None
        if len(self._data) == 0:
            return None
        # O método pop remove e retorna o valor do índice fornecido
        return self._data.pop(0)

    def __str__(self):
        str_items = ""
        for i in range(len(self._data)):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < len(self._data):
                str_items += ", "

        return "Queue(" + str_items + ")"


queue = Queue()

print(queue)
queue.enqueue('batata')
queue.enqueue('mamão')
print(queue)
queue.dequeue()
print(queue)
