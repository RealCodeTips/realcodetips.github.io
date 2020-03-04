---
title: "Functions in Go (challenge answer)"
date: 2019-06-27T12:15:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/functions_in_go_challenge_answer.jpg"

# meta description
description: "Learn how to use a boolean function parameter to conditionally print one of two statements, and reduce duplication."

# taxonomies
# category: "beginner"
tags:
- beginner
- go

slug: "functions-in-go-challenge-answer"

# post type
layout: post
---

Warning: **Challenge spoiler alert**

At the end of the last article ( [“Functions in Go”](/functions-in-go/) ) we asked you to update the `printAgeBracket` function to accept a `Boolean` parameter, so we could conditionally print a statement and reduce duplication.

If you haven't attempted it; we're about to give you the answer, so now's a good time to go and try it.

For reference, here was the `printAgeBracket` statement we asked you to amend:

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

And this was the code we wanted to incorporate into this function:

```go
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

```

The only thing stopping us from using the `printAgeBracket` function is we print out a different statement; `Hello world. My name is: %s` vs `$s:` .

One possible solution to this problem is to add a new parameter to `printAgeBracket`, called `isFriend`, and add an `if/else` statement to our function:

```go
func printAgeBracket(name string, age int, isFriend bool) {
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

We then need to amend the lines that use this function to use this new parameter:

```go
printAgeBracket(friendOneName, friendOneAge, true)
printAgeBracket(friendTwoName, friendTwoAge, true)
printAgeBracket(friendThreeName, friendThreeAge, true)
printAgeBracket(friendFourName, friendFourAge, true)
printAgeBracket(friendFiveName, friendFiveAge, true)

```

If our new `isFriend` parameter is `true`, we print out the first statement, `else` we print out the second statement.

If you didn’t get this far on your own, take five minutes and see if you can amend the following code to use the `printAgeBracket` function:

```go
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
```

Done? Excellent!

You should have ended up with the following:

```go
printAgeBracket(myName, myAge, false)

```

The `isFriend` parameter is `false` so it prints out the statement in the `else` statement, and we’ve just removed more duplication from our code.

Our whole programme now looks like this:

```go
package main

import "log"

func printAgeBracket(name string, age int, isFriend bool) {
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

	printAgeBracket(myName, myAge, false)

	log.Println("I have five friends, and they are as follows:")

	printAgeBracket(friendOneName, friendOneAge, true)
	printAgeBracket(friendTwoName, friendTwoAge, true)
	printAgeBracket(friendThreeName, friendThreeAge, true)
	printAgeBracket(friendFourName, friendFourAge, true)
	printAgeBracket(friendFiveName, friendFiveAge, true)

	// End of our code

}

```

Our new function has reduced a lot of duplication in our code, and it makes maintaining our programme easy (e.g. adding a new age bracket), but there’s still a couple of things that we should improve:

1. Every time we create a new friend, we have to create two new variables. We’ve currently got fifteen lines of code just to create five friends.
2. When we print how many friends we have ( “I have five friends, and they are as follows" ), we have to add the number (five) manually. We have a real risk that we could add/remove a friend(s) and forget to update this.

Both of these things have reduced our maintainability. Stay tuned for future articles, where we’ll fix these problems.

If you need any help understanding what we’ve discussed in this article, [reach out to us](https://www.codetips.co.uk/contact-us/) and we’ll do what we can to help.

