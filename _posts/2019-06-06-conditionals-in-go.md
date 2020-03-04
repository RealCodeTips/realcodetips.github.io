---
title: "Conditionals in Go"
date: 2019-06-06T07:07:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/conditionals_in_go.jpg"

# meta description
description: "Conditional statements can be used to make decisions on what action(s) to take in a programme. "

# taxonomies
# category: "beginner"
tags:
- beginner
- go

slug: "conditionals-in-go"

# post type
layout: post
---


In the last article ( "[Arrays and Loops in Go](https://www.codetips.co.uk/languages/go/arrays-and-loops-in-go/)" ), we created a programme that outputted our `name`, `age`, `profession`, `favouriteAnimal` and a list of our `hobbies`.

In this article we're going to extend our programme to act differently depending on the `age` variable. Before we get started, let's remove some code we won't be needing in this article:

```go
package main

import "log"

func main() {

	// Start of our code

	name := "Simon"
	// age := 29

	hobbies := [4]string{"example1", "mountain biking", "example2", "example3"}

	log.Printf("Hello World. My name is %s.", name)

	log.Printf("I have %d hobbies, and they are: ", len(hobbies))

	for i := 0; i < len(hobbies); i++ {
		log.Println(hobbies[i])
	}

	// End of our code

}

```



**Note:** We've commented out the `age` parameter. One of the rules of the Go compiler is you must not declare any unused variables. If we had declared it ( `age := 29` ) but not referenced it - it's considered unused and you will see an error when running the programme.

Running the application now, you should see the following output:

```bash
$ go run first.go 
2019/06/04 07:19:37 Hello World. My name is Simon.
2019/06/04 07:19:37 I have 4 hobbies, and they are: 
2019/06/04 07:19:37 example1
2019/06/04 07:19:37 mountain biking
2019/06/04 07:19:37 example2
2019/06/04 07:19:37 example3

```



We're now going to bring back the `age` variable and, depending on its value, we'll print one of the following:

* If the `age` is less than 10, we will print "I am x years young".
* If the `age` is more than 10, we will print "I am x years old".

To do this we're going to use an `if` statement. The syntax for declaring an `if` statement in Go is simple:

```go
if expression {
	// Run this code if expression evaluates to true
}

```

