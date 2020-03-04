---
title: "What is a function?"
date: 2019-03-29T08:44:00Z
draft: false
authors: ["Simon Drake", "Michel Engelen"]

# post thumbnail
image: "assets/images/post/what_is_a_function.jpg"

# meta description
description: "A function is a predefined block of code that can be executed to perform a specific task"

# taxonomies
# category: "beginner"
tags:
- beginner

slug: "what-is-a-function"

# post type
layout: post
---

> A function is a predefined block of code that can be executed to perform a specific task

Have you ever completed a task and wished there was a way to automate it so you never have to do it again? We have those same problems in programming.

Whenever we encounter tasks like this we can write a function once, and have it perform the task as many times as we need.

What if you have a favourite recipe, originally planned for three people, but you frequently have different numbers of guests and have to manually work out the right ingredient amounts every time?

The calculation you'd have to perform is:

* Divide the original ingredient amount by three (to get the amount needed per person).
* Take the amount per person and multiply it by the number of guests coming.

```js
getIngredientAmount(amount, people) {
    (amount / 3) * people
}
```

Let's break the above code snippet down to make it easier to understand (we'll go into even more detail afterwards so if you don't understand, just stick with it):

* `getIngredientAmount` is the function name.
* The parenthesis after the function name (`()`) represent things we can pass into the function. In this example, we're passing in `amount` and `people`
* The curly brackets (`{}`) represent the function body. This is where all the repetitive tasks take place.

Let's take it a step further and use the new function we've just created. Imagine we've got seven people coming to dinner tonight:

```js
getIngredientAmount(300, 7)
```

These values ( `300` and `7`) then get passed to the `getIngredientAmount` function, which uses these values in place of `amount` and `people`, similar to how a variable name/value works. The function would then run this calculation:

`(300 / 3) * 7)`

Now we've written this function, we can use it as many times as we want.

```js
//-- Get recipe amounts for 5 people --//

// original recipe requires 4 parsnips
getIngredientAmount(4, 5)

// 20 grams of sugar
getIngredientAmount(20, 5)

// and 12 eggs
getIngredientAmount(12, 5)
```

What if we have written 100's of these calculations, and we suddenly realise that the original recipe was actually written for four people!?

That's easy. We just update the function.

```js
getIngredientAmount(amount, people) {
    (amount / 4) * people
}
```

Now anything using this function will also use the updated requirement.

This was just a very simple introduction to functions. There are more complex things we can do with them, but we'll cover that in a later article.
