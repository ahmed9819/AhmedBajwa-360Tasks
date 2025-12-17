class max:
    def findMax():

        num = []

        n = int(input("Enter the range: "))

        for i in range(n):
            number = int(input("Enter the number:"))
            num.append(number)

        maximum = num[0]

        for i in range(len(num)):
            if num[i] > maximum:
                maximum = num[i]

        return f"max Number is: {maximum} at index {num.index(maximum)}"            

    print(findMax())