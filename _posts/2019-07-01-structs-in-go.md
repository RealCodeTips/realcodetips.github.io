---
title: "Structs in Go"
date: 2019-07-01T05:58:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/structs_in_go.jpg"

# meta description
description: "Structs are typed collections of fields. We learn how to use them to reduce duplication and increase maintainability in a real programme."

# taxonomies
# category: "beginner"
tags:
- beginner
- go

slug: "structs-in-go"

# post type
layout: post
---


At the end of the [Functions in Go](https://www.codetips.co.uk/languages/go/functions-in-go/) article, we removed a good amount of duplicate code, but we still had some duplication to print out the `myName` and `myAge` variables.

We fixed this duplication in the [Functions in Go (challenge answer)](https://www.codetips.co.uk/languages/go/conditionals-in-go-challenge-answer/) article, but our code was still a bit messy for two reasons:

1. We have to create two new variables for each friend.
2. Printing how many friends we have is a manual process, instead of letting our programme work it out for us.

We’re going to fix both of these problems in this article, with the help of structs!

### What are structs?!

> Go’s structs are typed collections of fields. They’re useful for grouping data together to form records. — gobyexample

Let’s jump straight into an example to better understand what this means.

At the end of the [Functions in Go (challenge answer)](https://www.codetips.co.uk/languages/go/conditionals-in-go-challenge-answer/) article, we declared our friends, and ourselves, like this:

```go
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

```

Everyone has a name and an age, so let’s group that data together in a struct. The [syntax](https://www.codetips.co.uk/beginner/what-is-syntax/) for declaring a struct is simple:

```go
type person struct {
	name string
	age  int
}

```

Let’s run through what this example does:

* We create a new struct and name it `person`.
* We define two fields for our `person` struct:– `name` which is of type `string`– `age` which is of type `int`

Notice that we’ve used the keyword `type` in our struct definition. Go is a [strongly-typed](https://www.codetips.co.uk/intermediate/translation-and-types/) language, and our new struct is no exception to this rule so `person` is effectively a new [type](https://www.codetips.co.uk/beginner/what-is-a-data-type/).

```go
// built-in type
var age int
// our new person type
var me person

```

In the above example, we’re creating an `age` variable, of [type](https://www.codetips.co.uk/beginner/what-is-a-data-type/)  `int`, like we’ve done many times before, but we’re also creating variable `me`, of type `person`.

Like normal types, there are numerous ways to initialise structs. We’re only going to focus on two:

* Method 1 sets the field values in the order they are defined in the struct (`name` first, `age` second).
* Method 2 sets the field values by using their identifiers (`name` or `age`) and can be defined in any order.

```go
// Method 1
me := person{"Simon", 28}

// Method 2
me := person{age: 28, name: "Simon"}

```

For the purposes of this article, we’re going to use the first method. If you’d like to use the second method, feel free! Everything should still work the same.

Now, see if you can convert the following code to use our new `person` struct, instead of using two separate variables ([reach out to us if you get stuck](https://www.codetips.co.uk/contact-us/)).

```go
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

```

Done? You should have ended up with something similar to the following:

```go
me := person{"Simon", 29}

friendOne := person{"David", 17}
friendTwo := person{"Bill", 42}
friendThree := person{"Charlie", 12}
friendFour := person{"Abby", 24}
friendFive := person{"Edith", 74}

```

You’ve probably now got a load of errors showing because you’ve got a load of “undefined” variables. This is because we’re using the old variable names (`friendOneName`, `friendOneAge` etc) which no longer exist.

This is the code that is now wrong. But how can we fix it? We no longer have separate variables for `name` and `age`…

```go
printAgeBracket(myName, myAge, false)

log.Println("I have five friends, and they are as follows:")

printAgeBracket(friendOneName, friendOneAge, true)
printAgeBracket(friendTwoName, friendTwoAge, true)
printAgeBracket(friendThreeName, friendThreeAge, true)
printAgeBracket(friendFourName, friendFourAge, true)
printAgeBracket(friendFiveName, friendFiveAge, true)

```

With structs, you can access their “properties” using dot notation. That sounds more complicated than it is, let’s see it in action:

```go
package main

import "log"

type person struct {
	name string
	age  int
}

func main() {

	// Start of our code

	me := person{"Simon", 29}

	log.Printf("Hello, my name is %s and I am %d years old", me.name, me.age)

	// End of our code

}

```

It’s called dot notation because of the dot (`.`) between the variable name and the property you want to access (e.g. `me.name`), and it simply means “get me the `name` property from variable `me`”.

Can you guess what would be printed?

```go
2019/06/27 17:34:11 Hello, my name is Simon and I am 29 years old

```

Now, see if you can fix the following code. **Hint:**  you only need to amend these lines of code, nothing else. Remember, you can [reach out to us if you get stuck](https://www.codetips.co.uk/contact-us/).

```go
printAgeBracket(myName, myAge, false)

log.Println("I have five friends, and they are as follows:")

printAgeBracket(friendOneName, friendOneAge, true)
printAgeBracket(friendTwoName, friendTwoAge, true)
printAgeBracket(friendThreeName, friendThreeAge, true)
printAgeBracket(friendFourName, friendFourAge, true)
printAgeBracket(friendFiveName, friendFiveAge, true)

```

You should have ended up with the following:

```go
printAgeBracket(me.name, me.age, false)

log.Println("I have five friends, and they are as follows:")

printAgeBracket(friendOne.name, friendOne.age, true)
printAgeBracket(friendTwo.name, friendTwo.age, true)
printAgeBracket(friendThree.name, friendThree.age, true)
printAgeBracket(friendFour.name, friendFour.age, true)
printAgeBracket(friendFive.name, friendFive.age, true)

```

But wait! Didn’t we say that `person` was a [type](https://www.codetips.co.uk/beginner/what-is-a-data-type/)? Yes! This means we can change our function to accept a parameter of type `person`, instead of `name` and `age` separately:

```go
func printAgeBracket(p person, isFriend bool) {
	if isFriend {
		log.Printf("%s: ", name)
	} else {
		log.Printf("Hello World. My name is %s.", name)
	}

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

But now we have more errors! Let’s see what has gone wrong:

1. `printAgeBracket` is referring to undefined variables `name` and `age`, because we’re no longer passing them through as parameters.
2. We’re now passing too many arguments, and arguments of the wrong type, when we call our `printAgeBracket` function.

See if you can fix these errors before we move on. [Reach out to us if you get stuck](https://www.codetips.co.uk/contact-us/).

Fixed? Let’s look at what we did.

* To fix the `printAge` function, we changed all of the references to `name` and `age` to use our new parameter `p`, of type `person`, using dot notation (i.e. `p.name` & `p.age`)
* To fix the issue of passing too many arguments, and the arguments of the wrong type, we updated our function calls to use the `person` object, instead of the individual fields (`person.name` and `person.age`).

Our programme now looks like this:

```go
package main

import "log"

type person struct {
	name string
	age  int
}

func printAgeBracket(p person, isFriend bool) {
	if isFriend {
		log.Printf("%s: ", p.name)
	} else {
		log.Printf("Hello World. My name is %s.", p.name)
	}

	if p.age < 13 {
		log.Println("I am considered a child")
	} else if p.age < 20 {
		log.Println("I am considered a teenager")
	} else if p.age < 70 {
		log.Println("I am considered an adult")
	} else {
		log.Println("I am considered a pensioner")
	}
}

func main() {

	// Start of our code

	me := person{"Simon", 29}

	friendOne := person{"David", 17}
	friendTwo := person{"Bill", 42}
	friendThree := person{"Charlie", 12}
	friendFour := person{"Abby", 24}
	friendFive := person{"Edith", 74}

	printAgeBracket(me, false)

	log.Println("I have five friends, and they are as follows:")

	printAgeBracket(friendOne, true)
	printAgeBracket(friendTwo, true)
	printAgeBracket(friendThree, true)
	printAgeBracket(friendFour, true)
	printAgeBracket(friendFive, true)

	// End of our code

}

```

So, we’re done? No, let’s remind ourselves of the two problems we said we’d fix in this article:

1. We have to create two new variables for each friend.
2. Printing how many friends we have was a manual process, instead of letting our programme work it out for us.

We’ve fixed the first issue, but we’re still having to print the number of friends we have manually.

But how can we count the number of friends we have, programmatically? Well, the answer may surprise you. We’re going to use an [array](https://www.codetips.co.uk/beginner/what-are-arrays/).

We’ve already seen how arrays can improve maintainability, compared to separate variables, in the [Arrays and Loops in Go](https://www.codetips.co.uk/languages/go/arrays-and-loops-in-go/) article, and we’ve already said that `person` is a type, so we can create an array of type `person`.

Let’s remind ourselves how to create a simple array of `int`’s:

```go
arr := [3]int{1,2,3}

```

So creating an array of type `person` is as simple as:

```go
arr := [0]person{}

```

Or to create an array of `person`, with 5 values initialised:

```go
friends := [5]person{
	{"David", 17},
	{"Bill", 42},
	{"Charlie", 12},
	{"Abby", 24},
	{"Edith", 74},
}

```

Let’s now update our code to use this method, instead of creating a separate variable for each friend:

```go
func main() {

	// Start of our code

	me := person{"Simon", 29}

	friends := [5]person{
		{"David", 17},
		{"Bill", 42},
		{"Charlie", 12},
		{"Abby", 24},
		{"Edith", 74},
	}

	printAgeBracket(me, false)

	log.Println("I have five friends, and they are as follows:")

	printAgeBracket(friendOne, true)
	printAgeBracket(friendTwo, true)
	printAgeBracket(friendThree, true)
	printAgeBracket(friendFour, true)
	printAgeBracket(friendFive, true)

	// End of our code

}

```

We’ve now got more undefined errors because our individual friend variables (`friendOne`, `friendTwo` etc) no longer exist.

So now what do we do?! Well, as we know from the [Arrays and Loops in Go](https://www.codetips.co.uk/languages/go/arrays-and-loops-in-go/) article, we can loop over the elements in an array.

So, let’s use the same method to loop through our `friends` array and call our `printAgeBracket` function:

```go
func main() {

	// Start of our code

	me := person{"Simon", 29}

	friends := [5]person{
		{"David", 17},
		{"Bill", 42},
		{"Charlie", 12},
		{"Abby", 24},
		{"Edith", 74},
	}

	printAgeBracket(me, false)

	log.Println("I have five friends, and they are as follows:")

	for i := 0; i < len(friends); i++ {
		printAgeBracket(friends[i], true)
	}

	// End of our code

}

```

Now that looks much cleaner! We can also add more friends to our programme, by adding new elements to our `friends` array. Go ahead, try it!

This is great, but we are still hard-coding our friend count. Let’s fix that now.

We’re already using the `len` method, which we know gives us the length of an array, so it’s as easy as changing our `Println` statement to a `Printf` statement and using the array length:

```go
log.Printf("I have %d friends, and they are as follows:", len(friends))

```

Yes - it really is as easy as that! Take some time to play with the code, and make sure you understand what we’ve done.

For reference, our programme now looks like this:

```go
package main

import "log"

type person struct {
	name string
	age  int
}

func printAgeBracket(p person, isFriend bool) {
	if isFriend {
		log.Printf("%s: ", p.name)
	} else {
		log.Printf("Hello World. My name is %s.", p.name)
	}

	if p.age < 13 {
		log.Println("I am considered a child")
	} else if p.age < 20 {
		log.Println("I am considered a teenager")
	} else if p.age < 70 {
		log.Println("I am considered an adult")
	} else {
		log.Println("I am considered a pensioner")
	}
}

func main() {

	// Start of our code

	me := person{"Simon", 29}

	friends := [5]person{
		{"David", 17},
		{"Bill", 42},
		{"Charlie", 12},
		{"Abby", 24},
		{"Edith", 74},
	}

	printAgeBracket(me, false)

	log.Printf("I have %d friends, and they are as follows:", len(friends))

	for i := 0; i < len(friends); i++ {
		printAgeBracket(friends[i], true)
	}

	// End of our code

}

```

## Challenge

We’ve come a long way, and our programme looks a lot cleaner, but there’s still more we can do to clean it up.

For example, we are still making separate variables for the `me` variable and our friends. It would be really good if we didn’t have to do this.

1. Make a new field in our `person` struct, of type `bool`, that we’ll use to control whether someone is a friend or not.
2. Use the new field to control which statement is printed out, instead of the `isFriend` parameter.

If anything in this article doesn’t make sense, you need a hint to the challenge, or you just want to show us your solution [reach out to us](https://www.codetips.co.uk/contact-us/) - we’d love to hear from you!

