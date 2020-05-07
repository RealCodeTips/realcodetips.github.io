---
title: "Create a binary to decimal converter"
# date: 2019-03-16T08:55:00Z
draft: true
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/binary_to_decimal_converter.jpg"

# meta description
description: "Learn how to create a binary to decimal converter"

# taxonomies
tags:
- intermediate
- tutorials
- binary
- javascript
- go

slug: "binary-to-decimal-converter"

# post type
layout: post
---

Have you ever seen Binary, those ones and zeros that computers somehow understand, and wondered what it all means? Well,
today we're going to demistify some of if by creating a small application that converts from binary to decimal. 

### What is decimal?

Decimal is the numbering system that most of us use everyday. We're taught it from a young age, so it may seem like the
only logical way of counting. Let's take a quick look at what it looks like to count in decimal:

```
1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ..... 1001
```

Decimal can also be referred to as Base 10. It includes the numbers 0-9 (ten possibilities) and each column in a number
is a power of ten. 

Let's look at an example by breaking down the number 5,743, which we know is Five Thousand, Seven Hundred, and Fourty Three. 

![Base ten representation](/assets/images/content/create-a-binary-to-decimal-converter-base-ten-representation.svg "Base ten representation")

So, what did I mean when I said each column in a number is a power of ten? If we look at the above image, starting from the right-most box, we can say:

- Ten to the power of Zero (10^0) is 1. We have Three in this column, so our calculation is 3x1 (3).
- Ten to the power of One (10^1) is 10. We have Four in this column, so our calculation is 4x10 (40).
- Ten to the power of Two (10^2) is 100. We have Seven in this column, so our calculation is 7x100 (700).
- Ten to the power of Three (10^3) is 1000. We have Five in this column, so our calculation is 5x1000 (5000).

![Base ten power representation](/assets/images/content/create-a-binary-to-decimal-converter-base-ten-power-representation.svg "Base ten power representation")

Adding all of the numbers (5000 + 700 + 40 + 3) gives us 5,743.

### What is binary?

The above explanation of decimal may seem basic and pointless, but it's going to help to explain what binary is in this
section.

Binary, like decimal, is just a numbering system. Unlike decimal, it is referred to as Base 2, only includes
the numbers 0 and 1 (two possibilities) and each column is a power of two. 

Let's look at an example by breaking down the binary number 10100101. Unlike the previous section it's not immediately clear
what this number is, so we're going to walk through the same steps to find out. 

We know each column in a binary number is a power of two so, starting from the right-most number, we can say:

- Two to the power of Zero (2^0) is 1. We have One in this column, so our calculation is 1x1 (1).
- Two to the power of One (2^1) is 2. We have Zero in this column, so our calculation is 0x2 (0).
- Two to the power of Two (2^2) is 4. We have One in this column, so our calculation is 1x4 (4).
- Two to the power of Three (2^3) is 8. We have Zero in this column, so our calculation is 0x8 (0).
- Two to the power of Four (2^4) is 16. We have Zero in this column, so our calculation is 0x16 (0).
- Two to the power of Five (2^5) is 32. We have One in this column, so our calculation is 1x32 (32).
- Two to the power of Six (2^6) is 64. We have Zero in this column, so our calculation is 0x64 (0).
- Two to the power of Seven (2^7) is 128. We have One in this column, so our calculation is 1x128 (128).

![Base two power representation](/assets/images/content/create-a-binary-to-decimal-converter-base-two-power-representation.svg "Base two power representation")


Adding all the numbers (128 + 0 + 32 + 0 + 0 + 4 + 0 + 1) gives us 165. So, as you can see, at it's most basic
level, binary is just a numbering system.

### What are we building?

In the last two sections we learnt that binary, like decimal, is just a numbering system. We also, unbeknowingly,
detailed how to convert from binary to decimal (notice how we calculated the decimal representation for each binary
digit, and then added them all up). 

We're now going to use this knowledge to write a programme that will perform this conversion for us.

The following sections will show you how to write such a programme in JavaScript and Go. 

Note: Neither of the following sections are "production ready" - the code is to illustrate how to perform the conversion
from binary to decimal in code, and we have omitted error handling and type checking for brevity. 

#### JavaScript Implementation

We know the best approach, to convert from binary to decimal, is to start with the right-most number/column. Let's start
by writing a simple `binaryToDecimal` function, which accepts a string (our binary number) and prints it out from the
right-most column to the left-most column.


```js
const binaryToDecimal = binary => {
	for (let i=binary.length-1; i>=0; i--) {
		console.log(binary[i])
	}
}
```

Because we're only printing out the numbers, our function just contains a simple [for loop](/what-are-loops) (see [Arrays and Loops
in JavaScript](/arrays-and-loops-in-javascript) for a JavaScript specific explanation) which starts at end of the input
(`binary.length-1`), continues while `i` is less than or equal to `0`, and decrements `i` by one for each loop.

