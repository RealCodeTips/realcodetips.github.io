---
title: "Conditionals in Go (challenge answer)"
date: 2019-06-11T13:33:20.000Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/conditionals_in_go_challenge_answer.jpg"

# meta description
description: "At the end of the last article ( \"Conditionals in Go\" ), we said it was possible to optimise the if/else if/else statement further. Learn how!"

# taxonomies
# category: "beginner"
tags:
- beginner
- go

slug: "conditionals-in-go-challenge-answer"

# post type
layout: post
---



At the end of the last article ( "[Conditionals in Go](https://www.codetips.co.uk/languages/go/conditionals-in-go/)" ), we said it was possible to optimise the `if/else if/else` statement further and gave you the challenge of figuring out how. If you haven't attempted it; we're about to give you the answer, so now's a good time to go and try it.

For reference, here was the `if/else if/else` statement we said could be optimised:

```go
if age < 13 {
  log.Println("I am considered a child")
} else if age >= 13 && age < 20 {
  log.Println("I am considered a teenager")
} else if age >= 20 && age < 70 {
  log.Println("I am considered an adult")
} else {
  log.Println("I am considered a pensioner")
}
```



It can be optimised further because we're still doing more checks than we need to. The following diagram shows the flow of this conditional statement:

![Challenge Answer Flow](/assets/images/content/conditionals_in_go_challenge_answer_answer_flow.jpg)

For example, we're checking if `age` is less than thirteen ( `age < 13` ) and, if it is, we print the "child" statement and end the conditional statement. If it isn't, we then check if age is greater than or equal to thirteen ( `age >= 13` ).

This extra step is unnecessary because we've already checked if age is less than thirteen and, if it isn't, then it has to be equal to or greater than thirteen.

Knowing this, we can simplify the flow of our conditional statement to the following:

![Challenge Answer Simplified Flow](/assets/images/content/conditionals_in_go_challenge_answer_simplified_flow.jpg)

And therefore our `if/else if/else` statement becomes:

```go
if age < 13 {
  log.Println("I am considered a child")
} else if age < 20 {
  log.Println("I am considered a teenager")
} else if age < 70 {
  log.Println("I am considered an adult")
} else {
  log.Println("I am considered a pensioner")
}
```



If this isn't clear, feel free to [reach out to us](https://www.codetips.co.uk/contact-us/) and we'll do what we can to help you.

