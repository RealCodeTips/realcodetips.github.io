---
title: "Structs in Go (challenge answer)"
date: 2019-07-01T05:58:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/structs_in_go_challenge_answer.jpg"

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


Warning: **Challenge spoiler alert**

At the end of the “[Structs in Go](https://www.codetips.co.uk/languages/go/structs-in-go/)” article, we asked you to complete the following tasks:

1. Make a new field in our `person` struct, of type `bool`, that we’ll use to control whether someone is a friend or not.
2. Use the new field to control which statement is printed out.

If you haven't attempted it; we're about to give you the answer, so now's a good time to go and try it.

The first task is to add a new field in our `person` struct, that we can use to control whether someone is a friend or not. We’ll call this new field `isFriend`, to remain consistent.

```go
type person struct {
	name     string
	age      int
	isFriend bool
}

```

But we’ve now got a `too few values in composite literal` error, where we’re using the `person` struct (below).

```go
me := person{"Simon", 29}

friends := [5]person{
	{"David", 17},
	{"Bill", 42},
	{"Charlie", 12},
	{"Abby", 24},
	{"Edith", 74},
}

```

This error basically means we’re not passing enough values through; our `person` struct expects three properties (`name`, `age` and `isFriend` ) but we are only passing through two ( `name` and `age` )

Let’s fix this by specifying the `isFriend` property.

```go
me := person{"Simon", 29, false}

friends := [5]person{
	{"David", 17, true},
	{"Bill", 42, true},
	{"Charlie", 12, true},
	{"Abby", 24, true},
	{"Edith", 74, true},
}

```

That’s the first task done so lets now update our programme to use the new `isFriend` field to control which statement is printed out.

We’re already passing the variable, of type `person`, through to the `printAgeBracket` function, so we already have access to the `isFriend` property.

The only change we need to make, in the `printAgeBracket` function, is to use the new `isFriend` field (`p.isFriend`) instead of the `isFriend` parameter.

```go
func printAgeBracket(p person, isFriend bool) {
	if p.isFriend { // Change this line
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

```

And now your programme is using the new `isFriend` field! So, we’re done? Not just yet.

Our programme works fine, but we’ve left our `isFriend` parameter even though we’re not using it. It’s good practice to clean up unused code; it will help prevent bugs in the future and makes the code look cleaner.

To remove the `isFriend` parameter from the `printAgeBracket` function, we just remove it from within the function parenthesis:

```go
func printAgeBracket(p person) {
	if p.isFriend {
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

```

And then update anything that calls it, to avoid any errors:

```go
printAgeBracket(me)

for i := 0; i < len(friends); i++ {
	printAgeBracket(friends[i])
}

```

Remember you can always [reach out to us](https://www.codetips.co.uk/contact-us/) with any questions or feedback - we’d love to hear from you!

