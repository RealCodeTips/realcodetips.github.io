---
title: "An Interview with Kevin Ball"
date: 2019-08-13T08:23:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/interview_with_kevin_ball.jpg"

# meta description
description: "In this interview, we speak to Kevin Ball, founder of zendev and creator of the Friday Frontend newsletter, about his experiences in the industry."

# taxonomies
# category: "interviews"
tags:
- interviews

slug: "interview-with-kevin-ball"

# post type
layout: post
---


In this interview, we speak to Kevin Ball ([@kbal11](https://twitter.com/kbal11)), founder of [ZenDev](https://zendev.com/) and creator of the [Friday Frontend](https://zendev.com/friday-frontend.html) newsletter, about his experiences in the industry.

> Could you introduce yourself (name, years in the tech industry, favourite languages etc) and why you agreed to do this interview?

Sure. I'm Kevin Ball (often go by KBall), and I've been in the tech industry since 2004, so 15 years now. I'm pretty pragmatic in terms of language choice, varying what I use based on project/client.

Right now, with my main client, I'm doing a lot of coding in [golang](https://www.codetips.co.uk/tag/go/), some [python](https://www.codetips.co.uk/tag/python/), and some [JavaScript](https://www.codetips.co.uk/tag/javascript/). That said, my favourite language for pure fun programming is Ruby.

I agreed to do this interview for a couple of reasons. Working in tech has been great for me, making it possible to live a great life & have all sorts of opportunities, and it's important to me to help others get access to that. I also enjoy teaching, do a lot of writing & speaking, and find my best ideas/those that end up resonating best with others often come from questions other people ask, so this is an opportunity to get asked some questions that may turn into great ideas for content. :)

> Thanks for the great introduction, and for agreeing to do this interview! After 15 years in the industry, you will have gained a lot of knowledge and seen a lot of changes.   What has been the biggest change in the last 15 years, and what one thing do you know now that you wish you could tell yourself 15 years ago?

I think the biggest change is the availability of cloud computing and the vast explosion of open-source software, which has made it infinitely easier to launch and scale software. To give a short example, I remember working for months on a database sharding project because one of our key tables was about to outgrow the *massive* (64GB ram, maybe 512GB disk?) server we had it living on. We needed to split the table across multiple machines, but it had 3 distinct lookup patterns, so it wasn't straightforward to do so. And we had to buy and rack up new servers in our colo to do it. These days, I can simply allocate a cloud SQL server, scale it up via a web interface to a massive 400+GB RAM and 30 freaking TB of disk... but if that's not enough at the click of a button I can spin up a cluster of elasticsearch instances that can scale almost infinitely. All without ever having to touch a single real piece of hardware.

In terms of things I wish I could tell myself, one thing I'd recommend to myself is to worry more about going deep than going wide, especially early on. There are way more things in the tech ecosystem than you could ever learn about, and if you jump around all the time it's hard to build enough expertise to have a big impact. I did that early on, just wanting to try everything. And I see a lot of folks doing that now, they're just getting started and they want to learn React, AND Vue, AND Node.js, AND databases, AND all sorts of other things.

Instead, I recommend (especially early on): pick something and become an expert on it. To advance in your career you need to build up a specialisation in an area where you understand how to get stuff done. And the great thing about software is that there **are** a lot of concepts in common, so going deep can help you go broad later. If you take the time to master React and understand good component design and how routing works and all of those things, that knowledge will port to Vue or Angular or Svelte or whatever when you decide to move to later on. And if you understand data management and how data flows from an API through different parts of a client application, and what makes APIs easier and harder to work with, that knowledge will help you later when you expand into working on the server and building those APIs.  But if you try to learn everything all at once, you end up flailing and it takes a lot longer to learn those deeper concepts.

> Cloud computing has changed everything. I consider myself fortunate that it was already a "thing" when I got into the development world, but do you think that has hindered the software developers of today? We can spin up and shut down a server with a button, but is there a negative in there somewhere? Is it now producing experienced developers, that wouldn't know how to install an OS for example? Is that even a bad thing? Should the developers, learning right now, be bothered about learning about the hardware side?

I don't think so, I think it's moving us up a level of abstraction and productivity. To the extent that the abstractions don't leak, you shouldn't need to learn about them.

Back when programming languages like C were first introduced and folks no longer had to learn assembly, there was a lot of belly-aching about how that would lead to lower-quality developers, but I think it instead led to people who think naturally in higher levels of abstraction. Today I don't think anyone would argue you should start your programming experience with assembly, and the same is true of dealing with OS installation etc. If that stuff interests you, great, but I don't believe there is any harm in ignoring it as long as you can.

> Trying to learn everything, all at once, is something every developer can relate to I think, so that's a great choice! For developers that are using CodeTips or any medium, to learn how to programme, they will probably get very overwhelmed with all of the choices out there today. There are so many languages to choose from, and new web frameworks popping up every other week, what would you advise to someone, just starting, to learn?

It depends a lot on your personal circumstances and interests. I wrote out a 3-part decision-making framework called "the 3 Mos" for this last year that emphasises 3 considerations: Motivation, Momentum, and Money.  Essentially - when deciding what to learn, pay attention to what gets you excited, what will set you up for future learning, and what will either pay for you to learn it or set you up to make an income from it quickly.

If you're in the front-end space for most people Momentum and Money both speak in favour of deep diving on React, there's a tremendous number of jobs and freelance opportunities out there for React, and the core concepts are very aligned with the broader trends in front-end development so you're also set up well for any future changes. That said if it doesn't get you excited you're not going to learn well so take a look at other options. I love Vue.js and find it is easier for a lot of folks to learn over React, especially if you're coming from a less traditional programming or more visual background. If you've already got a job, look for opportunities around what is being used there (or what they're interested in) so you can get paid to learn.

It's very tempting to try to follow "the flavour of the week" but, especially when you're starting, that is a path to being overwhelmed. I'm a big advocate of pragmatism and compounding growth. Focus on things that give you momentum for the future and where you can either get paid to learn right away or very quickly so you're not having to split time between paid "non-learning" and unpaid learning.

> Is there anything else you'd like to add, for anyone reading this interview?

I think it’s important to highlight that software can be a great career even if you don’t want to spend every minute coding. You do need to invest more time than most career paths in staying up to date and continually learning, but the hype about having to be “super passionate” about coding and code all the time is bogus. You can craft a great work-life balance and use this to support your life even if it isn’t your life. I know people who have used freelance web dev to support their passions as pro musicians, actors, and travellers.

Other than that if folks are interested in frontend they might like my [newsletter](https://zendev.com/friday-frontend.html), and if they have questions my [Twitter](https://twitter.com/kbal11) DMs are open or my email is easy to find on my [website](https://zendev.com/).



