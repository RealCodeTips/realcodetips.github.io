---
title: "Functions in Go"
date: 2019-06-21T07:18:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/functions_in_go.jpg"

# meta description
description: "Functions allow us to reduce duplication and increase maintainability. Learn how to write functions in Go, step by step!"

# taxonomies
# category: "beginner"
tags:
- beginner
- go

slug: "functions-in-go"

# post type
layout: post
---

At the end of the [Conditionals in Go](https://www.codetips.co.uk/languages/go/conditionals-in-go/) article, we ended with a programme that prints your `name`, `age`, `hobbies` and a statement based on the `age`.

```go
package main

import "log"

func main() {
	
  // Start of our code

	name := "Simon"
	age := 29
	hobbies := [4]string{"example1", "mountain biking", "example2", "example3"}

	log.Printf("Hello World. My name is %s.", name)

	if age < 13 {
		log.Println("I am considered a child")
	} else if age < 20 {
		log.Println("I am considered a teenager")
	} else if age < 70 {
		log.Println("I am considered an adult")
	} else {
		log.Println("I am considered a pensioner")
	}

	log.Printf("I have %d hobbies, and they are: ", len(hobbies))

	for i := 0; i < len(hobbies); i++ {
		log.Println(hobbies[i])
	}

	// End of our code
  
}

```

We're now going to add some "friends" and, for each of them, print the aged based statement depending on their ages.

We've already got the logic we need from the [Conditionals in Go](https://www.codetips.co.uk/languages/go/conditionals-in-go/) snippet above, so all we need to do is duplicate this for our friends.

```go
package main

import "log"

func main() {

	// Start of our code

	myName := "Simon"
	myAge := 29

	friendOneName := "David"
	friendOneAge := 17

	friendTwoName := "Bill"
	friendTwoAge := 42
	
	log.Printf("Hello World. My name is %s.", myName)

	if myAge < 13 {
		log.Println("I am considered a child")
	} else if myAge < 20 {
		log.Println("I am considered a teenager")
	} else if myAge < 70 {
		log.Println("I am considered an adult")
	} else {
		log.Println("I am considered a pensioner")
	}

	log.Println("I have two friends, and they are as follows:")

	log.Printf("%s: ", friendOneName)

	if friendOneAge < 13 {
		log.Println("I am considered a child")
	} else if friendOneAge < 20 {
		log.Println("I am considered a teenager")
	} else if friendOneAge < 70 {
		log.Println("I am considered an adult")
	} else {
		log.Println("I am considered a pensioner")
	}

	log.Printf("%s: ", friendTwoName)

	if friendTwoAge < 13 {
		log.Println("I am considered a child")
	} else if friendTwoAge < 20 {
		log.Println("I am considered a teenager")
	} else if friendTwoAge < 70 {
		log.Println("I am considered an adult")
	} else {
		log.Println("I am considered a pensioner")
	}

	// End of our code

}

```

Let's break down the changes we've made:

* We changed our `name` and `age` variables to `myName` and `myAge`, so there is a clear distinction between our information and our friends’ information.
* We added two friends (`friendOne` and `friendTwo`) and added their names/ages in separate variables.
* We added a new print statement to record how many friends we have.
* We log each friends name and run an `if/else if/else` statement to print out the appropriate aged based statement.

This might look OK, but duplicating code should be avoided wherever possible.

In the above code, we have three `if/else if/else` statements with the only difference being the variable being checked (`myAge`, `friendOneAge` or `friendTwoAge`).

What if we added one hundred friends, using this method, and then decided we wanted to add another age bracket in-between adult and pensioner?

We'd have to go through all of the `if/else if/else` statements, one by one, to add the new logic.

Thankfully we can use [functions](https://www.codetips.co.uk/beginner/what-is-a-function/) to cut down on all of this duplication.

The syntax for declaring a [function](https://www.codetips.co.uk/beginner/what-is-a-function/) in Go is simple. In fact, we’ve already done it for our programme - the `main` function:

```go
func main() {

}

```

Now let’s see a slightly more complex example; a function that takes two inputs, multiplies them, and prints the result.

```go
func multiply(num1 int, num2 int) {
	log.Println(num1 * num2)
}

```

Let’s break this down, one step at a time:

* We define a new function, using the `func` keyword, and name it `multiply`.
* We specify two parameters (`num1` and `num2`) and give them both a type of `int`.
* We declare our function body, which prints the result of `num1` multiplied (`*`) by `num2`.

Now we can use it as many times as possible!

```go
package main

import "log"

func multiply(num1 int, num2 int) {
	log.Println(num1 * num2)
}

func main() {

	multiply(5, 12)  // => 60
	multiply(51, 9)  // => 459
	multiply(12, 32) // => 384
	multiply(13, 42) // => 546
	multiply(31, 1)  // => 31
	multiply(21, 3)  // => 63
	multiply(30, 4)  // => 120
	multiply(19, 5)  // => 95
	multiply(9, 7)   // => 63

}

```

But sometimes we don’t just want to print to the screen. What if we want to use the result of `multiply` and divide it by 10?

For this we can use the `return` keyword, which does what it says; it returns the result.

```go
func multiply(num1 int, num2 int) int {
	return num1 * num2
}

```

We’ve now changed our function to return the result, instead of printing it to the screen.

You may have noticed we’ve also added an extra `int` in between the parameter declaration and function body. In the Go syntax, this is the return type and is required when returning a value from a function.

We specified it as `int` because two `int`’s multiplied (`num1 * num2`) yields an `int`.

Now we’re returning the result. If we want to use it, we need to assign it to a variable:

```go
package main

import "log"

func multiply(num1 int, num2 int) int {
	return num1 * num2
}

func main() {

	res1 := multiply(5, 12)
	log.Println(res1) // => 60
	res2 := multiply(51, 9)
	log.Println(res2) // => 459
	res3 := multiply(12, 32)
	log.Println(res3) // => 384
	res4 := multiply(13, 42)
	log.Println(res4) // => 546
	res5 := multiply(31, 1)
	log.Println(res5) // => 31
	res6 := multiply(21, 3)
	log.Println(res6) // => 63
	res7 := multiply(30, 4)
	log.Println(res7) // => 120
	res8 := multiply(19, 5)
	log.Println(res8) // => 95
	res9 := multiply(9, 7)
	log.Println(res9) // => 63

}

```

At the moment we’re only printing the result, but we can use the result in many different ways:

```go
package main

import "log"

func multiply(num1 int, num2 int) int {
	return num1 * num2
}

func main() {

	res1 := multiply(5, 12)
	log.Println(res1 * 10) // => 600
	res2 := multiply(51, 9)
	log.Println(res2 * res1) // => 27540
	res3 := multiply(12, 32)
	log.Println(res3 / 40) // => 9
	res4 := multiply(13, 42)
	log.Println(res4 / 10) // => 54
	res5 := multiply(31, 1)
	log.Println(res5 * 4) // => 124
	res6 := multiply(21, 3)
	log.Println(((res6 * 3) / 3) * 5) // => 315
	res7 := multiply(30, 4)
	log.Println(res7 / 2) // => 60
	res8 := multiply(19, 5)
	log.Println(res8 * 4) // => 380
	res9 := multiply(9, 7)
	log.Println(res9 / 9) // => 7

}

```

Now let’s use this new found wisdom to cut down on the duplication in our programme. Let’s go back and have a look at the code printing our friends:

```go
log.Printf("%s: ", friendOneName)

if friendOneAge < 13 {
	log.Println("I am considered a child")
} else if friendOneAge < 20 {
	log.Println("I am considered a teenager")
} else if friendOneAge < 70 {
	log.Println("I am considered an adult")
} else {
	log.Println("I am considered a pensioner")
}

log.Printf("%s: ", friendTwoName)

if friendTwoAge < 13 {
	log.Println("I am considered a child")
} else if friendTwoAge < 20 {
	log.Println("I am considered a teenager")
} else if friendTwoAge < 70 {
	log.Println("I am considered an adult")
} else {
	log.Println("I am considered a pensioner")
}

```

The code is exactly the same, other than the variable names (`friendOneName` , `friendOneAge`, `friendTwoName` and `friendTwoAge`). Let’s convert this into a function called `printAgeBracket`:

```go
func printAgeBracket(name string, age int) {
	log.Printf("%s: ", name)

	if age < 13 {
		log.Println("I am considered a child")
	} else if age < 20 {
		log.Println("I am considered a teenager")
	} else if age < 70 {
		log.Println("I am considered an adult")
	} else {
		log.Println("I am considered a pensioner")
	}
}

```

And now let’s use it in our code:

```go
package main

import "log"

func printAgeBracket(name string, age int) {
	log.Printf("%s: ", name)

	if age < 13 {
		log.Println("I am considered a child")
	} else if age < 20 {
		log.Println("I am considered a teenager")
	} else if age < 70 {
		log.Println("I am considered an adult")
	} else {
		log.Println("I am considered a pensioner")
	}
}

func main() {

	// Start of our code

	myName := "Simon"
	myAge := 29

	friendOneName := "David"
	friendOneAge := 17

	friendTwoName := "Bill"
	friendTwoAge := 42

	log.Printf("Hello World. My name is %s.", myName)

	if myAge < 13 {
		log.Println("I am considered a child")
	} else if myAge < 20 {
		log.Println("I am considered a teenager")
	} else if myAge < 70 {
		log.Println("I am considered an adult")
	} else {
		log.Println("I am considered a pensioner")
	}

	log.Println("I have two friends, and they are as follows:")

	printAgeBracket(friendOneName, friendOneAge)
	printAgeBracket(friendTwoName, friendTwoAge)

	// End of our code

}

```

Instead of all of that duplicated code, we’re calling our `printAgeBracket` function with the different variable names.

We can even add another three friends, without too much hassle:

```go
package main

import "log"

func printAgeBracket(name string, age int) {
	log.Printf("%s: ", name)

	if age < 13 {
		log.Println("I am considered a child")
	} else if age < 20 {
		log.Println("I am considered a teenager")
	} else if age < 70 {
		log.Println("I am considered an adult")
	} else {
		log.Println("I am considered a pensioner")
	}
}

func main() {

	// Start of our code

	myName := "Simon"
	myAge := 29

	friendOneName := "David"
	friendOneAge := 17

	friendTwoName := "Bill"
	friendTwoAge := 42

	friendThreeName := "Charlie"
	friendThreeAge := 12

	friendFourName := "Abby"
	friendFourAge := 24

	friendFiveName := "Edith"
	friendFiveAge := 74

	log.Printf("Hello World. My name is %s.", myName)

	if myAge < 13 {
		log.Println("I am considered a child")
	} else if myAge < 20 {
		log.Println("I am considered a teenager")
	} else if myAge < 70 {
		log.Println("I am considered an adult")
	} else {
		log.Println("I am considered a pensioner")
	}

	log.Println("I have five friends, and they are as follows:")

	printAgeBracket(friendOneName, friendOneAge)
	printAgeBracket(friendTwoName, friendTwoAge)
	printAgeBracket(friendThreeName, friendThreeAge)
	printAgeBracket(friendFourName, friendFourAge)
	printAgeBracket(friendFiveName, friendFiveAge)

	// End of our code

}

```

And now if we wanted to add another age bracket, all we have to do is amend our `printAgeBracket` function; that’s one place instead of however many friends we decided to add to our programme.

**Note:** Specifying our friends in this way (separate variables for `age` and `name`), is also not ideal. We’ll improve on this in a future article.

## Challenge

You’ve probably already realised that we didn’t convert the code related to our name (`myName`) and age (`myAge`) to use the `printAgeBracket` function.

That’s because we print something different with our name compared to our friends; “Hello World. My name is” instead of just the name.

See if you can update the `printAgeBracket` function to accept a `Boolean` parameter and conditionally print either statement depending on it.

If you need another hint, or want to show us your solution, [reach out to us](https://www.codetips.co.uk/contact-us/) and we’ll do what we can to help.

