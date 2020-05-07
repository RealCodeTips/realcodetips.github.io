---
title: "What is a variable?"
date: 2019-03-16T08:55:00Z
draft: false
author: simondrake

# post thumbnail
image: "/assets/images/post/what_is_a_variable.jpg"

# meta description
description: "Variables are used to store information once, referenced by an alias, and used multiple times throughout the code; reducing duplication."

# taxonomies
# category: "beginner"
tags:
- beginner

slug: "what-is-a-variable"

# post type
layout: post
---


> A variable is a container for information.

Imagine everyone in your family **wasn't** identified by a name, but a series of letters and numbers.

Your brother is no longer called **James**, he's now called **cfixe18918zt9o7g4nxl**. That would be a real pain trying to remember every time you wanted to "reference" him.

One day you decide to write your brother a letter. You don't want to keep having to write his name (**cfixe18918zt9o7g4nxl**), and you want to send the same letter to your mum (**uqo2v892exahunofrii0**), dad (**0wj3hcy8userefzdiko7**) and partner (**4vxucjom1lakup3to71i**).

You could make the letter generic, without any names, but you want your family to feel special and think you've written each letter specifically for them.

So instead, you make a computer program to output your letter for you, with the correct name.

```
name = cfixe18918zt9o7g4nxl

Dear $name

.... body of text goes here that has a reference to the persons name 10 times ....
```

When you're done writing your letter, you can ask your program to generate it. Every time it sees `$name` it will replace it with the name you've assigned at the top (in the above example `Dear $name` becomes `Dear cfixe18918zt9o7g4nxl`) and prints it - completely personalised to each family member.

What if you were sending this letter to 20 family members? If you didn't use this variable technique, you'd have to keep 20 copies of the letter; personalised to each person. Then, after writing all of the letters, all exactly the same other than their name, you realise there are 10 spelling mistakes.

With the variable technique - you fix it in one place, and then generate each letter again by changing the name in your program.

Without the variable technique - you have to fix it in all 20 copies of the letter, manually, making sure you do every single one exactly the same so you don't make more spelling or grammatical errors.

Now imagine if you were writing it to your whole extended family - 120 people, and you found 30 mistakes. You'd wish you'd used a variable!

