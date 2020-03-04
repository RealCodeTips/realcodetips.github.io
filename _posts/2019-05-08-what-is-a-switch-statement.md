---
title: "What is a switch statement?"
date: 2019-05-08T19:30:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/what_is_a_switch_statement.jpg"

# meta description
description: "A switch statement evaluates a condition and provides multiple decision points, depending on the value."

# taxonomies
# category: "beginner"
tags:
- beginner

slug: "what-is-a-switch-statement"

# post type
layout: post
---

> A switch statement evaluates a condition and provides multiple decision points, depending on the value.

In previous articles we've discussed the [if](https://codetips.co.uk/beginner/what-is-an-if-statement/) statement and [if/else](https://codetips.co.uk/beginner/what-is-an-else-statement/) statement. The example we discussed, to showcase multiple decision points, was to check the weather and decide what shoes to wear.

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



We're only evaluating three outcomes, `raining`, `snowing` and `sunny`, with an `else` statement to catch every other type of weather, and it's already quite hard to read.

What if we wanted to create a check on something with more possibilities, for example checking the day of the week and performing the appropriate chores?

```js
// Get the current day of the week
var day = getCurrentDay()

if (day == "Monday") {
    // Perform Monday chores
} else-if (day == "Tuesday") {
    // Perform Tuesday chores
} else-if (day == "Wednesday") {
    // Perform Wednesday chores
} else-if (day == "Thursday") {
    // Perform Thursday chores
} else-if (day == "Friday") {
    // Perform Friday chores
} else-if (day == "Saturday") {
    // Perform Saturday chores
} else-if (day == "Sunday") {
    // Perform Sunday chores
} else {
    // Unknown day
}
```



We're still not evaluating that many outcomes, but it's getting increasingly difficult to read. Imagine if we took this a step further and evaluated the week number and needed to evaluate 52 outcomes.

Enter the `switch` statement. It is very similar to an `if` statement, in that it takes a condition and provides multiple decision points, but it's much easier to read and maintain.

Let's take the day of the week example from above and convert it to a switch statement.

```js
// Get the current day of the week
var day = getCurrentDay()

switch (day) {
  case "Monday":
    // Perform Monday chores
  case "Tuesday":
    // Perform Tuesday chores
  case "Wednesday":
    // Perform Wednesday chores
  case "Thursday":
    // Perform Thursday chores
  case "Friday":
    // Perform Friday chores
  case "Saturday":
    // Perform Saturday chores
  case "Sunday":
    // Perform Sunday chores
  default:
    // Unknown Day
}
```



The finer details of how to write `switch` statements will be discussed in future language-specific articles, but the concept is the same as an `if` statement; it checks a condition ( in this example the value of `day` ) and checks it against each `case` statement. If the condition matches the `case` statement, it will evaluate the code in that section.

Just like an `else` statement, the `default` statement in a `switch` provides a catch-all for anything that doesn't match any of the `case` statements.