To perform an action dependant on `age`, we can simply add two `if` statements to our code ( **Note:** we have omitted all of the code not related to `age`, at this stage, to focus on what we're discussing )

```go
package main

import "log"

func main() {

	// Start of our code

	age := 29

	if age < 10 {
		log.Printf("I am %d years young", age)
	}

	if age > 10 {
		log.Printf("I am %d years old", age)
	}

	// End of our code

}

```



We are now performing two checks:

* Is age less than ( `<` ) 10? If it is, we print out the first message.
* Is age greater than ( `>` ) 10? If it is, we print out the second message.

Perfect! Actually, unfortunately not. There are two things wrong with this code snippet.

**Problem 1**

We're checking if `age` is less than ( `<` ) and greater than ( `>` ) 10, but what if `age` is 10? It doesn't call either `Print` statements.

```bash
$ go run conditionals.go

```



To fix this we first need to decide what statement we should print if the persons age is 10. I think 10 is still pretty young so let's print out the first statement. If you disagree, see if you can make it print out the second statement.

We then need to change our "less than" ( `<` ) condition, to be "less than or equal to" ( `<=` ).

```go
package main

import "log"

func main() {

	// Start of our code

	age := 10

	if age <= 10 {
		log.Printf("I am %d years young", age)
	}

	if age > 10 {
		log.Printf("I am %d years old", age)
	}

	// End of our code

}

```



Now if we run our programme with an `age` of 10, we get our message printed!

```bash
$ go run conditionals.go
2019/06/04 17:36:14 I am 10 years young

```



**Problem 2**

Regardless of what value is given to `age`, we're **always** checking two things:

* Is the value less than or equal to 10?
* Is the value greater than 10?

In this situation `age` can only match one of these expressions, so we're asking the computer to do extra work. This might not seem like a big deal now, but if we grew our application to have thousands or millions of unnecessary checks we'd see a big performance hit.

Instead of two `if` statements, we can use an `if/else` statement. The syntax for declaring an `if/else` statement is very simple:

```go
if expression {
	// Run this code if expression evaluates to true
} else {
    // Run this code if expression evaluates to false
}

```



The `age` variable is only ever going to be less than or equal to 10, or greater than 10, as we've previously stated. So we only need to check for one of those conditions, everything else fits in the `else` statement:

```go
package main

import "log"

func main() {

	// Start of our code

	age := 10

	if age <= 10 {
		log.Printf("I am %d years young", age)
	} else {
		log.Printf("I am %d years old", age)
	}

	// End of our code

}


```



Take some time to have a play with the code - we'll still be here when you're ready to continue.

Ready?

Excellent. Let's take this to the next level and make our programme more "age aware". This time we're going to check for four possible outcomes:

* If the `age` variable is less than 13, we will print "I am considered a child"
* If the `age` variable is between 13 and 19, we will print "I am considered a teenager"
* If the `age` variable is between 19 and 69, we will print 'I am considered an adult'.
* If the `age` variable is 70 or older, we will print "I am considered a pensioner".

We already know having four separate `if` statements isn't a good idea, but an `if/else` statement can only handle two outcomes so what are we to do now? We can use the `if/else if/else` statement!

The syntax for declaring an `if/else if/else` statement is  very simple:

```go
if expression {
	// Run this code if expression evaluates to true
} else if anotherExpression {
    // Run this code if anotherExpression evaluates to true
} else if yetAnotherExpression {
    // Run this code if yetAnotherExpression evaluates to true
} else {
    // Run this code if none of the above expressions have evaluated to true
}


```



The difference between `else` and `else if` is the latter allows us to specify another expression.

If the first expression hasn't evaluated to `true`, then the next expression is checked. This continues until an expression does evaluate to `true`, an `else` statement or the conditional statement ends.

If an expression does evaluate to true, it skips the rest of the `else if` and `else` statements.

We can easily use this logic in our programme, without needing to learn many new concepts:

```go
package main

import "log"

func main() {

	// Start of our code

	age := 70

	if age < 13 {
		log.Println("I am considered a child")
	} else if age >= 13 && age < 20 {
		log.Println("I am considered a teenager")
	} else if age >= 20 && age < 70 {
		log.Println("I am considered an adult")
	} else {
		log.Println("I am considered a pensioner")
	}

	// End of our code

}


```

Let's run through these expressions, one by one:

* `if age < 13` - we check if `age` is less than ( `<` ) 13. If it is, we print out the "child" statement and don't have to perform any more checks.
* `else if age >= 13 && age < 20` - we check if `age` is greater than or equal to ( `>=` ) 13 **and** ( `&&` ) `age` is less than 20. This gives us a range of 13 - 19. If the expression evaluates to `true` we print out the "teenager" statement and don't have to perform any more checks.
* `else if age >= 20 && age < 70` - we check if `age` is greater than or equal to ( `>=` ) 20 **and** ( `&&` ) age is less than 70. This gives us a range of 20 - 69. If the expression evaluates to `true` we print out the "adult" statement, and don't have to perform any more checks.
* `else` - if `age` is any other value (i.e. 70 or above) we print out the "pensioner" statement.

Now let's add back the code from the beginning of this article:

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
	} else if age >= 13 && age < 20 {
		log.Println("I am considered a teenager")
	} else if age >= 20 && age < 70 {
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



That's it - we've now added an `if/else if/else` statement to our Go programme! In a future article we'll look at how to achieve this with a different conditional statement called a `switch` statement.

Before you go, see if you can complete the following challenge:

* It is possible to optimise the last `if/else if/else` statement further, see if you can figure out how. **Hint:** we're still asking the computer to do more work than is necessary.

If you need another hint, or want to show us your solution, get in touch on Social Media ([Twitter](https://twitter.com/RealCodeTips), [Facebook](https://www.facebook.com/CodeTips-2884823445075145/), [LinkedIn](https://www.linkedin.com/company/codetips), [Instagram](https://www.instagram.com/realcodetips/)) 

