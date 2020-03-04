---
title: "Lists and Loops in Python"
date: 2019-06-13T15:15:13.000Z
draft: false
author: "Jordan Gregory"

# post thumbnail
image: "/assets/images/post/lists_and_loops_in_python.jpg"

# meta description
description: "As you will learn, Arrays are typically immutable and can hold information (usually of one particular type) and store them along with an index value."

# taxonomies
# category: "beginner"
tags:
- beginner
- python

slug: "lists-and-loops-in-python"

# post type
layout: post

---


Before reading this article, you should have read about [arrays](https://www.codetips.co.uk/beginner/what-are-arrays/), [types](https://www.codetips.co.uk/beginner/what-is-a-data-type/) and [loops](https://www.codetips.co.uk/beginner/what-are-loops/).

As you will learn, Arrays are typically immutable and can hold information (usually of one particular type) and store them along with an index value. 

Python adds another layer on top of the typical array type, which makes them easier to work with, by allowing information of any type as well as making them mutable. This construct is called a List.

In "[writing your first programme in Python](https://www.codetips.co.uk/languages/python/writing-your-first-python-program/)", we wrote a programme that outputted your name, age and profession. In this article, we’re going to extend that programme and have it print out all of your hobbies as well.

*Note: You were also asked to complete three challenges at the end of "[writing your first programme in Python](https://www.codetips.co.uk/languages/python/writing-your-first-python-program/)". We’re going to assume you completed them. If you haven’t, this article shows you the solutions so make sure you at least try them.*

After completing all three challenges, you should have ended up with something similar to this:

```python
#!/bin/env python

#Start of our code

name = "Jordan"
age = 31
profession = "Developer"
favoriteAnimal = "Penguin"

print("Welcome to my first Python programme. My name is {0}. I am {1} years old. I work as a {2}. My favourite animal is a {3}".format(
    name,
    age,
    profession,
    favoriteAnimal,
    )
)

# End of our code
```


We now want to add another piece of information; what our hobbies are.

I have three main hobbies, so the obvious thing to do is to create three new variables and print them to the terminal as we did before:

```python
#!/bin/env python

# Start of our code

name = "Jordan"
age = 31
profession = "Developer"
favoriteAnimal = "Penguin"

hobby1 := "Coding"
hobby2 := "Bass Guitar"
hobby3 := "Hiking"

print("Welcome to my first Python programme. My name is {0}. I am {1} years old. I work as a {2}. My favourite animal is a {3}".format(
    name,
    age,
    profession,
    favoriteAnimal,
    )
)

print("My hobbies are: {0}, {1}, {2}".format(hobby1, hobby2, hobby3))

# End of our code
```


We've now added a second `print` statement which prints our hobbies to the screen. Pretty neat huh? Well, actually, no.

It may look acceptable to do this for three hobbies, but what if you had ten hobbies?

```python
#!/bin/env python

# Start of our code

name = "Jordan"
age = 31
profession = "Developer"
favoriteAnimal = "Penguin"

hobby1 = "example1"
hobby2 = "example2"
hobby3 = "example3"
hobby4 = "example4"
hobby5 = "example5"
hobby6 = "example6"
hobby7 = "example7"
hobby8 = "example8"
hobby9 = "example9"
hobby10 = "example10"

print("Welcome to my first Python programme. My name is {0}. I am {1} years old. I work as a {2}. My favourite animal is a {3}".format(
    name,
    age,
    profession,
    favoriteAnimal,
    )
)

print("My hobbies are: {0}, {1}, {2}, {3}, {4}, {5}, {6}, {7}, {8}, {9}".format(
    hobby1,
    hobby2,
    hobby3,
    hobby4,
    hobby5,
    hobby6,
    hobby7,
    hobby8,
    hobby9,
    hobby10
    )
)

# End of our code
```


It's starting to look a bit messy, isn't it? What if we had 100 hobbies?

There must be a better way! Thankfully, there is. Lists!

In Python, lists can contain any type and are declared by simply using `variable = []` to create an empty list.

```python
stringList = []
intList = []
boolList = []
multiTypeList = []
```


We can immediately add items into our list by simply adding items within the list declaration.

```python
stringList = ["string1", "string2"]
intList = [1, 2]
boolList = [True, False]
multiTypeList = ["string", 1, 3.14, True]
```


Before we go any further, try to complete the following challenges:

- Take the ten hobby variables and convert them into one hobbies array.

- Change the `print` statement to print out the new list, instead of the ten variables.

Done? Excellent. You should have ended up with something similar to this:

```python
#!/bin/env python

# Start of our code
name = "Jordan"
age = 31
profession = "Developer"
favoriteAnimal = "Penguin"

hobbies = [
    "example1",
    "example2",
    "example3",
    "example4",
    "example5",
    "example6",
    "example7",
    "example8",
    "example9",
    "example10",
]

print("Welcome to my first Python programme. My name is {0}. I am {1} years old. I work as a {2}. My Favorite animal is a {3}.".format(
    name,
    age,
    profession,
    favoriteAnimal
    )
)

print("My hobbies are: {0}".format(hobbies))
# End of our code
```


Running your application now ( `python main.py` ) should give you the following output:

```bash
Welcome to my first Go programme. My name is Jordan. I am 31 years old. I work as a Developer. My favorite animal is a Penguin.
My hobbies are: [example1 example2 example3 example4 example5 example6 example7 example8 example9 example10]
```


Now we have our hobbies list and we can add and remove items easily, without having to create new variables or amend the `print` statement.

So our code is now looking nice and neat, but I'm still not very keen on what we're outputting to the terminal; we've got those ugly square brackets ( [] ) and what happens if we add a new hobby, which is made up of multiple words?

```python
hobbies = ["example1", "mountain biking", "example2", "example3"]
```


Which would print:

```bash
My hobbies are: [example1 mountain biking example2 example3]
```


Is it "mountain biking" or "mountain" and "biking"?

So do we have to go back to separate variables? Thankfully not! We can use a loop!

Before we change our programme, let's make a simple example of a loop to understand the concept.

If we wanted to print the numbers 1-10 we could write 10 different `print` statements, which is very manual, or we could write a loop to do it for us. In the following example:

1. The init statement. Executed before the first iteration of the loop, we define a new variable ( i ) and assign the value 1 to it ( `i = 1` ).

2. The condition expression. Executed before each iteration of the loop, it checks if the expression ( i <= 10 - is i less than or equal to 10? ) is true. If it is, it runs another iteration.

3. We then print the value of i during each iteration and then simply increment the value of i by 1 (e.g. if the value of i is 3, running i+=1 would increment it and it would now be 4)

```python
i = 1
while i <= 10:
    print(i)
    i+=1
```

We can now use this new technique to print our hobbies. In the following example:

1. We have added a new `print` statement that prints the number of hobbies we have. The `len` method simply returns the length of the list; in this example 4.

2. We define our init statement and set the value of i to 0. We have set it to 0 instead of 1 because Python list indexes start at 0.

3. We define our conditional expression and set the condition to `i < len(hobbies)` ( is i less than the length of hobbies ). We're using "less than" ( `<` ) instead of "less than or equal" ( `<=` ) because Python list indexes start at 0.

4. We define our post statement and increment the count of i as we did in our previous example.

5. We then print each element of hobbies.

```python
#!/bin/env python

# Start of our code

name = "Jordan"
age = 31
profession = "Developer"
favoriteAnimal = "Penguin"

hobbies = ["example1", "mountain biking", "example2", "example3"]

print("Welcome to my first Python programme. My name is {0}. I am {1} years old. I work as a {2}. My favourite animal is a {3}".format(
    name,
    age,
    profession,
    favoriteAnimal,
    )
)

print("I have {0} hobbies, and they are: ".format(len(hobbies)))

i = 0
while i < len(hobbies):
    print(hobbies[i])
    i=+1

# End of our code
```


The following is an illustration of the link between our list index and values:

```bash
|    0     |         1       |     2    |     3    |
*----------*-----------------*----------*----------*
| example1 | mountain biking | example2 | example3 |
```


We appreciate this was a lot of information to take in, so feel free to [reach out to us](https://www.codetips.co.uk/contact-us/) if anything isn't clear.



