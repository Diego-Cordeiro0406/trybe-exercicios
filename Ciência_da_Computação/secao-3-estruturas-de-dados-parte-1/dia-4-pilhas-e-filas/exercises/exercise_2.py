from data.linked_list import LinkedList


class Stack:
    def __init__(self):
        self._data = LinkedList()

    def is_empty(self):
        return self._data.is_empty()

    def push(self, value):
        self._data.insert_last(value)

    def pop(self):
        if self.is_empty():
            return None

        return self._data.remove_last()

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

        return "Stack(" + str_items + ")"


# content_stack = Stack()
# content_stack.push('batata')
# content_stack.push('mamão')
# content_stack.push('manga')
# print(content_stack)
# print(content_stack.pop())
# print(content_stack)
