---
title: "What is an else statement?"
date: 2019-04-05T14:53:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/what_is_an_else_statement.jpg"

# meta description
description: "An else statement is a block of code to run when a condition is not met. The condition is first defined in an if statement."

# taxonomies
# category: "beginner"
tags:
- beginner

slug: "what-is-an-else-statement"

# post type
layout: post
---

> An else statement is a block of code to run when a condition is **not** met

In [What is an if statement?](https://codetips.co.uk/beginner/what-is-an-if-statement/) you were introduced to `if` statements. We posed a question (" __Should I go outside and take a walk_?") and wrote some [pseudocode](https://codetips.co.uk/beginner/what-is-pseudo-code/) on how this could be represented in an_ `if` statement:

```js
if (takeWalkOutside) {
    // put on your shoes
}
```



But what if our logic wasn't as simple as this and instead we want to find out what shoes we should wear, based on the weather?

Luckily we only own two pairs of shoes, so our logic is still nice and simple: if it's raining outside, we want to wear our wellies, otherwise we'll wear trainers.

This is where we can use an `else` statement.

```js
if (raining) {
    // put on wellies
} else {
    // put on trainers
}
```



In this example, we'll perform the action (putting on trainers) whenever the `raining` condition is **not** met.

But what if we don't just own two pairs of shoes? What if we own sandals, for when it's sunny, and snow boots, for when it's snowing.

Using an `else` statement wouldn't help us achieve this. Currently, we're only checking if it's raining, every other situation will result in the same action (putting on trainers).

We can, however, use `else-if`. This will allow us to check for multiple conditions.

```js
if (raining) {
    // put on wellies
} else-if (snowing) {
    // put on snow boots
} else-if (sunny) {
    // put on sandals
} else {
    // stay indoors
}
```



Now we can check whether it's raining, snowing or sunny and wear the appropriate footwear.

Notice how we still have the `else` statement, but this time we're going to stay indoors if it's any other type of weather.

