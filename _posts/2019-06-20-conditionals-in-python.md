---
title: "Conditionals in Python"
date: 2019-06-20T19:00:00Z
draft: false
author: "Jordan Gregory" 

# post thumbnail
image: "/assets/images/post/conditionals_in_python.jpg"

# meta description
description: "In this article we're going to extend our programme to act differently depending on the age variable."

# taxonomies
# category: "beginner"
tags:
- beginner
- python

slug: "conditionals-in-python"

# post type
layout: post
---

In the last article ( "[Lists and Loops in Python](https://www.codetips.co.uk/languages/python/lists-and-loops-in-python/)" ), we created a programme that outputted our `name`, `age`, `profession`, `favoriteAnimal` and a list of our `hobbies`.

In this article we're going to extend our programme to act differently depending on the `age` variable. Before we get started, let's remove some code we won't be needing in this article:

```python
#!/bin/env python

# Start of our code

name = "Jordan"
# age = 31

hobbies = ["hiking", "playing music", "example1", "example2"]

print("Hello World. My name is {0}.".format(name))

print("I have {0} hobbies, and they are: ".format(len(hobbies)))

i = 0
while i < len(hobbies):
    print(hobbies[i])
    i+=1

# End of our code
```

**Note**: We've commented out the age parameter. While not a hard rule of Python, it is best practice that you not declare any unused variables. If we had declared it ( `age = 29` ) but not referenced it - it is considered unused, but you will not see an error when running the programme like you would with a more strict language; rather, the interpreter will just clean up the memory at the end of the programme run.

Running the application now, you should see the following output:

```bash
$ python first.py
Hello World. My name is Jordan.
I have 4 hobbies, and they are: 
hiking
playing music
example1
example2
```

We're now going to bring back the `age` variable and, depending on its value, we'll print one of the following:

* If `age` is less than 10, we will print "I am x years young".
  
* If `age` is more than 10, we will print "I am x years old".

To do this we're going to use an `if` statement. The syntax for declaring an `if` statement in Python is simple:

```python
if expression:
    // Run this code if expression evaluates to true
```

To perform an action dependant on `age`, we can simply add two `if` statements to our code ( Note: we have omitted all of the code not related to `age`, at this stage, to focus on what we're discussing )

```python
#!/bin/env python

# Start of our code

age = 31

if age < 10:
    print("I am {0} years young".format(age))

if age > 10:
    print("I am {0} years old".format(age))

# End of our code
```

We are now performing two checks:

* Is `age` less than ( `<` ) 10? If it is, we print out the first message.

* Is `age` greater than ( `>` ) 10? If it is, we print out the second message.

Perfect! Actually, unfortunately not. There are two things wrong with this code snippet.

**Problem 1**

We're checking if `age` is less than ( `<` ) and greater than ( `>` ) 10, but what if `age` is 10? It doesn't call either Print statements.

```bash
python conditionals.py
```

To fix this we first need to decide what statement we should print if the persons `age` is 10. I think 10 is still pretty young so let's print out the first statement. If you disagree, see if you can make it print out the second statement.

We then need to change our "less than" ( `<` ) condition, to be "less than or equal to" ( `<=` ).

```python
#!/bin/env python

# Start of our code

age = 31

if age <= 10:
    print("I am {0} years young".format(age))

if age > 10:
    print("I am {0} years old".format(age))

# End of our code
```

Now if we run our programme with an `age` of 10, we get our message printed!

```bash
$ python conditionals.py
I am 10 years young
```

**Problem 2**

Regardless of what value is given to `age`, we're always checking two things:

* Is the value less than or equal to 10?

* Is the value greater than 10?

In this situation `age` can only match one of these expressions, so we're asking the computer to do extra work. This might not seem like a big deal now, but if we grew our application to have thousands or millions of unnecessary checks we'd see a big performance hit.

Instead of two `if` statements, we can use an `if/else` statement. The syntax for declaring an `if/else` statement is very simple:

```python
if expression:
    # Run this code if expression evaluates to true
else:
    # Run this code if expression evaluates to false
```

The `age` variable is only ever going to be less than or equal to 10, or greater than 10, as we've previously stated. So we only need to check for one of those conditions, everything else fits in the `else` statement:

```python
#!/bin/env python

# Start of our code

age = 31

if age <= 10:
    print("I am {0} years young".format(age))
else:
    print("I am {0} years old".format(age))

# End of our code
```

Take some time to have a play with the code - we'll still be here when you're ready to continue.

*Ready?*

Excellent. Let's take this to the next level and make our programme more "age aware". This time we're going to check for four possible outcomes:

* If the `age` variable is less than 13, we will print "I am considered a child"

* If the `age` variable is between 13 and 19, we will print "I am considered a teenager"

* If the `age` variable is between 20 and 67, we will print 'I am considered an adult'.

* If the `age` variable is 68 or older, we will print "I am considered a senior".

We already know having four separate `if` statements isn't a good idea, but an `if/else` statement can only handle two outcomes so what are we to do now? We can use the `if/elif/else` statement!

The syntax for declaring an `if/elif/else` statement is  very simple:

```python
if expression:
    # Run this code if expression evaluates to true
elif anotherExpression:
    # Run this code if anotherExpression evaluates to true
elif yetAnotherExpression:
    # Run this code if yetAnotherExpression evaluates to true
else:
    # Run this code if none of the above expressions have evaluated to true
```

The difference between `else` and `elif` is the latter allows us to specify another expression.

If the first expression hasn't evaluated to true, then the next expression is checked. This continues until an expression does evaluate to true, an `else` statement or the conditional statement ends.

If an expression does evaluate to true, it skips the rest of the `elif` and `else` statements.

We can easily use this logic in our programme, without needing to learn many new concepts:

```python
package main

# Start of our code

age = 70

if age < 13:
    print("I am considered a child")
elif age >= 13 and age < 20:
    print("I am considered a teenager")
elif age >= 20 and age < 68:
    print("I am considered an adult")
else:
    print("I am considered a senior")

# End of our code
```

Let's run through these expressions, one by one:

* `if age < 13` - we check if `age` is less than ( < ) 13. If it is, we print out the "child" statement and don't have to perform any more checks.

* `elif age >= 13 and age < 20` - we check if `age` is greater than or equal to ( >= ) 13 and if `age` is less than 20. This gives us a range of 13 - 19. If the expression evaluates to true we print out the "teenager" statement and don't have to perform any more checks.

* `elif age >= 20 and age < 68` - we check if `age` is greater than or equal to ( >= ) 20 and if `age` is less than 68. This gives us a range of 20 - 67. If the expression evaluates to true we print out the "adult" statement, and don't have to perform any more checks.

* `else` - if `age` is any other value (i.e. 68 or above) we print out the "senior" statement.

Now let's add back the code from the beginning of this article:

```python
#!/bin/env python

# Start of our code

name = "Jordan"
age = 31
hobbies = ["hiking", "playing music", "example1", "example2"]

print("Hello World. My name is {0}.".format(name))

if age < 13:
    print("I am considered a child")
elif age >= 13 and age < 20:
    print("I am considered a teenager")
elif age >= 20 and age < 68:
    print("I am considered an adult")
else:
    print("I am considered a senior")

print("I have {} hobbies, and they are: ".format(len(hobbies)))

i = 0
while i < len(hobbies):
    print(hobbies[i])
    i+=1

# End of our code
```

That's it - we've now added an `if/elif/else` statement to our Python programme!

Before you go, see if you can complete the following challenge:

* It is possible to optimise the last `if/elif/else` statement further, see if you can figure out how.
*Hint*: we're still asking the computer to do more work than is necessary.

If you need another hint, or want to show us your solution, get in touch with us on our [Contact Us](https://www.codetips.co.uk/contact-us/) page.



