---
title: "Arrays and Loops in Go"
date: 2019-05-30T11:30:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/arrays_and_loops_in_go.jpg"

# meta description
description: "In this article, we’re going to extend the programme from \"writing your first programme in Go\" and learn about Arrays and Loops."

# taxonomies
# category: "beginner"
tags:
- beginner
- go

slug: "arrays-and-loops-in-go"

# post type
layout: post
---


Before reading this article, you should have read about [arrays](https://www.codetips.co.uk/beginner/what-are-arrays/), [types](https://www.codetips.co.uk/beginner/what-is-a-data-type/) and [loops](https://www.codetips.co.uk/beginner/what-are-loops/).

In "[writing your first programme in Go](https://www.codetips.co.uk/languages/go/writing-your-first-go-programme/)", we wrote a programme that outputted your name, age and profession. In this article, we’re going to extend that programme and have it print out all of your hobbies as well.

**Note:** You were also asked to complete three challenges at the end of "[writing your first programme in Go](https://www.codetips.co.uk/languages/go/writing-your-first-go-programme/)". We’re going to assume you completed them. If you haven’t, this article shows you the solutions so make sure you at least try them.

After completing all three challenges, you should have ended up with something similar to this:

```go
package main

import "log"

func main1() {

	// Start of our code

	var name string = "Simon"
	var age int = 29
	var profession string = "Developer"
	var favouriteAnimal string = "Dog"

	log.Printf(
		"Welcome to my first Go programme. My name is %s. I am %d years old. I work as a %s. My favourite animal is a %s",
		name, age, profession, favouriteAnimal,
  )
  
  // End of our code

}
```

We now want to add another piece of information; what our hobbies are.

I have three main hobbies, so the obvious thing to do is to create three new variables and print them to the terminal as we did before:

```go
package main

import "log"

func main() {

	// Start of our code

	name := "Simon"
	age := 29
	profession := "Developer"
	favouriteAnimal := "Dog"

	hobby1 := "Coding"
	hobby2 := "Walking"
	hobby3 := "Watching TV"

	log.Printf(
		"Welcome to my first Go programme. My name is %s. I am %d years old. I work as a %s. My favourite animal is a %s",
		name, age, profession, favouriteAnimal,
	)

	log.Printf("My hobbies are: %s, %s, %s", hobby1, hobby2, hobby3)

	// End of our code

}
```



**Note:** We have changed our variables to shorthand ( e.g. `name := "Simon"` instead of `var name string = "Simon"` ) because in this scenario it's safe to let Go infer the types, and it's cleaner.

We've now added a second `Printf` statement which prints our hobbies to the screen. Pretty neat huh? Well, actually, no.

It may look acceptable to do this for three hobbies, but what if you had ten hobbies?

```go
package main

import "log"

func main() {

	// Start of our code

	name := "Simon"
	age := 29
	profession := "Developer"
	favouriteAnimal := "Dog"

	hobby1 := "example1"
	hobby2 := "example2"
	hobby3 := "example3"
	hobby4 := "example4"
	hobby5 := "example5"
	hobby6 := "example6"
	hobby7 := "example7"
	hobby8 := "example8"
	hobby9 := "example9"
	hobby10 := "example10"

	log.Printf(
		"Welcome to my first Go programme. My name is %s. I am %d years old. I work as a %s. My favourite animal is a %s",
		name, age, profession, favouriteAnimal,
	)

	log.Printf(
		"My hobbies are: %s, %s, %s, %s, %s, %s, %s, %s, %s, %s",
		hobby1, hobby2, hobby3, hobby4, hobby5, hobby6, hobby7, hobby8, hobby9, hobby10,
	)

	// End of our code

}
```



It's starting to look a bit messy, isn't it? What if we had 100 hobbies?

There must be a better way! Thankfully, there is. [Arrays](https://www.codetips.co.uk/beginner/what-are-arrays/)!

In Go, arrays can only contain one [type](https://www.codetips.co.uk/beginner/what-is-a-data-type/) and are declared using `[]` followed by the type it will hold.

**Note:** In Go, arrays have a fixed length (the number of items it can hold); the number inside the `[]` is the size of the array.

```go
var stringArr [2]string
var intArr [2]int
var boolArr [2]bool
```



In the above example, we haven't put any values in our array, so they will be empty.

We can immediately add items into our array by using `{}` after the type declaration.

```go
var stringArr = [2]string{"string1", "string2"}
var intArr = [2]int{1, 2}
var boolArr = [2]bool{true, false}
```



Before we go any further, try to complete the following challenges:

- Take the ten `hobby` variables and convert them into one `hobbies` array.

- Change the `Printf` statement to print out the new array, instead of the ten variables.

Done? Excellent. You should have ended up with something similar to this:

```go
package main

import "log"

func main() {

	// Start of our code

	name := "Simon"
	age := 29
	profession := "Developer"
	favouriteAnimal := "Dog"

	hobbies := [10]string{"example1", "example2", "example3", "example4", "example5", "example6", "example7", "example8", "example9", "example10"}

	log.Printf(
		"Welcome to my first Go programme. My name is %s. I am %d years old. I work as a %s. My favourite animal is a %s",
		name, age, profession, favouriteAnimal,
	)

	log.Printf("My hobbies are: %s", hobbies)

	// End of our code

}
```



Running your application now ( `go run main.go` ) should give you the following output:

```bash
2019/05/29 17:14:53 Welcome to my first Go programme. My name is Simon. I am 29 years old. I work as a Developer. My favourite animal is a Dog
2019/05/29 17:14:53 My hobbies are: [example1 example2 example3 example4 example5 example6 example7 example8 example9 example10]
```



Now we have our `hobbies` array we can add and remove items easily, without having to create new variables or amend the `Printf` statement.

So our code is now looking nice and neat, but I'm still not very keen on what we're outputting to the terminal; we've got those ugly square brackets ( `[]` ) and what happens if we add a new hobby, which is made up of multiple words?

```go
hobbies := [4]string{"example1", "mountain biking", "example2", "example3"}
```



Which would print:

```bash
2019/05/29 17:25:44 My hobbies are: [example1 mountain biking example2 example3]
```



Is it "mountain biking" or "mountain" and "biking"?

So do we have to go back to separate variables? Thankfully not! We can use a [loop](https://www.codetips.co.uk/beginner/what-are-loops/)!

Before we change our programme, let's make a simple example of a loop to understand the concept.

If we wanted to print the numbers 1-10 we could write 10 different `Print` statements, which is very manual, or we could write a loop to do it for us. In the following example:

1. The `init statement`. Executed before the first iteration of the loop, we define a new variable ( `i` ) and assign the value `1` to it ( `i := 1` ).

2. The `condition expression`. Executed before each iteration of the loop, it checks if the expression ( `i <= 10` - is `i` less than or equal to 10? ) is true. If it is, it runs another iteration.

3. The `post statement`. Executed after each iteration of the loop, it simply increments the value of `i` (e.g. if the value of `i` is 3, running `i++` would increment it and it would now be 4)

4. We then print the value of `i` during each iteration.

```go
package main

import "log"

func main() {

	for i := 1; i <= 10; i++ {
		log.Println(i)
	}

}
```



We can now use this new technique to print our hobbies. In the following example:

1. We have added a new `Printf` statement that prints the number of hobbies we have. The `len` method simply returns the length of the array; in this example 4.

2. We define our `init statement` and set the value of `i` to `0`. We have set it to `0` instead of `1` because Go array indexes start at 0.

3. We define our `conditional expression` and set the condition to `i < len(hobbies)` ( is `i` less than the length of hobbies ). We're using "less than" ( `<` ) instead of "less than or equal" ( `<=` ) because Go array indexes start at 0.

4. We define our `post statement` and increment the count of `i` as we did in our previous example.

5. We then print each element of `hobbies`.

```go
package main

import "log"

func main() {

	// Start of our code

	name := "Simon"
	age := 29
	profession := "Developer"
	favouriteAnimal := "Dog"

	hobbies := [4]string{"example1", "mountain biking", "example2", "example3"}

	log.Printf(
		"Welcome to my first Go programme. My name is %s. I am %d years old. I work as a %s. My favourite animal is a %s",
		name, age, profession, favouriteAnimal,
	)

	log.Printf("I have %d hobbies, and they are: ", len(hobbies))

	for i := 0; i < len(hobbies); i++ {
		log.Println(hobbies[i])
	}

	// End of our code

}
```



The following is an illustration of the link between our array index and values:

```
|    0     |         1       |     2    |     3    |
*----------*-----------------*----------*----------*
| example1 | mountain biking | example2 | example3 |
```



We appreciate this was a lot of information to take in, so feel free to reach out to us if anything doesn't make sense.


