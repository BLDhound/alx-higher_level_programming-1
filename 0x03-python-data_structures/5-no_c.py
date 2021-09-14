#!/usr/bin/python3
def no_c(my_string):
    this_string = list(my_string)
    for n in this_string[0:]:
        if n == 'C' or n == 'c':
            this_string.remove(n)
    return("".join(this_string))
