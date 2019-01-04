# def sum(num1, num2):
#     total = num1 + num2
#     return total
#
# print sum(2, 3)
#
# print sum(2,3) + 5

def start(word):
    length = len(word)
    print " _ " * length

def hangman():
    word = raw_input("Player 1, enter word: ")
    start(word)
    guess = raw_input("Guess a letter: ")
    if len(guess) > 1:
        print("Too many letters")
    elif len(guess) < 1:
        print("No guess submitted")
    else:
        for x in word:
            if guess == x:
                print guess
            else:
                print " _ "
    return
    return

hangman()
