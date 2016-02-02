---
layout: post
title: Getting Started with React Native on Ubuntu Linux
---

## Proof of Understanding 1

So you're tempted to give React Native a shot.

Either you're an Android veteran or you're an Android newbie.

I'm going to speak to the newbies on this post, bear with me pros.

## Proof of Understanding 2

Linux is the best thing since sliced bread, but the docs on the React Native site are a bit skimpy.

## Proof of Understanding 3



## Simple Solution

### Installing everything

#### Install NodeJS

```bash
$ sudo apt-get install -y build-essential
$ curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

#### Install NPM

is this already installed?

#### Install watchman

https://facebook.github.io/watchman/docs/install.html

#### Install flow

`wget https://facebook.github.io/flow/downloads/flow-linux64-latest.zip`
`unzip flow-linux64-latest.zip`

##### Add it to your PATH

`cd flow`
`echo -e "\nPATH=\"\$PATH:$(pwd)/\"" >> ~/.bashrc && source ~/.bashrc`

#### Install React Native

`$ npm install -g react-native-cli`

## Create Project

`$ react-native init AwesomeProject`

## Running the Project

* `$ cd AwesomeProject`
* `$ react-native run-android`
* Open index.android.js in your text editor of choice and edit some lines.
* Press the menu button (F2 by default, or ⌘-M in Genymotion) and select Reload JS to see your change!
* Run `adb logcat *:S ReactNative:V ReactNativeJS:V` in a terminal to see your app's logs

## CTA

Don't miss my next post. Sign up using the box below:
