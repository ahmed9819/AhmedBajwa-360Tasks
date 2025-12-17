class ReverseList:
    def reverse():
        n = [10, 21, 23, 1, 3, 1]
        start = 0
        end = len(n)-1
        while start < end:
            temp = n[start]
            n[start] = n[end]
            n[end] = temp
            start += 1
            end -= 1

        return f"Reversed list: {n}"

    print(reverse())

