---
title: "What is version control?"
date: 2019-04-05T08:44:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "assets/images/post/what_is_version_control.jpg"

# meta description
description: "Version Control helps you keep track of your data and allows you to revert back to a previous point in time"

# taxonomies
# category: "beginner"
tags:
- beginner

slug: "what-is-version-control"

# post type
layout: post
---

> Version Control helps you keep track of your data.

We're going to assume that you've written a CV. How many times have you re-written or updated it?

What if you wanted to go back to the version you had ten years ago? You could create a brand new version every time you make a change, but you would end up with hundreds of CV's.

What if you wanted to compare the version you had ten years ago, to the one you have today? If you've saved each file separately you could open them up side-by-side and figure it out, otherwise, you're out of luck.

Alternatively - you could use Version Control.

Let's assume you created your first CV ten years ago. You save it on your computers hard-drive and add it to your Version Control system.

The next time you need to make a change you overwrite the version on your hard-drive, and you add the newest change (with a message explaining what you changed) to your Version Control system.

Ten years have passed and you've done this hundreds of times, but you still only have one document. Because you added each change to your Version Control system, you now have a "history" of changes.

```
| ID |       Date         |          Message                |
+----+--------------------+---------------------------------+
|2410|2019-04-01 09:12:00 | Added latest role/company       |
+----+--------------------+---------------------------------+
|2409|2019-03-21 12:25:00 |Fixed typo in personal statement |
+----+--------------------+---------------------------------+
|2408| 2019-01-11 19:01:00| Removed education section       |
+----+--------------------+---------------------------------+

......

|0001| 2009-04-13 15:29:00| First commit                    |
+----+--------------------+---------------------------------+
```

Now let's go back and answer our questions from the beginning, using a Version Control system.

**What if you wanted to go back to the version you had ten years ago?**

A Version Control system will allow you to go back to a specific version. Each system will have its own way of handling such a task, here's an example using [pseudocode](https://codetips.co.uk/beginner/what-is-pseudo-code/):

```
checkout 0001
```

This would update the document we have to the exact state it was in 2009 (ID `0001`). You could just as easily "checkout" any other version, using the corresponding ID.

**What if you wanted to compare the version you had ten years ago, to the one you have today?**

Version Control systems allow you to view the changes, between saves, of single files or whole projects. Again, each Version Control system will have its own way of handling such a task but here's an example:

```
diff 0001 2410
```

This would then show you all of the differences (additions, modifications and deletions) between `0001` and `2410`. That doesn't mean every single change in the last ten years, only the differences between the two versions.


---

Before we end this article I want to clarify one thing.

`git` is not Version Control. Many people use the terms interchangeably, but you should know the difference.

It is a form of Version Control. In fact, it is a very popular Version Control system, but there are others.

Comparably Google Chrome is a very popular browser, but there is Internet Explorer, Firefox etc.

This is not an article about what `git` is, or how to use it, this is an article about what Version Control is.

