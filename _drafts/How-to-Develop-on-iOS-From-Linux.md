---
layout: post
title: Getting Started with React Native on Windows
---

In this conversation on facebook This

A developer from Italy asked how to develop i

https://www.facebook.com/groups/react.native.community/permalink/719448644857383/

## Proof of Understanding 1
## Proof of Understanding 2
## Proof of Understanding 3

Great question. I don't know if anyone has built a tool for doing this with React Native yet, but I do know that Xamarin has a tool they call the "Mac Build Host" that lets Windows-based developers run their iOS builds on a networked Mac. That's a very sophisticated use case, as their system is all C# code and everything is sent to the build host, which then compiles the code.

In React Native, you'd actually perform a less sophisticated build step, because all of the Objective-C/Swift code would coming from the Mac, generally speaking, and then all of your JS could still come from the React Packager on Linux. So you could, without TOO much effort, rig up a shell script on your Linux box that SSHs into your mac and runs `xcodebuild` to build and run the iOS simulator. 

From there, you'd be able to write all your JS code on Linux! You could even edit the native Obj-C code via ssh

The main downside is that you'd have to share keyboard & mouse with the Mac (a la Synergy) in order to click around in the app.

Does this make sense so far? 

## Simple Solution

* Make iOS app able to set your IP address
* Build the iOS code on an iPhone
* Write your JS code 

### Go into your iOS Code and add a setting for setting your IP address
### Build the iOS code on an iPhone
### Run the packager on Linux
### Write your code
### Smile


## Bonus

As a bonus, I'll show you how

### Set up buddybuild.com with continuous integration
### Share your Mouse and Keyboard between both environments using Synergy
