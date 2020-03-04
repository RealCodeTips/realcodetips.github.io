---
title: "How To create a CRUD API, using Node.js and Express, on Ubuntu 18.04"
date: 2019-12-19T12:25:00Z
draft: false
author: "Simon Drake"

# post thumbnail
image: "/assets/images/post/how_to_create_a_crud_api.jpg"

# meta description
description: "Learn how to create a CRUD API, using Node.js and Express"

# taxonomies
# category: "intermediate"
tags:
- intermediate
- javascript
- api

slug: "how-to-create-a-crud-api-using-nodejs-and-express-on-ubuntu-1804"

# post type
layout: post
---


### Introduction

An API (Application Programming Interface) is a way of interacting with a service, through a series of predefined requests.

Express is an open source web framework, for Node.js, designed to make developing websites, web apps, and API's easier.

In this tutorial, you will create a simple CRUD API on a single Ubuntu 18.04 server. The API will be accessible through a public IP address, allowing you to access it from anywhere with an internet connection.

To get started, sign-up for Digital Ocean using [this](https://m.do.co/c/5a7b87513ab0) referral link and get $100 credit!

## Prerequisites

* An Ubuntu 18.04 server setup, as described in the [initial server setup guide for Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04). You should have a non-root user with sudo privileges and an active firewall.
* Node.js and PM2 installed on your Ubuntu 18.04 server, as described in [How To Set Up a Node.js Application for Production on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04).
* A basic understanding of CURL

## Step 1 — Create a simple Express App that serves "Hello World"

In this step, we’ll create a very simple API, with one endpoint, that we’ll then build on in future steps.

To begin, create a new directory in a location of your choosing, and create a default `package.json` file, by running the following command in a terminal:

```
npm init -y

```

In the same terminal, install the `express` dependency:

```
npm i express

```

Next, open the project in a code editor of your choice and create a new `server.js` file.

Within the new file, add the following code:

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App listening on port ${port}!`))

```

Using the `express` application, we define a `/hello` endpoint, that will return the text `Hello World!`, and run our application on port `3000`.

Note that the `/hello` endpoint will only match for GET requests, as we've defined it using the `app.get` method.

In your terminal, run the following command to start the application:

```
node index.js

```

You should see the following output as a result:

```
$ node index.js
App listening on port 3000!

```

Now open your favourite browser, and navigate to `localhost:3000/hello`. If everything worked successfully, `Hello World!` should be displayed in your browser.

Congratulations - you have created an API, and you can communicate with it via the `/hello` endpoint. We’ll build on this structure in the following steps, and make our API even better!

## Step 2 — Extend the application to get a property from in-memory state.

At this point we have one endpoint, `/hello`, that returns the text `Hello World!`. While it’s awesome that we’ve created an API, as far as functionality goes it’s not that helpful.

In this step we’ll take our API and have it return some useful data. We’ll be using an example of employee details.

First, let's add another endpoint to our application that will retrieve a record.

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => res.send('Hello World!'))

