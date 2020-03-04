---
title: "What are commnets?"
date: 2019-04-16T17:24:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/what_are_comments.jpg"

# meta description
description: "Comments are just notes for developers"

# taxonomies
# category: "beginner"
tags:
- beginner

slug: "what-are-comments"

# post type
layout: post
---


> Comments are just notes for developers

It really is that simple. Developers write comments to help themselves or others understand what the code does in the future.

Each language specifies the [syntax](https://codetips.co.uk/beginner/what-is-syntax/) for comments, like everything else. When your application encounters a comment it will ignore it and find the next line of code that it can execute. So you can write whatever you want in a comment without it affecting your application.

For example, take the following [variable](https://codetips.co.uk/beginner/what-is-a-variable/) that declares a Regular Expression (Regex). If you don't know what Regex is - it's not important, just keep reading.

```js
var regex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi
```



Whether you know Regex or not, it's very difficult to know what this does. A comment could make this easier.

```js
// Defines the regex for a valid email address
var regex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi
```



Now you know exactly what the code does, straight away.

---

**Note:** The comments shown in this article were for explanatory purposes only. You should be very careful about what you comment because you could create more confusion if you update the code and not the comment(s).

Instead of writing a comment, the code could have been made easier to understand by changing the name of the variable to something more descriptive:

```js
var emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi
```



Getting the right balance on what should be commented will come with experience and is not something we're going to cover in this article.

