---
layout: post
title: Making REST/HTTP Calls in React Native
---

Ah, making HTTP calls, one of the bread & butter operations in any mobile app.

Surely React Native can handle this without breaking a sweat, right?

Yes and no. The functionality is there, but it's likely not what you're used to.

If you're coming from iOS, AFNetworking is nowhere to be found, Android devs will miss Retrofit, and web devs will be confused at the absence of XMLHTTPRequest.

Instead, what's present instead is the `fetch` API. And you have to go digging for it to see how it actually works.

My hope with this post is to get you up and running with a few key snippets of code that you need to make HTTP calls.

Let's get started!

## Simple Solution


### Hello HTTP

First, let's start you off with the "Hello World" of HTTP calls

```js
fetch("https://api.github.com");
```

Technically, though, `fetch()` returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), so in order to read the response from the server, you'll need to wait for the promise to complete. 

The simplest way to do so is to use `await`, a concept borrowed from C#. 

`await` essentially tells your thread sit around and wait for the promise to complete.

Here's an example:

```js
async function helloHttp() {
    let response = await fetch("https://api.github.com");
    console.log(response);
}
```

Note that this function must be marked as `async` because we are `await`ing the response. 

### GETting JSON
        
In order to fetch JSON content, you'll want to do the following:
		
```js
async function helloJSON() {
    let headers = {
        'Accept': 'application/json',
    };

    let request = {
        method: 'GET',
        headers: headers,
    };

    let url = "https://api.github.com";
            
    // TODO: see if we can to response.json
    let response = await fetch(url, request);
    let parsedBody = JSON.parse(response._bodyInit);
    console.log(parsedBody);
}

```

### POST

#### POSTing JSON 

Now that you've seen GETing JSON, let's look at how to POST it:

```js
async function postJSON() {
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };

    let bodyObject = {
        "description": "the description for this gist",
        "public": true,
        "files": {
            "file1.txt": {
                "content": "String file contents"
            }
        }
    };

    let request = {
        method: method,
        headers: headers,
        body: JSON.stringify(bodyObject);
    };

    var url = "http://requestb.in/1dg4qob1",
            
    fetch(url, request);
}
```

#### POSTing Form-encoded

And for those services that expect form-encoded data, you'll want to use the [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object.

```js
async function postFormEncoded() {
    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
    };

    let params = {
        username: "DavidYKay",
        password: "secret"
    };

    var formData = new FormData();
    for (var k in params) {
        formData.append(k, params[k]);
    }

    let request = {
        method: method,
        headers: headers,
        body: formData
    };

    var url = "http://requestb.in/1dg4qob1",
            
    fetch(url, request);
}

```

## Fin

Right on! Hopefully you learned a thing or two about getting up and running with making basic HTTP calls in React Native.

Was this helpful? If so, don't miss my next post and sign up using the box below:
