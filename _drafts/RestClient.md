---
layout: post
title: Making REST/HTTP Calls in React Native
---

## Proof of Understanding 1

Ah, making HTTP calls. 

One of the bread & butter operations in any mobile app.

## Proof of Understanding 2

And yet, the network stack doesn't look anything like in iOS, Android, or, the standard XMLHTTPRequest you may know from the web.

## Proof of Understanding 3

What's present instead is the `fetch` API.

Let's get you up and running with the key operations that you need to make HTTP calls.

## Simple Solution


### GET



### GETting JSON
        
```js
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/jnd.guesswut.v1',
};


var request = {
    method: method,
    headers: headers,
};

var url = "http://requestb.in/1dg4qob1",
        
fetch(url, request);

```

### POST

### POSTing JSON 

```js
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/jnd.guesswut.v1',
};


var request = {
    method: method,
    headers: headers,
};

var url = "http://requestb.in/1dg4qob1",
        
fetch(url, request);

```

### POSTing Form-encoded

```js
headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/jnd.guesswut.v1',
};


var params = {

};

var formData = new FormData();
for (var k in params) {
    formData.append(k, params[k]);
}

var request = {
    method: method,
    headers: headers,
    body: formData
};

var url = "http://requestb.in/1dg4qob1",
        
fetch(url, request);

```


## CTA

Don't miss my next post. Sign up using the box below:
