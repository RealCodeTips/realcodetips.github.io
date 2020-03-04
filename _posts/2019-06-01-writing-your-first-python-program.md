---
title: "Writing your first Python programme"
date: 2019-06-01T10:07:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/writing_your_first_python_programme.jpg"

# meta description
description: "By the end of this article, you will have written a Python program that outputs a sentence based on a number of variables."

# taxonomies
# category: "beginner"
tags:
- beginner
- python

slug: "writing-your-first-python-program"

# post type
layout: post
---


>By the end of this article, you will have written a Python programme that outputs a sentence based on a number of variables.

If you've made it to this article you should have read the [Python Introduction](https://www.codetips.co.uk/languages/python/python-introduction/), and be familiar with [variables](https://www.codetips.co.uk/beginner/what-is-a-variable/) and [data-types](https://www.codetips.co.uk/beginner/what-is-a-data-type/).

As we stated in the [Python Introduction](https://www.codetips.co.uk/languages/python/python-introduction/), Python is a [weakly-typed](https://www.codetips.co.uk/intermediate/translation-and-types/) language so its types are [inferred](https://www.codetips.co.uk/intermediate/translation-and-types/). 

There is only one way to declare a variable in Python.

In the following example:
* `x` is assigned the value `"Hello World"` and has an inferred type of `String`.
* `y` is assigned the value `True` and has an inferred type of `Bool`.
* `a` is assigned the value `1` and has an inferred type of `Int`.
* `b` is assigned the value `3.14159` and has an inferred type of `Float`.

```python
x = "Hello World"
y = True
a = 1
b = 3.14159
```



As Python is a [weakly-typed language](https://www.codetips.co.uk/intermediate/translation-and-types/), there is no way to declare a variable as a specific [data-type](https://www.codetips.co.uk/beginner/what-is-a-data-type/). 

It is, however, possible to perform logic based on the type, using the `type()` function. 

The following [`if` statement](https://www.codetips.co.uk/beginner/what-is-an-if-statement/) checks to see if the type of `y` is `bool` and, if `True`, will run the `<do something>` action. Otherwise, it will skip the indented section of code. 

```python
y = True

if type(y) is bool:
    <do something>
```

It is also possible to perform "type casting" in Python. In the following example:

* The variable `x` is assigned the value `1` and has an inferred type of `Int`.
* The value of `x` (`1`) is "casted" to a `float` and assigned to the variable `y`. The type of `y` is therefore `float`.

```python
x = 1
y = float(x)

print(type(x)) // => outputs int 
print(type(y)) // => outputs float
```

---

##Your first Python programme

It's finally time to write your first Python programme. You can write this anywhere on your machine, however, it is best practice to keep your development code in a specific place and well organized.

Within your home directory (`$HOME` on Linux and Mac, `%userprofile%` on Windows) create a new directory called `python` (e.g. the full Linux path would be `/home/codetips/python` ). Navigate to this directory and create another directory called `firstApplication` (e.g. the full Linux path would be `/home/codetips/python/firstApplication`) and open it in your code editor of choice.

We're going to leave out most of the specifics of Python best practices, so you're not overwhelmed with too much information, but everything will be explained in future articles.

In your new `firstApplication` directory, create a new file called `main.py`, add the below code into it, and save the file.

```python
#!/bin/env python

# Start of our code

print("Welcome to my first Python programme!")

# End of our code

```



Now, open a terminal, navigate to your `firstApplication` folder, and run the following command:

`python main.py`

Your output should look very similar to the following:

```bash
$ [user@linux]: python main.py
Welcome to my first Python programme!
```



As you can see, the `print` function outputs text to the terminal. Unfortunately, as a first programme goes, this is pretty boring. Let's make this more personal with [Variables](https://www.codetips.co.uk/beginner/what-is-a-variable/)!

Replace the contents of `main.py` with the following code:
```python
#!/bin/env python

# Start of our code

name = "Jordan"
age = 31
profession = "Developer"

print("""Welcome to my first Python programme!\n\
My name is {0}\n\
I am {1} years old\n\
I work as a {2}""".format(name, age, profession))

# End of our code
```



This time we're outputting four different sentences. One from the previous example and the other three are using the same `print` function, but notice the `.format()` function at the end of the string definition. 

The `"""` statement in Python means that we are going to create a multi-line string. 

The `format` function allows the programmer to pass variables through to the string. In the above example:

* the `name` variable (in position `0`, referenced in the string as `{0}`)
* the `age` variable (in position `1`, referenced in the string as `{1}`)
* the `profession` variable (in position `2`, referenced in the string as `{2}`).

Knowing the position of the variables, also known as the `index`, allows the programmer to repeat the same thing any number of times by simply referencing the position within the string. We will cover this in a future article.


We can define strings in the following ways:

```python
string1 = "This is a string using double-qoutes"
string2 = 'This is a string using single-quotes"
string3 = `This is a string using back-ticks`
string4 = """This is a multi-line string \
using double-quotes"""
string5 = '''This is a multi-line string \
using single-quotes'''
```



It is best practice to use double-quotes by default, but all of the above are valid python syntax.

Now see if you can complete the following challenges:

* Change the variables so the programme prints out **your** name, age and profession.
* Change the programme to output everything on one line, instead of four lines.
* Add a new variable, `favoriteAnimal` , and incorporate that into your outputted sentence. 

Tweet us at [@RealCodeTips](https://twitter.com/realcodetips) and show us your solutions. If you get stuck along the way, reach out and we'll do our best to help.




