---
title: "Table Driven Tests"
date: 2019-12-03T15:48:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/table_driven_tests.jpg"

# meta description
description: "Learn how to use table-driven tests in Go, and how they can reduce duplication and make your tests more readable. "

# taxonomies
# category: "beginner"
tags:
- beginner
- go

slug: "table-driven-tests"

# post type
layout: post
---


In this article we’re going to discuss the table-driven test strategy in Go, although this could easily be applied to other languages. Before reading, you should have an understanding of what [Testing](https://www.codetips.co.uk/beginner/what-is-testing/) is.

Let’s start by creating a function that takes a string, and returns the reverse of it.

```go
// ReverseString takes an input string and returns it reversed
func ReverseString(input string) string {
	runes := []rune(input)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}

	return string(runes)
}

```

As is common practice when we want to ensure a function does what we expect it to do, we'll add some tests.

If we weren't going to use the table-driven test approach, we might write our tests like the below (using subtests to break each test up into its own section):

```go
func TestReverseString(t *testing.T) {
	t.Run("abiglongsentence should return ecnetnesgnolgiba", func(t *testing.T) {
		input := "abiglongsentence"
		expected := "ecnetnesgnolgiba"

		output := ReverseString(input)

		if output != expected {
			t.Errorf("Expected %s to return %s, but got %s", input, expected, output)
		}
	})

	t.Run("word should return drow", func(t *testing.T) {
		input := "word"
		expected := "drow"

		output := ReverseString(input)

		if output != expected {
			t.Errorf("Expected %s to return %s, but got %s", input, expected, output)
		}

	})

	t.Run("山上的人 should return 人的上山", func(t *testing.T) {
		input := "山上的人"
		expected := "人的上山"

		output := ReverseString(input)

		if output != expected {
			t.Errorf("Expected %s to return %s, but got %s", input, expected, output)
		}

	})

	t.Run("The quick brown 狐 jumped over the lazy 犬 should return 犬 yzal eht revo depmuj 狐 nworb kciuq ehT", func(t *testing.T) {
		input := "The quick brown 狐 jumped over the lazy 犬"
		expected := "犬 yzal eht revo depmuj 狐 nworb kciuq ehT"

		output := ReverseString(input)

		if output != expected {
			t.Errorf("Expected %s to return %s, but got %s", input, expected, output)
		}
	})
}

```

This doesn’t look great; we’re duplicating a lot of code and it’s not exactly easy to see all of our test cases in one glance. If we extended this test to 100 different permutations, we’d have to scroll down the entire test looking for the different `input` strings.

Luckily, our `ReverseString` method is small and simple so our tests are also simple, even if we are duplicating a lot of code.

Adding additional tests is straightforward, but we’ll be adding at least eleven lines of code for each new test case. Let’s look at how we can utilise the table-driven test approach to reduce the duplication and make it more readable.

```go
func TestReverseString(t *testing.T) {
	testCases := []struct {
		input    string
		expected string
	}{
		{input: "abiglongsentence", expected: "ecnetnesgnolgiba"},
		{input: "word", expected: "drow"},
		{input: "山上的人", expected: "人的上山"},
		{input: "The quick brown 狐 jumped over the lazy 犬", expected: "犬 yzal eht revo depmuj 狐 nworb kciuq ehT"},
	}
	for _, tC := range testCases {
		t.Run(fmt.Sprintf("'%s' should return '%s'", tC.input, tC.expected), func(t *testing.T) {
			output := ReverseString(tC.input)

			if output != tC.expected {
				t.Errorf("Expected %s to return %s, but got %s", tC.input, tC.expected, output)
			}
		})
	}
}

```

First, we make a slice of structs, that specify the `input` into our `ReverseString` function, and the `expected` result. Then, we loop over the items in the slice and run the same test logic we had before, except this time we only need to define it once.

Adding a new test is as simple as creating a new item in our slice, and our `for range` loop will handle the rest.

