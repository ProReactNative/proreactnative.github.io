---
layout: post
title: How to Implement Push Notifications on Android
---

## Proof of Understanding 1

There's plenty of info out there on iOS dev, but Android is a bit lacking.

## Proof of Understanding 2

Ironically, Android stands the most to gain from React Native! Android dev, while incredibly satisfying, is very slow and cumbersome with the native tools.


## Proof of Understanding 3

Push, that sexy 


## Simple Solution

### Register App with GCM

### Register For Push Notifications

### Store the token



### Try your first push using Python

There are similar libraries for every popular language out there.

For this tutorial, we're going to use Python and [python-gcm](https://github.com/geeknam/python-gcm).

```py
from gcm import GCM

gcm = GCM(API_KEY)
data = {'param1': 'value1', 'param2': 'value2'}

# Downstream message using JSON request
reg_ids = ['your_device_token']
response = gcm.json_request(registration_ids=reg_ids, data=data)

# Downstream message using JSON request with extra arguments
res = gcm.json_request(
    registration_ids=reg_ids, data=data,
    collapse_key='uptoyou', delay_while_idle=True, time_to_live=3600
)

# Topic Messaging
topic = 'topic name'
gcm.send_topic_message(topic=topic, data=data)
```


## CTA

Don't miss my next post. Sign up using the box below:
