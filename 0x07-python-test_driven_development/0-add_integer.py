#!/usr/bin/python3
"""
This is "0-add_integer" module
this module contains add_integer fuction that adds two integers that are specifically validated to either be a float or int
"""
def add_integer(a, b=98):
    """Returns a + b with specific integer validation
    Arguments:
        a (int or float): First addition parameter
        b (int or float): second addition parameter
    Return:
        the sum of the two parameters
    """
    if type(a) is not int and type(a) is not float:
        raise TypeError("a must be an integer")
    if type(b) is not int and type(b) is not float:
        raise TypeError("b must be an integer")
    if type(a) is float:
        a = int(a)
    if type(b) is float:
        b = int(b)
    return a + b
