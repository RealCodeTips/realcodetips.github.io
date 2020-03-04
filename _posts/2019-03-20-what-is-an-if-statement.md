---
title: "What is an if statement?"
date: 2019-03-20T13:50:00Z
draft: false
author: "Michael Engelen"

# post thumbnail
image: "assets/images/post/what_is_an_if_statement.jpg"

# meta description
description: "Variables are used to store information once, referenced by an alias, and used multiple times throughout the code; reducing duplication."

# taxonomies
# category: "beginner"
tags:
- beginner

slug: "what-is-an-if-statement"

# post type
layout: post
---

> An if statement, in programming terms, is a condition statement. When the condition is satisfied, it performs an action (or block of code)

If you ever asked yourself how apps or websites decide if a view should be shown; chances are there is an `if` statement.

An `if` statement is the most basic method to decide if a certain block of code should be executed or not based on a condition.

You can liken it to making a simple decision: _ **"Should I go outside and take a walk?"** _

If the answer to this is  _**Yes** _ you have to put on your shoes (that's the block of code that needs to be executed if the condition is met). So in programmatic terms it could look something like this:

```
if (takeWalkOutside) {
    // put on your shoes
}
```

If you decide not to go outside (the `takeWalkOutside` condition is not met), the action of putting on your shoes (the code inside the if statement) is skipped.