app.get('/employee/:id', (req, res) => {
  console.log(req.params.id)
  res.sendStatus(200)
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

```

We define a new `/employee` endpoint, just like we did for the `/hello` endpoint, but we're also using a query parameter.

Query parameters are defined using a colon, and the preceding text is used to reference that parameter. In our `/employee` endpoint, we've defined a query parameter called `id`, and our `console.log` statement shows how we reference the value.

Stop and start the application, so the new code changes take effect, open your browser and navigate to `http://localhost:3000/employee/wiggly`.

You should see the following output in your terminal, as a result:

```
$ node index.js
App listening on port 3000!
wiggly

```

Notice how `wiggly` was printed to the terminal, which is what we used in the URL (`/employee/wiggly`). Change `wiggly` to anything you like, and you should see that printed in the terminal.

The power of this technique enables us to define one route, which can be used for many different scenarios. For example, an endpoint that can retrieve an employees details using a unique identifier, which is exactly what we're going to do now!

Let's create an Object, to act as in-memory state for our application, and add some fictional employees:

```js
/**  
We'll use the Object key as the unique identifier, made up of the
first letter of the employees first name and whole of their last name.
*/
const employees = {
  'sbrown': {
    firstName: 'Steve',
    lastName: 'Brown',
    department: 'Engineering'      
  },
  'jsmith': {
    firstName: 'Janine',
    lastName: 'Smith',
    department: 'Marketing'      
  },
  'kjones': {
    firstName: 'Karen',
    lastName: 'Jones',
    department: 'Sales'      
  },
  'bwilliams': {
    firstName: 'Ben',
    lastName: 'Williams',
    department: 'Administration'
  }
}

```

Now, instead of logging out the `id` parameter value, let's return the employee details from our Object:

```javascript
app.get('/employee/:id', (req, res) => {
  res.json(employees[req.params.id])
})

```

As we'll be returning a JSON object we're using the `res.json` method which, among other things, sets all of the correct headers and returns the response in JSON.

Restart the application and navigate to `http://localhost:3000/employee/kjones` in your browser.

You should see the following response in your browser:

```json
{"firstName":"Karen","lastName":"Jones","department":"Sales"}

```

Try changing `kjones` to any of the other unique identifiers, in the `employees` object, and see the returned values change.

Now, try changing the `id` to something non-existent (e.g. `http://localhost:3000/employee/wiggly`) in the browser. Nothing is returned, which is correct, but we're not giving the user any indication why; did something go wrong, or does the employee just not exist?

Let's update the endpoint to check if the given employee `id` exists and, if not, we'll return a `404 Not Found` response, otherwise we'll return the employee details.

```javascript
app.get('/employee/:id', (req, res) => {
  const employee = employees[req.params.id]

  if (!employee) {
    return res.sendStatus(404)
  }

  res.json(employee)
})

```

Restart your application, and try the same URL in the browser. The response should now be `Not Found`, which is a lot more informative to the user.

In this step, we took a very simple and not very helpful API and transformed it into one that queries data using query parameters. We also learnt how to handle situations where a non-existent employee is queried.

## Step 2 — Extend the application to add/delete a property from in-memory state.

We now have an API that can retrieve an employee, based on the employee id, but what if an employee joins/leaves the company? We need a way to add/remove them from our employees list, which is what we’ll achieve in this step.

Let’s focus on people joining the company first. When someone joins, we want to add them to our `employees` object so they can be queried later on.

To do this we will use a `POST` request, which we declare in the same way as our `GET` requests above.

```javascript
app.post('/employee', (req, res) => {
  res.sendStatus(200)
})

```

Restart your application to apply our code changes.

Our new route doesn’t do anything, other than return a `200 OK` status because, before we get into writing the logic, I want to talk a bit about how we can make a `POST` request.

When you enter an address into a browser, like we did in the previous steps ( e.g. `http://localhost:3000/hello` ), we are requesting a resource by making a `GET` request.

We can’t use the same mechanism to make any other type of request (`POST`, `PUT`, `DELETE` etc), so how do we reach these endpoints? There are quite a few different methods, but we’re only going to focus on one - CURL.

To make a `POST` request, to our new endpoint, using CURL, run the following command in a terminal:

```bash
curl -X POST 'http://localhost:3000/employee'

```

The only functionality we added to our new endpoint was to return a `200 OK` status, which is what you should see as a response in your terminal.

```bash
$ curl -X POST 'http://localhost:3000/employee'
OK

```

Let’s build this logic out to add an employee to our `employees` object.

The first thing we need to do is to get the new employees details. If we look at our existing employees, we need three pieces of information - `firstName`, `lastName` and `department`.

In the last section we used the `req.params` property to extract the `id` URL parameter. When dealing with a `POST` request, we have the ability to use a request body.

Using CURL, we can combine the Header (`-H`) flag to specify a content type, which informs the server what format the request content is in, and the Data (`--data`) flag to pass through a JSON object.

We’ll sending a JSON object so we’ll set a `Content-Type` header or `application/json`, to tell the server we’re sending JSON, and we’ll specify our new employee as data:

```bash
CURL -X POST 'http://localhost:3000/employee' -H 'content-type: application/json' --data '{"firstName": "John", "lastName": "Doe", "department": "engineering"}'

```

We are now making a `POST` request, to `http://localhost:3000/employee`, with the above JSON object as our Request Body.

By default, our Express application won’t parse this JSON object, so we need to enable some middleware to enable it.

```js
const express = require('express')
const app = express()
const port = 3000

/**
-- Employee object
*/

/** 
Middleware that looks at requests with an application/json 
Content-Type header and stores the request body, as JSON,
in req.body
*/
app.use(express.json())

/**
-- Other endpoints
*/

app.post('/employee', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})

```

Before defining any of your routes, tell your `app` to use the `express.json` middleware. Then, in our new endpoint, log the Request Body.

Restart the application and make the request, with the JSON request body, using CURL. You should see the following output in the terminal running your application:

```
$ node index.js
App listening on port 3000!
{ firstName: 'John', lastName: 'Doe', department: 'engineering' }

```

We can now receive a new employee object from our new `POST` endpoint, so let’s build out our logic to ensure we get all three required fields (`firstName`, `lastName` and `department`), construct the `id` from the `firstName` and `lastName`, and then add it to our `employee` object if that `id` isn’t already in use.

```js
app.post('/employee', (req, res) => {
  const { firstName, lastName, department } = req.body

  if (!firstName || !lastName || !department) {
    // 400 = bad request. It indicates to the user that
    // there was something wrong with their request.
    return res.status(400).send('One or more required fields are missing')
  }

  const id = (firstName[0] + lastName).toLowerCase()

  if (employees[id]) {
    // Provide a custom message so the user knows what the
    // problem with the request is.
    return res.status(400).send('A user with that id already exists')
  }

  // We set the employee properties explicitly, just in case
  // the user sends other fields through that we're not interested
  // in storing.
  employees[id] = { firstName, lastName, department }

  res.sendStatus(200)
})

```

Restart the application and try the following scenarios:

* Make a `POST` request without one or more of the required fields.
* Make a `POST` request with a `firstName` and `lastName` that makes an `id` which already exists (e.g. `Sarah Brown` which would conflict with `Steve Brown`).
* Make a `POST` request that succeeds and then make a `GET` request that retrieves the new employees details.

Now, let’s use what we’ve learnt so far to create a new `DELETE` endpoint that takes an employees `id` and removes it from our `employees` object.

```js
app.delete('/employee/:id', (req, res) => {
  const employee = employees[req.params.id]

  if (!employee) {
    return res.sendStatus(404)
  }

  delete employees[req.params.id];

  res.sendStatus(200)
})

```

You’ll notice this is very similar to our `GET` employee endpoint; we’re using the URL parameter, checking that the employee exists and returning a `200` status if everything succeeds. The only difference is we delete the employee, from the `employees` object, by their `id`.

Making a `DELETE` request in CURL is very similar to the `POST` request we saw above:

```bash
curl -X DELETE 'http://localhost:3000/employee/sbrown'

```

Restart the application and try the following:

* Make a `DELETE` request to our new endpoint, with an existing employee `id` (e.g. `http://localhost:3000/employees/sbrown`).
* Make a `GET` request to our employees endpoint, with the same employee `id` (e.g. `http://localhost:3000/employees/sbrown`) and see that you now get a `404 Not Found` response.

Congratulations - you’ve created a CRUD API!

In this step we really took our API to the next level, by allowing our users to add and delete employees, and we learnt how to deal with `POST` data by enabling the `express.json` middleware.

## Step 3 — Deploy the API to Digital Ocean

We now have an API that can create, delete and retrieve an employee. What we’ve done so far is awesome, but it only lives on our laptop. To take our application to the next level, we need to host it on a publicly accessible server that we can access it from anywhere in the world.

As per our prerequisites, you should have a Digital Ocean server. First, make a new directory on your server.

```bash
$ mkdir ~/simple-crud

```

Next, using a terminal in your local project directory, copy the necessary files to your server by running the following command:

```bash
$ scp package-lock.json package.json server.js ubuntu@YOUR_IP:./simple-crud/

```

Replace `ubuntu` with the user you created, and `YOUR_IP`` with your servers public IP address.

We’ve now copied our `package-lock.json`, `package.json` and `server.js` file to our new `simple-crud` folder on our server.

Next, while in the `simple-crud` folder on your server, install the applications dependencies:

```bash
$ npm i

```

Lastly, start the application using PM2:

```bash
$ pm2 start server.js --name "simple-crud"

```

To make sure the application has started correctly, you can run `pm2 logs` and ensure you see the following log line:

```bash
$ pm2 logs
0|simple-c | App listening on port 3000!

```

Next, we’ll amend the default NGINX `server` block to forward all requests to our application.

Use `vi` to edit the default configuration:

```bash
$ sudo vi /etc/nginx/sites-available/default

```

Then, replace the root location (`location /`) with the following code, which will forward any HTTP requests to our application.

```bash
location / {
	proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $
}

```

In this step we took our application from only running on our laptop, to running on a Digital Ocean server, meaning our application can be accessed from anywhere in the world!

## Step 4 — Use our new API, hosted on Digital Ocean, instead of localhost

We now have an application running on a Digital Ocean server, that can be accessed from anywhere in the world. We know how to access our API locally, but how do we interact with it now?

We just replace `localhost` with our public IP address in our CURL commands:

```bash
$ curl -X GET 'http://157.245.243.1/employee/sbrown'
{"firstName":"Steve","lastName":"Brown","department":"Engineering"}

```

```bash
$ curl -X POST 'http://157.245.243.1/employee' -H 'content-type: application/json' --data '{"firstName": "John", "lastName": "Doe", "department": "engineering"}'
OK

```

```bash
$ curl -X DELETE 'http://157.245.243.1/employee/jsmith'
OK

```

## Conclusion

You have successfully created a CRUD API, with in-memory state, and you deployed it to a Digital Ocean server meaning you can interact with it from anywhere using a public IP address.

