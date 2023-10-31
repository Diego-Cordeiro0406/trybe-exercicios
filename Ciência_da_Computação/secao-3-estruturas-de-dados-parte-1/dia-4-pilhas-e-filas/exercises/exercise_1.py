from data.linked_list import LinkedList


class Queue:
    def __init__(self):
        self._data = LinkedList()

    def enqueue(self, value):
        self._data.insert_last(value)

    def dequeue(self):
        if self._data.__len__() == 0:
            return None

        return self._data.remove_first()

    def is_empty(self):
        return self._data.is_empty()

    def peek(self):
        last = self._data.__len__() - 1
        if self.is_empty():
            return None
        value = self._data.get_element_at(last)
        return value

    def __str__(self):
        str_items = ""
        for i in range(self._data.__len__()):
            value = self._data.get_element_at(i)
            str_items += str(value)
            if i + 1 < len(self._data):
                str_items += ", "

        return "Queue(" + str_items + ")"


content_queue = Queue()

# print(content_queue)
# content_queue.enqueue('batata')
# content_queue.enqueue('mamão')
# print(content_queue)
# content_queue.dequeue()
# print(content_queue)
# print(content_queue.is_empty())
# print(content_queue.peek())
