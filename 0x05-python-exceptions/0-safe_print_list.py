#!/usr/bin/python3
def safe_print_list(my_list=[], x=0):
    if not my_list or x == 0:
        print()
        return (0)
    try:
        for index_x in range(x):
            print(my_list[index_x], end="")
    except NameError:
        index_x = index_x - 1
    finally:
        print()
        return(index_x + 1)
