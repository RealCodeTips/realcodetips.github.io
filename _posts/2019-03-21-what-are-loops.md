---
title: "What are loops?"
date: 2019-03-21T07:41:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "assets/images/post/what_are_loops.jpg"

# meta description
description: "Loops are a programming construct to perform a set task, or group of tasks until a given condition is met."

# taxonomies
# category: "beginner"
tags:
- beginner

slug: "what-are-loops"

# post type
layout: post
---

> Perform a set task, or tasks, until a given condition is met.

If you've been following the articles from the beginning, you'll remember in the [variables](https://codetips.co.uk/beginner/what-is-a-variable/) article we were sending a letter to a number of people.

We made the process a lot easier by creating a variable at the top of our program, which would control who our letter was addressed to. The positives of this technique were discussed in that article, but what we didn't discuss were the negatives.

What if you decided to extend this letter to your friends and colleagues, totalling hundreds of people?

Using only the variable technique you'd have to repeat the process, of updating the variable and running the program, hundreds of times. If you found any mistakes, you'd have to do it all over again. This is far better than keeping hundreds of copies of the same letter, as we discussed in the [variables](https://codetips.co.uk/beginner/what-is-a-variable/) article, but isn't there an even easier way?

Yes. Loops. Below is a reminder of the code we were running in the [variables](https://codetips.co.uk/beginner/what-is-a-variable/) article.

```
name = cfixe18918zt9o7g4nxl

Dear $name

.... body of text goes here that has a reference to the persons name 10 times ....
```

Let's make the process a bit easier, conceptually, by reducing the number of people we want to send this letter to, to 10 people and to reinstate their names instead of a random sequence of letters and numbers.

So let's define our list of people:

```
recipients = James, John, Jimmy, Jane, Jake, Jemma, Joanne, Juliet, Jessica, Josh
```

Next, we can create a loop to go through this list one by one, generate the letter and print it like before:

```
for $name in recipients {
    Dear $name

    .... body of letter ....
}
```

In this scenario we "loop" through the list, one by one, and we set our variable (`$name`) equal to the current person (first James, then John etc...) and we construct our letter using the `$name` variable, like we did before, but that variable will now be updated for each person and a letter generated for them.

Using this technique you only have to run your program once. If you find a mistake in your letter, you fix it once and you run the program again which will generate ALL of the letters for every person in your recipients' list.

You've now cut down on all of that repetition, making it much easier to maintain.

