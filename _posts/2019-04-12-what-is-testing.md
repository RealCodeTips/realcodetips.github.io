---
title: "What is testing?"
date: 2019-04-12T08:15:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/what_is_testing.jpg"

# meta description
description: It doesn't matter if you've been coding for five minutes, or five decades, you'll never write software that is perfect. Testing helps catch bugs!"

# taxonomies
# category: "beginner"
tags:
- beginner

slug: "what-is-testing"

# post type
layout: post
---



> It doesn't matter if you've been coding for five minutes, or five decades, you'll never write software that is perfect.

That doesn't mean you won't write good software, but it will have bugs (defects) and it's important you accept that early on.

Computers will do what we tell them to but they're not smart enough (yet) to do what we mean.

At some point, you'll make a (hopefully) small oversight, or a wrong assumption and you'll create a bug. It may never materialise; some bugs only happen under weird circumstances, so you may get lucky, but one day you may start getting some weird results and you'll have to find out why.

A simple example of this is a [function](https://codetips.co.uk/beginner/what-is-a-function/) that accepts two numbers and divides them.

```js
function divide(num1, num2) {
  num1 / num2
}
```



Seems pretty straight forward. Nothing could go wrong with these three lines of code, right? Wrong.

What if `num2` was zero? In [mathematics](https://www.mathsisfun.com/numbers/dividing-by-zero.html) - dividing by zero doesn't make sense. Try it - open up a calculator and try and divide any number by zero.

In programming - dividing by zero can have unintended consequences. It could cause unexpected or false results, or, in some cases/languages, it could even crash your application.

Now imagine your application has thousands of lines of codes, not just three, and you should start to understand how bugs can get introduced; regardless of how careful you are.

This is why developers test. We come up with "test cases" (like running our `multiply` function with a zero) and we observe how it reacts. If it doesn't react how we were expecting, we fix the code.

In six months time, when we've forgotten that you shouldn't divide by zero, and we decide to change the `multiply` function, we run our "test cases" again and we'll see that it produced an unexpected result and we've avoided breaking our application.

Test cases are usually written as code too, so they can be automated. We'll go through this process in much more detail in a later article - this was just an introduction to what testing is, and why it's so important.

Testing does not alleviate the chance for bugs, it only serves as an aid to increase our confidence in the code we've written. You should always be looking for opportunities to improve your tests or your code, and you should **always** remember, regardless of how many tests you have, or however long you've been a developer for:

> It doesn't matter if you've been coding for five minutes, or five decades, you'll never write software that is perfect.


