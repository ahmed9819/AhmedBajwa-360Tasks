from Average import *
from sum import *
from search import *
from Reverse import *
from MinimumNumber import *
from MaximumNumber import *
from countFrequency import *

print("select operation: ")
print("1. Average")
print("2. sum")
print("3. search")
print("4. reverse")
print("5. min no")
print("6. max no")
print("7. Frequency")

choice = int(input("Enter choice: "))

if choice == 1:
    average.Average()
elif choice == 2:
    sum.sum()
elif choice == 3:
    Search.search()
elif choice == 4:
    ReverseList.reverse()
elif choice == 5:
    min.minNum()
elif choice == 6:
    max.findMax()
elif choice == 7:
    frequency.Countfeq()

