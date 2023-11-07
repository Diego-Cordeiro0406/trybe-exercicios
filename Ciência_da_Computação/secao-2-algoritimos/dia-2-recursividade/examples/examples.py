def sum(num):
    if num == 0:
        return 0
    else:
        print(num)
        return num + sum(num - 1)


print(sum(5))
