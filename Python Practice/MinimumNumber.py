class min:
    def minNum():
        num = []

        n = int(input("Enter range: "))

        for i in range(n):
            number = int(input("Enter Number: "))
            num.append(number)

        minimum = num[0]

        for i in range(len(num)):
            if num[i]<minimum:
                minimum = num[i]

        return f"Minimum Number: {minimum} at index: {num.index(minimum)}"

    print(minNum())