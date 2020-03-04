---
title: "Writing your first Go programme"
date: 2019-05-25T14:41:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/writing_your_first_go_programme.jpg"

# meta description
description: "By the end of this article, you will have written a Go programme that outputs a sentence based on a number of variables."

# taxonomies
# category: "beginner"
tags:
- beginner
- go

slug: "writing-your-first-go-programme"

# post type
layout: post
---


> By the end of this article, you will have written a Go programme that outputs a sentence based on a number of variables.

If you've made it to this article you should have read the [Go Introduction](https://www.codetips.co.uk/languages/go/go-introduction/), and be familiar with [variables](https://www.codetips.co.uk/beginner/what-is-a-variable/) and [data-types](https://www.codetips.co.uk/beginner/what-is-a-data-type/).

The [syntax](https://www.codetips.co.uk/beginner/what-is-syntax/) for declaring a variable in Go defines a few ways of declaring a variable, which we're going to break down into two groups.

### Explicitly typed

If the programmer specifies a [type](https://codetips.co.uk/beginner/what-is-a-data-type/) when declaring a variable, it is said that the variable is explicitly typed.

In the following example:

* `x` is declared as a `string`, and the value of `x` is `"Hello World"`.
* `y` is declared as a `bool`, but is not assigned a value*.
* `a` and `b` are both declared as `int`, and given their respective assignments ( `a=1`, `b=2` ).

```go
var x string = "Hello World"

var y bool

var a, b int = 1, 2
```



### Inferred Type

If the programmer does not specify a [type](https://codetips.co.uk/beginner/what-is-a-data-type/) when declaring a variable, it is said that the type of the variable is inferred from the assignment value.

In the following example:

* `x` is assigned to a value of `"Hello World"` and has an inferred type of `string`.
* `y` is assigned to a value of `true` and has an inferred type of `bool`.

```go
var x = "Hello World"

y := true
```



If you need to be absolutely sure that a variable is of a specific [data-type](https://www.codetips.co.uk/beginner/what-is-a-data-type/) (e.g. a `float` instead of an `int`), use the explicitly typed method, otherwise, use common sense for which is better in each circumstance.

* When a variable is declared without an initial value, they are given the zero value. This is `0` for numeric types, `false` for booleans and `""` (an empty string) for strings.

---

### Your first Go programme

It's finally time to write your first Go programme. When [installing](https://golang.org/doc/install) Go, you would have set-up your Go directory ( e.g. `/usr/local/go` in Linux environments ).

Within this directory, create a new directory under `/src/firstApplication` (e.g. the full Linux path would be `/usr/local/go/src/firstApplication` ) and open it in your code editor of choice.

We're going to leave out most of the specifics of Go, so you're not overwhelmed with too much information, but everything will be explained in future articles.

In your new `firstApplication` directory, create a new file called `main.go`, add the below code into it, and save the file.

```go
package main

import "log"

func main() {

	// Start of our code

	log.Println("Welcome to my first Go programme.")

	// End of our code

}

```



Now, open a terminal, navigate to your `firstApplication` folder, and run the following command:

```bash
go run main.go
```



Your output should look very similar to the below.

![Programme Output](/assets/images/content/writing_your_first_go_programme_programme_output.jpg)



As you can see, the `log.Println` function outputs text to the terminal. Unfortunately, as a first programme goes, this is pretty boring. Let's make this more personal with [Variables](https://www.codetips.co.uk/beginner/what-is-a-variable/)!

Replace the contents of `main.go` with the following code:

```go
package main

import "log"

func main() {

	// Start of our code

	var name string = "Simon"
	var age int = 29
	var profession string = "Developer"

	log.Println("Welcome to my first Go programme.")
	log.Printf("My name is %s", name)
	log.Printf("I am %d years old", age)
	log.Printf("I work as a %s", profession)

	// End of our code

}
```



This time we're outputting four different sentences. One from the previous example and the other three are using a new function called `Printf`. This function allows the programmer to pass in one or more variables; by specifying the variables [data-type](https://www.codetips.co.uk/beginner/what-is-a-data-type/) ( `%s` for a `string` and `%d` for an `integer` ).

Now see if you can complete the following challenges:

1. Change the variables so the programme prints out your name, age and profession.
2. Change the programme to output everything in one sentence, instead of four different sentences.
3. Add a new variable, `favouriteAnimal` , and incorporate that into your outputted sentence.

Tweet us at [@RealCodeTips](https://twitter.com/RealCodeTips) and show us your solutions. If you get stuck along the way, reach out and we'll do our best to help.

