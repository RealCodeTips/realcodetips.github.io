---
title: "What are arrays?"
date: 2019-03-25T18:10:00Z
draft: false
authors: ["Simon Drake", "Michel Engelen"]

# post thumbnail
image: "assets/images/post/what_are_arrays.jpg"

# meta description
description: "Arrays are collections of data and can hold any data-type permitted by the language."

# taxonomies
# category: "beginner"
tags:
- beginner

slug: "what-are-arrays"

# post type
layout: post
---

> Arrays are collections of data.

Before you read this article, we recommend that you read the [What is a variable](https://codetips.co.uk/beginner/what-is-a-variable/), [What are loops](https://codetips.co.uk/beginner/what-are-loops/) and [What are data-types](https://codetips.co.uk/beginner/what-is-a-data-type/) articles.

In the [What are loops](https://codetips.co.uk/beginner/what-are-loops/) article, we introduced the concept of having a "list" of people.

```
recipients = James, John, Jimmy, Jane, Jake, Jemma, Joanne, Juliet, Jessica, Josh
```

In most languages, this "list" would have been created using an array. An array is simply a collection of data.

An array is made up of elements. An element is an item within an array. In the above example, there are 10 elements (`James` is the first element, `John` is the second etc).

[Syntactically](https://codetips.co.uk/beginner/what-is-syntax/) an array is usually denoted using square brackets (`[` and `]`) with a comma separating each element. Arrays can hold any [data-type](https://codetips.co.uk/beginner/what-is-a-data-type/).

Our list of recipients shows a list of names, which are Strings. To convert this list into an Array we would need to use quotation marks (`"`) so they are interpreted as such.

```js
recipients = ["James", "John", "Jimmy", "Jane", "Jake", "Jemma", "Joanne", "Juliet", "Jessica", "Josh"]
```



It's just as easy to create an Array with other data-types.

```js
integers = [1,6,3,5,98]

floats = [2.4, 56.1, 46.1]

booleans = [true, true, false, true, false]

mixed = [5, true, 2.4, false, 3, 64.2]
```



Array elements have a corresponding number (index). This number is used to target specific elements. In most programming languages indexing starts at zero. Using our recipients example, this would look like the following:

```
recipients = ["James", "John", "Jimmy", "Jane", ... ]
index        |   0   |   1   |   2    |   3   | ...
```

As mentioned above, you can use the index to target specific elements in any order you want:

```js
array[2] // => Jimmy

array[0] // => James

array[3] // => Jane
```
