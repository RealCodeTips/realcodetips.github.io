---
title: "What is Serverless"
date: 2019-06-04T08:14:00Z
draft: false
author: "John Demian"

# post thumbnail
image: "/assets/images/post/what_is_serverless.jpg"

# meta description
description: "Serverless architecture is a type of cloud computing where the user writes code, that gets run by the service provider, without having the user manage the infrastructure."

# taxonomies
# category: "intermediate"
tags:
- intermediate
- serverless

slug: "what-is-serverless"

# post type
layout: post
---


In case you missed the news this past couple of years, Serverless is the “new new” in the tech scene and besides some major perks to developers, it introduces a significant change in the development paradigm that will take some getting used to.

## What is Serverless?

Let’s first address the buzzword and the confusion it leaves behind. There are two things people think about when someone mentions “Serverless”. The Serverless platform, which is used to deploy and manage applications on a number of service providers and the Serverless architecture which is what we are talking about today.

Serverless architecture is a type of cloud computing where the user writes code, that gets run by the service provider, without having the user manage the infrastructure.

Basically, Serverless offers you a way to create applications without having to build, maintain, update, upgrade or provision any type of infrastructure; things that take a lot of time and money.

There are lots of service providers that offer FaaS (Function as a service) but for the sake of keeping this article short and sweet, I’ll just mention the top few.

* [AWS Lambda](https://aws.amazon.com/lambda/)
* [Microsoft Azure](https://azure.microsoft.com/en-us/)
* [Google Cloud Functions](https://cloud.google.com/functions/)
* [IBM Cloud Functions](https://www.ibm.com/cloud/functions) - based on Apache OpenWisk

## How does it work?

For the sake of everyone’s sanity, I’ll just reference AWS Lambda from now on, fully acknowledging that there are other FaaS providers out there, but since most of them actually work in a similar way, and since AWS Lambda has about 75% of the market, it makes sense to just talk about one.

At the risk of oversimplifying things, I’ll attempt to describe how AWS Lambda works without going into details. I’ve already mentioned that you write your function and upload it in your AWS account and then you are done, but when it actually gets "fired up" there’s a lot of things that happen.

When a function is invoked there’s a container that gets "spun up" automatically. The time between its invocation and the moment it actually executes the function is called a “coldstart”.

The container will be kept "warm" for about 45 minutes after its last invocation and gets deleted after that.

Service providers delete unused containers to allow for Lambdas that see heavy load to be able to scale.

![Anatomy of a Function](/assets/images/content/what_is_servless_anatomy_of_a_function.jpg)

_Anatomy of a Lambda function - AWS re:Invent 2017_

## What’s so great about Serverless?

Serverless technology is not new by any means, it’s only recent that it has been made available to the masses with the release of FaaS providers like Lambda and Azure.

The biggest draw-ins of the technology are the cost, scalability and the speed at which you develop new features.

### The Cost

The [cost](https://dashbird.io/blog/saving-money-switching-serverless/) is a huge benefit of the architecture, since you only pay for the invocation and the duration of the execution. Imagine having an application like an online store that only gets used during the day. With a traditional server you’d have to pay the same amount for the time it sits dormant during the night when nobody visits your shop.

You get 1 million requests for free and after that, you pay next to nothing for [AWS Lambda](https://aws.amazon.com/lambda/pricing/).

### Scalability

Perhaps one of the biggest benefits of Serverless is its ability to seamlessly scale on demand. Once the container spins up, you’ll be able to call as many lambdas as you need; providing you don’t run into the [concurrency limits](https://www.bluematador.com/blog/why-aws-lambda-throttles-functions).

### Development speed

Since you don’t manage any infrastructure, deployment of new features is going to be a breeze. That’s why companies that need to be agile, like [Netflix](https://dzone.com/articles/serverless-case-study-netflix) and [Coca-cola](https://dzone.com/articles/serverless-case-study-coca-cola) rely heavily on Serverless.

There are thousands of companies using Serverless and that number seems to be ever increasing, as the popularity of Serverless seems to only be growing amongst developers; reaching over 75% year on year adoption rate.

---

I hope I’ve been able to shed some light for all the newcomers looking into getting started with Serverless.

Be sure to check back on [CodeTips](www.codetips.co.uk), for the next articles related to Serverless, soon. We'll be exploring different use cases for Serverless, tools of the trade and API examples.

