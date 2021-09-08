#!/usr/bin/python3
def uppercase(str):
    for a in range(len(str)):
        b = ord(str[a])
        if (b >= ord('a') and b <= ord('z')):
            b -= ord('a') - ord('A')
        print("{:c}".format(j), end="")
    print()
