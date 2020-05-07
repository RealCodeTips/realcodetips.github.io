---
title: "Arrays and Loops in JavaScript"
date: 2019-07-18T15:07:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/arrays_and_loops_in_javascript.jpg"

# meta description
description: "In this article, we’re going to extend our programme and have it print out all of our hobbies using arrays and loops."

# taxonomies
# category: "beginner"
tags:
- beginner
- go

slug: "arrays-and-loops-in-javascript"

# post type
layout: post
---


Before reading this article, you should have an understanding of [arrays](https://www.codetips.co.uk/beginner/what-are-arrays/), [types](https://www.codetips.co.uk/beginner/what-is-a-data-type/) and [loops](https://www.codetips.co.uk/beginner/what-are-loops/).

In "writing your first JavaScript programme”, we wrote a programme that outputted **my** name, age and profession.

You were asked to complete two challenges at the end of the "writing your first JavaScript programme” article (below).

* Change the variables so the programme prints out your name, age and profession, instead of mine.
* Add a new variable, `favoriteAnimal`, and incorporate that into your outputted sentence.

To complete the second challenge, you should have ended up with something like the following:

```js
const name = "Simon"
const age = 29
const profession = "Developer"
const favouriteAnimal = "dog"

console.log(`
  Welcome to my first JavaScript programme. 
  My name is ${name}. 
  I am ${age} years old. 
  I work as a ${profession}.
  My favourite animal is a ${favouriteAnimal}`
)

```

In this article, we’re going to extend our programme and have it print out all of our hobbies.

I have three main hobbies, so the obvious thing is to create three new variables just like we did with our `name`, `age` etc variables.

```js
const name = "Simon"
const age = 29
const profession = "Developer"
const favouriteAnimal = "dog"

const hobby1 = "Coding"
const hobby2 = "Walking"
const hobby3 = "Watching TV"

console.log(`
  Welcome to my first JavaScript programme. 
  My name is ${name}. 
  I am ${age} years old. 
  I work as a ${profession}.
  My favourite animal is a ${favouriteAnimal}`
)

console.log(`
  My hobbies are: ${hobby1}, ${hobby2}, ${hobby3}
`)

```

Running our programme now, using the `node index.js` command we discussed previously, will output the following:

```Bash
$ node index.js

Welcome to my first JavaScript programme. 
My name is Simon. 
I am 29 years old. 
I work as a Developer.
My favourite animal is a dog

My hobbies are: Coding, Walking, Watching TV

```

We’ve added a second `console.log` statement, which prints our hobbies.

That’s all we wanted to do in this article so we’re done, right? Nope! While this may look acceptable for three hobbies, what if we had ten?

```js
const name = "Simon"
const age = 29
const profession = "Developer"
const favouriteAnimal = "dog"

const hobby1 = "Coding"
const hobby2 = "Walking"
const hobby3 = "Watching TV"
const hobby4 = "example4"
const hobby5 = "example5"
const hobby6 = "example6"
const hobby7 = "example7"
const hobby8 = "example8"
const hobby9 = "example9"
const hobby10 = "example10"

console.log(`
  Welcome to my first JavaScript programme. 
  My name is ${name}. 
  I am ${age} years old. 
  I work as a ${profession}.
  My favourite animal is a ${favouriteAnimal}`
)

console.log(`
  My hobbies are: ${hobby1}, ${hobby2}, ${hobby3}, ${hobby4}, ${hobby5}, ${hobby6}, ${hobby7}, ${hobby8}, ${hobby9}, ${hobby10}
`)

```

It’s not looking so clean now, is it? Can you imagine what it would look like if we had one hundred hobbies?

This method is also very error-prone. Imagine typing out 100 variables and adding them to our `console.log` statement. Are you confident that you wouldn’t make a mistake? Even a simple spelling mistake could cause unforeseen circumstances in the future.

Surely there’s a better way then!? Thankfully, there is! [Arrays](https://www.codetips.co.uk/beginner/what-are-arrays/)!

In JavaScript, arrays can contain any combination of [types](https://www.codetips.co.uk/beginner/what-is-a-data-type/) and are declared using square brackets (`[]`).

**Note:**  multi-type arrays, like `mixedArr` in the below example, can lead to unforeseen circumstances if you think you are dealing with one type, but are dealing with another, so apply extra caution if you need to use them.

```js
const stringArr = ['string1', 'string2', 'string3']
const intArr = [1, 2, 3]
const boolArr = [true, false, false]

const mixedArr = ['string1', 2, false, 'string2', 5, true]

```

Before we continue with the article, try to complete the following challenges:

* Take the ten hobby variables (`hobby1`, `hobby2` etc) and convert them into one `hobbies` array.
* Change the `console.log` statement to print out new array, instead of the ten variables.

Done? Excellent, well done. You should have ended up with something pretty similar to this:

```js
const name = "Simon"
const age = 29
const profession = "Developer"
const favouriteAnimal = "dog"

const hobbies = ["Coding", "Walking", "Watching TV", "example4", "example5", "example6", "example7", "example8", "example9", "example10"]

console.log(`
  Welcome to my first JavaScript programme. 
  My name is ${name}. 
  I am ${age} years old. 
  I work as a ${profession}.
  My favourite animal is a ${favouriteAnimal}`
)

console.log(`
  My hobbies are: ${hobbies}
`)

```

Running the application now (`node index.js`) should give you the following output:

```Bash
$ node index.js

Welcome to my first JavaScript programme. 
My name is Simon. 
I am 29 years old. 
I work as a Developer.
My favourite animal is a dog

My hobbies are: Coding,Walking,Watching TV,example4,example5,example6,example7,example8,example9,example10

```

We now have an array that we can add hobbies to, or remove from, without having to create new variables or amend the `console.log` statement.

What would be nice is to log each hobby on a different line.

Remember from the “[what are arrays](http://localhost:2369/what-are-arrays/)” article, that array elements have a corresponding number called an `index`.

JavaScript array indexing start at 0, so our hobbies array could be represented like so:

```js
index = [    0    ,    1     ,       2      , ...]
array = [ "Coding", "Walking", "Watching TV", ...]

```

So we could log each of our hobbies on different lines by targeting the respective indexes.

```js
const name = "Simon"
const age = 29
const profession = "Developer"
const favouriteAnimal = "dog"

const hobbies = ["Coding", "Walking", "Watching TV", "example4", "example5", "example6", "example7", "example8", "example9", "example10"]

console.log(`
  Welcome to my first JavaScript programme. 
  My name is ${name}. 
  I am ${age} years old. 
  I work as a ${profession}.
  My favourite animal is a ${favouriteAnimal}`
)

console.log(`
  My hobbies are:
  
  ${hobbies[0]}
  ${hobbies[1]}
  ${hobbies[2]}
  ${hobbies[3]}
  ${hobbies[4]}
  ${hobbies[5]}
  ${hobbies[6]}
  ${hobbies[7]}
  ${hobbies[8]}
  ${hobbies[9]}
`)

```

But now, if we add or remove an item from the `hobbies` array, we then have to update the `console.log` statement. We’ve gone backwards!

But, don’t worry; all is not lost! We can use [loops](https://www.codetips.co.uk/beginner/what-are-loops/) to solve this problem.

We’ll have all of our hobbies printed on a different line and everything will be controlled via the `hobbies` array. That means no more manually editing the `console.log` statement for every change!

Before we jump into creating a loop in our programme, let’s make a simple example of a loop to understand the concept.

If we wanted to log the numbers 1-10 we could write 10 different `console.log` statements, which is very tedious, or we could write a loop to do it for us. In the following example:

1. The `initialization` statement. Evaluated once, before the loop begins. We define a new variable ( `i` ) and assign the value 1 to it ( `let i = 1` ).
2. The `condition` expression. An expression to be evaluated before each loop iteration. It checks if the expression (`i <= 10` - is `i` less than or equal to 10?) evaluates to true and, if so, executes the `statement` (see below).
3. The `final-expression`. An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of the condition. We simply increment the value of `i` (e.g. if the value of `i` is 5, running `i++` would increment it and it would now be 6).
4. The `statement`. A statement that is executed as long as the `condition` expression evaluates to true. We use this to log out the value of `i` to the screen.

```js
for (let i = 1; i <= 10; i++) {
  console.log(i)
}

```

We can now use this new technique to print our hobbies. In the following example:

1. We have added a new `console.log` statement, that prints out how many hobbies we have. We achieve this by using the `length` property of our `hobbies` array which, as the name suggests, returns the length or the number of elements in an array.
2. We define our `initialization` statement, in which we set the value of our variable `i` to `0`. We have set it to `0`, instead of `1`, because JavaScript arrays start at zero as we discussed earlier.
3. We define our `condition` expression, in which we state that the loop should continue while `i` is less than the length of our `hobbies` array (`i < hobbies.length`).
4. We define our `final-expression`, in which we increment the value of `i` (`i++`) as we did in the previous example.
5. We then print each element of our hobbies array, using the element indexes.

```js
const name = "Simon"
const age = 29
const profession = "Developer"
const favouriteAnimal = "dog"

const hobbies = ["Coding", "Walking", "Watching TV", "example4", "example5", "example6", "example7", "example8", "example9", "example10"]

console.log(`
Welcome to my first JavaScript programme. 
My name is ${name}. 
I am ${age} years old. 
I work as a ${profession}.
My favourite animal is a ${favouriteAnimal}
`)

console.log(`I have ${hobbies.length} hobbies, and they are as follows...`)

for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i])
}

```

When explaining each step, I said the `condition` expression states the loop should continue while `i` is less than the length of our hobbies array.

But why should it be less than the length (`i < hobbies.length`, and not less than or equal to the length (`i <= hobbies.length`)? Because JavaScript array indexes start at zero.

Let’s go back to our array representation from earlier:

```js
index = [    0    ,    1     ,       2       ]
array = [ "Coding", "Walking", "Watching TV" ]

```

We only want to access the `0`, `1` and `2` index elements, when looping through this array, which is why our `initialization` statement sets `i` to `0`.

However, the `length` of the array (`array.length`) is 3 (i.e. 3 elements).

So, if we declared our `condition` expression as less than or equal to the length (`i <= hobbies.length`), we would try and access the elements at index positions `0`, `1`, `2` AND `3`. As you can see from the array representation, there is no 3rd index!

If we run our programme now, we’ll see the following output:

```js
$ node index.js

Welcome to my first JavaScript programme. 
My name is Simon. 
I am 29 years old. 
I work as a Developer.
My favourite animal is a dog

I have 10 hobbies, and they are as follows...
Coding
Walking
Watching TV
example4
example5
example6
example7
example8
example9
example10

```

We can add and remove elements from our `hobbies` array, and our programme will figure out the rest!

We appreciate this was a lot of information to take in, so feel free to [reach out to us](https://www.codetips.co.uk/contact-us/) if anything doesn't make sense.

