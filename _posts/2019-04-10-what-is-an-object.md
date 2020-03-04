---
title: "What is an object?"
date: 2019-04-10T07:26:00Z
draft: false
author: "Michel Engelen"

# post thumbnail
image: "/assets/images/post/what_is_an_object.jpg"

# meta description
description: "Objects can be seen as a big cupboard with lots of wooden drawers to store things in it. Learn about it in more detail here."

# taxonomies
# category: "beginner"
tags:
- beginner

slug: "what-is-an-object"

# post type
layout: post
---

> Objects are structured collections of data and methods.

Like most things at this stage, we're not throwing all the information at you, so this is just a basic introduction. We've purposefully omitted all the complicated things until a later article.

`Objects` are like arrays but instead of indexing the elements by incremental numbers it allows you to assign a `key` to each `value` you store, separated by a `,`.

So the basic [syntax](https://codetips.co.uk/beginner/what-is-syntax/) for declaring an object looks like this:

````js
object = {
    key1: value1,
    key2: value2,
    ...
}
````

Each **key-value-pair** behaves just like a [variable](https://codetips.co.uk/beginner/what-is-a-variable/). This is especially important when you think about what can be stored inside an `object`. It can be anything ranging from the basic [data-types](https://codetips.co.uk/beginner/what-is-a-data-type/), [Arrays](https://codetips.co.uk/beginner/what-are-arrays/), [Functions](https://codetips.co.uk/beginner/what-is-a-function/) and even other `objects`.

```js
object = {
    number: 1,
    float: 3.17,
    boolean: true,
    string: "Hello World",
    array: [ "John Doe", 37, 1.95 ],
    object: {
        key: value,
    },
}
```

The whole concept of an object can be grasped easily when you imagine it as a big cupboard with labelled drawers.

Every time you put something in a draw (e.g. a handful of socks), you assign the draw a purpose (`socks`) by writing a label on it. With an `object` we assign a `key` instead of writing a label:

```js
object = {
    socks: [ "red socks", "blue socks", "black socks" ],
}
```

That way you can easily determine what is inside all of the drawers.

```js
object = {
    socks: [ "red socks", "blue socks", "black socks" ],
    tops: [ "striped top", "plain top" ],
    trousers: [ "jeans", "tracksuit bottoms", "chinos", "suit bottoms" ]
}
```


