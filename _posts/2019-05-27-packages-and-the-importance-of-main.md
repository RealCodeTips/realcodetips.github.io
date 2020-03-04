---
title: "Packages and the importance of \"main\""
date: 2019-05-27T07:53:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/packages_and_the_importance_of_main.jpg"

# meta description
description: "Packages allow developers to organise and reuse code, and can be used in your programme by “importing” them. "

# taxonomies
# category: "beginner"
tags:
- beginner
- go

slug: "packages-and-the-importance-of-main"

# post type
layout: post
---


In the previous article, where you created your first Go programme, we ended with the following code:

```go
package main
import "log"

func main() {

    // Start of our code
    
    var name string = "Simon"
    var age int = 29
    var profession string = "Developer"
    log.Println("Welcome to my first Go programme.")
    log.Printf("My name is %s", name)
    log.Printf("I am %d years old", age)
    log.Printf("I work as a %s", profession)
    
    // End of our code

}
```



We focused on declaring variables, using them in sentences, and outputting them to the terminal, but there were two important concepts that we didn’t explain.

## Packages

Go is made up of internal and 3rd party packages. Internal packages are part of the Go installation, whereas 3rd party packages are developed by the Go community and have to be installed separately. Installing 3rd party packages is not in-scope of this article.

Packages allow developers to organise and reuse code, and can be used in your programme by “importing” them.  In the above example we imported an internal package called `log`, which contains a number of functions that can be used to output to the terminal; we made use of two of these functions – `Println` and `Printf`.

```go
import “log”
```



Developers can develop their own packages and name them using the `package` declaration on the first line of the file. We’ll explore this in a future article.

# The importance of “main”

You may have noticed that our example above had the word `main` in two places; the package name and the function name.

When you run a Go programme ( `go run main.go` ), it looks for an entry point (where it should start running the code from) by first finding the main package, then the main function and running the code in it.

If you changed either the package name or the function name, the compiler would throw an error.

We also called our file `main.go`, but in reality you could name it anything.


