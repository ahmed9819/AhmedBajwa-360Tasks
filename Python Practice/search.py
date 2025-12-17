class Search:
    def search():
        num = [12,24,1,21,23]

        target = int(input("enter target: "))
        for i in range(len(num)):
            if num[i]==target:
                return f"Target found at index: {i}"
        

    print(search())