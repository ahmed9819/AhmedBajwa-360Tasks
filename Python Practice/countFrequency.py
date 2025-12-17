class frequency:
    def Countfeq():
        num = []

        n = int(input("Enter the range: "))

        for i in range(n):
            number = int(input("Enter the number:"))
            num.append(number)

        freq= {}

        for i in num:
            if i in freq:
                freq[i]+=1
            else:
                freq[i] = 1
        return freq

    print(Countfeq())