```js
binaryToDecimal("1000101") // 1010001
binaryToDecimal("1110001") // 1000111
binaryToDecimal("1000100") // 0010001
```

We know that each column, in a binary number, is a power of two so let's change our function to print out the exponent
of each column. 

```js
const binaryToDecimal = binary => {
	let pow=0

	for (let i=binary.length-1; i>=0; i--) {
		let r=Math.pow(2, pow)
		
		console.log(r)

		pow++
	}
}
```

We initialise a new `pow` variable to zero because, like we did when calculating manually above, we start with two to
the power of zero (2^0). 

On each loop, we work out the result of two to the power of `pow` (2^pow), log the result and increment `pow` ready for the next loop. 

```js
binaryToDecimal("1000101")

/**
1
2
4
8
16
32
64
*/
```

We now have a function that accepts a string representation of a binary number, starts at the right-most column and
works out the decimal representation for each column. The last thing to do is to calculate each column, and add the
result together to get our decimal representation. 


```js
const binaryToDecimal = (binary) => {
	let result=0
	let pow=0

	for (let i=binary.length-1; i>=0; i--) {
    		let r=Math.pow(2, pow)

    		result += r * parseInt(binary[i],10)

    		pow++
	}

	console.log(result)
}
```

We've now added a `result` variable, which we increment based on the result of `r * parseInt(binary[i],10)` where `r` is
the result of our power calculation and `parseInt` will yield either zero or one. 

```js
binaryToDecimal("10100101") // 165
```

And that's all there is to a binary to decimal converter. Keep reading if you'd like to see the Go implementation, or
visit our handy [binary to decimal converter](/binary-to-decimal-converter-tool), which uses this logic, if you'd like to
test out some numbers. 

#### Go Implementation

Like we discussed above, in the JavaScript implementation, we know the best approach, to convert from binary to decimal, is to start with the right-most number/column. 

We'll follow a similar pattern by first creating a simple `binaryToDecimal` function, which accepts a string (our binary
number) and prints it out from the right-most column to the left-most column.

```go
package main

import (
	"fmt"
)

func main() {
	binaryToDecimal("1000101") // 1010001
	binaryToDecimal("1110001") // 1000111
	binaryToDecimal("1000100") // 0010001
}

func binaryToDecimal(binary string) {
	for i := len(binary) - 1; i >= 0; i-- {
		fmt.Println(string(binary[i]))
	}
}
```

Because we're only printing out the numbers, our function just contains a simple [for loop](/what-are-loops) (see [Arrays and Loops
in Go](/arrays-and-loops-in-go) for a Go specific explanation) which starts at end of the input (`len(length)-1`), continues while `i` is less than or equal to `0`, and decrements `i` by one for each loop.

Note how we are converting the value (`binary[i]`) to a string. We have to do this because looping over a string in Go
returns the byte representation of each character (48 for 0, 49 for 1). 

Because we are using characters that fit into one byte (0 and 1) this is safe. However, be cautious about using this technique when you cannot guarantee each character
will fit into one byte as you may get skewed results.

We know that each column, in a binary number, is a power of two so let's change our function to print out the exponent
of each column. 

```go
package main

import (
	"fmt"
	"math"
)

func main() {
	binaryToDecimal("1000101")
	/**
	1
	2
	4
	8
	16
	32
	64
	*/
}

func binaryToDecimal(binary string) {
	var pow float64 = 0

	for i := len(binary) - 1; i >= 0; i-- {
		r := math.Pow(2, pow)

		fmt.Println(r)

		pow++
	}
}
```

We initialise a new `pow` variable to zero because, like we did when calculating manually, we start with two to the power of zero (2^0). 

On each loop, we work out the result of two to the power of `pow` (2^pow), log the result and increment `pow` ready for the next loop. 

We now have a function that accepts a string representation of a binary number, starts at the right-most column and
works out the decimal representation for each column. The last thing to do is to calculate each column, and add the
result together to get our decimal representation. 

```go
package main

import (
	"fmt"
	"math"
	"strconv"
)

func main() {
	fmt.Println(binaryToDecimal("1000101"))  // 69
	fmt.Println(binaryToDecimal("10100101")) // 165
}

func binaryToDecimal(binary string) int64 {
	var result int64 = 0
	var pow float64 = 0

	for i := len(binary) - 1; i >= 0; i-- {
		r := math.Pow(2, pow)

		i, _ := strconv.ParseInt(string(binary[i]), 10, 64)
		result += int64(r) * i

		pow++
	}

	return result
}
```

We've now added a `result` variable, which we increment based on the result of `r * i` where `r` is the result of our power calculation and `i` is the result of converting our character (0 or 1) to an int. 

And that's how to create a binary to decimal converter in Go. Feel free to visit our handy [binary to decimal converter](/binary-to-decimal-converter-tool), which uses the JavaScript logic, if you'd like to test out some numbers. 
