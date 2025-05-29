print("hello guessers")
import random

highest = input("type a number: ")
if highest.isdigit():
    highest = int(highest)
    if highest <= 0:
        print("please type number larger than zero")
        quit()
else:
    print("please type a number")
    quit()

Random_number = random.randrange(0, highest)
guesses = 0

while True:
    user_guess = input("make a guess please: ")
    guesses += 1  # Move this here and fix spelling

    if user_guess.isdigit():
        user_guess = int(user_guess)
    else:
        print("please type a number next time")
        continue  # needs to be inside the while loop

    if user_guess == Random_number:
        print("you got it!")
        break
    elif user_guess > Random_number:
        print("you went high")
    else:
        print("you were below the number")

print("you got it in", guesses, "guesses")

