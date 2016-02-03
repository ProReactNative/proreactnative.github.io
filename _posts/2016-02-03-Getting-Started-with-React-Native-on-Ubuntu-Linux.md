---
layout: post
title: Getting Started with React Native on Ubuntu Linux
---

So you're tempted to give React Native a shot.

If you're on Linux, you either prefer it for ideological reasons or for productivity reasons. And, between you and me, I'm happy that your money isn't going to Apple. :)

In any case, if you're coming to React Native, I'm guessing that either you're frustrated with native Android development, or you're big on Javascript / React.js and want to apply your skills on mobile.

The good news is that the development experience on React Native is quite good!

The bad news is that getting it up and running on Linux can be a bit tricky, and the docs on the docs on the React Native site are a bit skimpy.

So I've put this walkthrough together to get you up and running in pure copy and paste fashion.

Give it a shot and please let me know in the comments if these directions didn't solve your problem.

## Walkthrough

### Prerequisites

Before following this guide, you should have installed the Android SDK and run a successful Java-based "Hello World" app for Android.

Other than that, we should have you covered!

Let's dig in.

### Installing everything

#### Install NodeJS

The first thing you need to do is to install NodeJS, a popular Javascript implementation.

Fire up a terminal and paste these commands in to install NodeJS from APT:

* `sudo apt-get install -y build-essential`
* `curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -`
* `sudo apt-get install -y nodejs`

#### Install NPM

After installing NodeJS, you should now have NPM, too, the Node Package Manager.

You can check by typing `which npm` into the terminal.

If have NPM, you'll see something like:

```bash
$ /usr/local/bin/npm
```

If you don't have NPM, you'll see:

```bash
$ which npm
npm not found
$
```

If that's the case, run the following command to install NPM:

`curl http://npmjs.org/install.sh | sh`

#### Install watchman

[watchman](https://facebook.github.io/watchman/docs/install.html) is a tool developed by Facebook for watching the filesystem. For best results, you'll want to install it.

Once again, paste these into your terminal to get up and running:

* `git clone https://github.com/facebook/watchman.git`
* `cd watchman`
* `git checkout v4.1.0  # the latest stable release`
* `./autogen.sh`
* `./configure`
* `make`
* `sudo make install`

#### Install flow

Next up: flow. This is a static type checker for Javascript.

Here's how you install it:

* `wget https://facebook.github.io/flow/downloads/flow-linux64-latest.zip`
* `unzip flow-linux64-latest.zip`
* `cd flow`
* `sudo mv flow /usr/local/bin/flow`

Note: for advanced users, you can put the `flow` executable anywhere on your PATH. It doesn't have to be in `/usr/local/bin`.

#### Install React Native

OK, with all of that out of the way, it's finally time to install React Native.

For most users of this guide, you'll need to use `sudo` to install React Native as root:

* `sudo npm install -g react-native-cli`

For users who installed NPM through other means, you'll likely want to install React Native as a normal user:

* `npm install -g react-native-cli`

## Create Project

Hooray! React Native is installed.

Now it's time to do what we came here to do: make an app!

To create an app project, you'll need to sit down and input this command:

* `react-native init AwesomeProject`

It'll take several minutes, so don't panic if your terminal sits around for a while before spitting out any output.

## Setting Up an Android Device

OK, now that we have a starter project waiting for us, we're almost ready to run the code.

But before we do, we'll need either an emulator or a real Android device to run our code on.

In this tutorial, we're going to use a real Android device.

First thing is to plug in your device and check the manufacturer code by using `lsusb`:

```bash
$ lsusb
Bus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 003: ID 22b8:2e76 Motorola PCS 
Bus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

Seems like a bunch of gibberish, eh? You want the line that represents your phone. If you're in doubt, try unplugging your phone and running the command again:

```bash
$ lsusb
Bus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

You'll see that after removing the phone, the "Motorola PCS" disappeared from the list. This is the one that we care about!

`Bus 001 Device 003: ID 22b8:2e76 Motorola PCS`

From thabove line, you want to grab the first four digits from the device ID:

`22b8:2e76` 

In this case, it's `22b8`. That's the identifier for Motorola.

You'll need to input this into your udev rules in order to get up and running.

So, fire up your favorite text editor. For me it's vim:

* `sudo vim /etc/udev/rules.d/51-android.rules`

And add the following line to the file:

```
SUBSYSTEM=="usb", ATTR{idVendor}=="22b8", MODE="0666", GROUP="plugdev"
```

Just check that your device is properly connecting to ADB, the Android Debug Bridge, by using `adb devices`.

```bash
$ adb devices
List of devices attached
TA9300GLMK	device

$
```

You should see it as shown above.

If so, do a little dance. We're almost there!

## Running the Project

OK, now that we have a starter project waiting for us, we'll need to run the code.

In one terminal:

* `cd AwesomeProject`
* `react-native start`

In a second terminal:

* `cd AwesomeProject`
* `react-native run-android`

**Did it fail?**

OK, try this: 

* `adb reverse tcp:8081 tcp:8081`

**Still failing?** 

Leave a comment below or ping me on the [Reactiflux Discord server](http://www.reactiflux.com/) and I'll help you out.

**Did it succeed?** 

SWEET! Celebrate and then let's move on to the grand finale:

* Open `index.android.js` in your text editor 
* Change "Welcome to React Native" to "Welcome to React Native on Android"
* Press the menu button (F2 by default, or ⌘-M in Genymotion) and select Reload JS to see your change!
* Run `adb logcat *:S ReactNative:V ReactNativeJS:V` in a terminal to see your app's logs

It was a doozy, but we did it!

Was this helpful? If so, don't miss my next post by joining the mailing list using the box below:



