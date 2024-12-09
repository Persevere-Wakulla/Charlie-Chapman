# String Data Type

# Literal string assigment
first = "Dolla"
last = "Bill"

# print(type(first))
# print(type(first) == str)
# print(isinstance(first, str))

#constructor function
# pizza = str("Pepperoni")
# print(type(pizza))
# print(type(pizza) == str)
# print(isinstance(pizza, str))

#Concatenations
fullname = first + "" + last
print(fullname)

fullname += "!"
print(fullname)

#Casting a number to a string
decade = str(1990)
print(type(decade))
print(decade)

statement = "I like rap music from the " + decade + "s."
print(statement)


#multiline
multine = '''
hey, how are you?

I was just checking in.

                            All good?

'''
