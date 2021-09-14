#!/usr/bin/python3
def print_matrix_integer(matrix=[[]]):
    for n in matrix[0:]:
        joint = ""
        for m in n[0:]:
            print("{:s}{:d}".format(joint, m), end="")
            joint = " "
        print()
