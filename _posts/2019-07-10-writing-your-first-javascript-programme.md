---
title: "Writing your first JavaScript programme"
date: 2019-07-10T19:22:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/writing_your_first_javascript_programme.jpg"

# meta description
description: "By the end of this article, you will have written a JavaScript programme that outputs a sentence based on a number of variables."

# taxonomies
# category: "beginner"
tags:
- beginner
- javascript

slug: "writing-your-first-javascript-programme"

# post type
layout: post
---


> By the end of this article, you will have written a JavaScript programme that outputs a sentence based on a number of variables.

If you've made it to this article you should have read the [JavaScript Introduction](https://www.codetips.co.uk/languages/javascript/javascript-introduction/), and be familiar with [variables](https://www.codetips.co.uk/beginner/what-is-a-variable/) and [data-types](https://www.codetips.co.uk/beginner/what-is-a-data-type/).

JavaScript is a weakly-typed language, so its types are [inferred](https://www.codetips.co.uk/intermediate/translation-and-types/). To declare a variable in JavaScript we can either use the `var`, `let` or `const` keywords.

The `var` declaration pre-dates `let` and `const`, but it is generally accepted that the latter should be used.

When to use `let` or `const` depends on whether you are likely to change your variable at a later stage. If the answer to that question is no, use `const` (short for **constant**) otherwise use `let`.

In the following example:

* `x` is assigned the value `"Hello World"` and has an inferred type of `string`.
* `y` is assigned the value `true` and has an inferred type of `boolean`.
* `a` is assigned the value `1` and has an inferred type of `number`.

```js
var x = "Hello World"

const y = true

let a = 1
```

As JavaScript is a [weakly-typed language](https://www.codetips.co.uk/intermediate/translation-and-types/), there is no way to declare a variable as a specific [data-type](https://www.codetips.co.uk/beginner/what-is-a-data-type/).

---

## Your first JavaScript programme

It's finally time to write your first JavaScript programme. You can write this anywhere on your machine, however, it is best practice to keep your development code well organised.

Create a new directory, in a location of your choice, called `firstApplication`, and open it in your code editor of choice.

In your new `firstApplication` directory, create a new file called `index.js`, add the below code into it, and save the file.

```js
console.log("Welcome to my first JavaScript programme")
```

Now, open a terminal, navigate to your `firstApplication` folder, and run the following command:

```bash
node index.js

```

Your output should look very similar to the following:

```bash
$ node index.js         
Welcome to my first JavaScript programme

```

As you can see, the `console.log` function outputs text to the terminal. Unfortunately, as a first programme goes, this is pretty boring. Let's make this more personal with [variables](https://www.codetips.co.uk/beginner/what-is-a-variable/)!

Replace the contents of `index.js` with the following code:

```js
const name = "Simon"
const age = 29
const profession = "Developer"

console.log(
  "Welcome to my first JavaScript programme. My name is %s. I am %d years old. I work as a %s", 
  name, age, profession
)

```

We’ve extended our programme to output a longer sentence with some specific information about us.

Notice in the first parameter, to `console.log` (the text beginning “Welcome to my first”), we have string substitution (`%s` and `%d`). These are effectively placeholders that we then pass in as additional arguments to `console.log` (`name`, `age` and `profession`).

The significance of the letter after the percent (`%`) sign, is it defines the type of the argument that will be passed in (`%s` denotes a string and `%d` an int).

Another way to write this is to use something called a template literal:

```js
console.log(`Welcome to my first JavaScript programme. My name is ${name}. I am ${age} years old. I work as a ${profession}.`)

```

See how we’ve used backticks (```) instead of double quotation marks (`"`), and our placeholders are now declared using a dollar sign and curly braces (`${}`) instead of string substitution.

Well done for finishing your first JavaScript programme! Now see if you can complete the following challenges:

* Change the variables so the programme prints out your name, age and profession, instead of mine.
* Add a new variable, `favoriteAnimal`, and incorporate that into your outputted sentence.

Remember you can always [reach out to us](https://www.codetips.co.uk/contact-us/) with any questions or feedback - we’d love to hear from you!

