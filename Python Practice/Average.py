class average:
    def Average():

        num = [] 

        n = int(input("Enter Range: "))

        for i in range(n):
            number = int(input("Enter Number: "))
            num.append(number)

        Average = 0
        total = 0

        for i in range(n):
            number = int(input("Enter Number: "))
            total += number
    
        Average = total/n
        return f"Average: {Average}"
    print(Average())