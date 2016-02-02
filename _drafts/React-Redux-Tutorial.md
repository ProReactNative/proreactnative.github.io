---
layout: post
title: Using Redux to Manage React Native Application State
---

## Proof of Understanding 1

As many people like to say, React Native really only solves the "V" in MVC.

So, what are we to do with the M and the C?

## Proof of Understanding 2

If you're like me and coming from a native app background, then it's easy enough to understand

`this.setState()` inside of a component, but the question remains: how to manage application state?

## Proof of Understanding 3

I was out of touch with all of the developments in the React.js world over the last year or so.
But the good news is that they've cracked this problem. The answer: a global state container.

Wait, global state?

Well, they took a tip from the functional programming world, and the state works in snapshots.

Let's take a look at how it works.

## Simple Solution

### Integrating Redux

Go to your project root and execute:

`npm install react-redix --save`

Great. 

Now go to your `index.ios.js` or `index.android.js`
and you'll need to create a new wrapper class like this:

```js
<Provider>
    <App>
    </App>
</Provider>
```

### Creating your first Action Type

Redux has the concept that every action that occurs in the field has a unique type.

You'll need to register yours in the action-types.js file, like so:


```js
// constants/ActionTypes.js

export const SAVE_USER                 = 'SAVE_USER'
export const SAVE_PUSH_TOKEN           = 'SAVE_PUSH_TOKEN'
```

### Creating your first Action

No

```js
// actions/UserActions.js

import * as types from '../constants/ActionTypes'

export function saveUser(user) {
  return { type: types.SAVE_USER, user }
}

export function savePushToken(pushToken) {
  return { type: types.SAVE_PUSH_TOKEN, pushToken }
}
```


### Creating your first Reducer

```js
// reducers/user.js

import { SAVE_USER, SAVE_PUSH_TOKEN } from '../constants/ActionTypes'

const initialState = {
}

export default function user(state = initialState, action) {
  switch (action.type) {

  case SAVE_USER:
      console.log("user.SAVE_USER: " + JSON.stringify(action));
      return Object.assign({}, state, {
		  id: action.user.userId,
		  authToken: action.user.authToken,
	  });

  case SAVE_PUSH_TOKEN:
      console.log("push_token.SAVE_PUSH_TOKEN: " + JSON.stringify(action));
      return Object.assign({}, state, {
		  push_token: action.pushToken.token,
		  platform: action.pushToken.platform,
	  });

    default:
      return state
  }
}
```

### Registering your Reducer

```js
// reducers/index.js

import { combineReducers } from 'redux'

import host   from './host'
import photos from './photos'
import player from './player'
import user   from './user'

const rootReducer = combineReducers({
  host,
  photos,
  player,
  user,
})

export default rootReducer
```

### Registering your Action

Now we need to make our View component aware of the actions that we just created.

```js
// components/screens/LoginView.js

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

var UserActions = require('../../actions/UserActions');

function mapStateToProps(state) {
  // nothing for now. we'll come back to this later!
  return { }
}

function mapDispatchToProps(dispatch) {
  return {
	userActions: bindActionCreators(UserActions, dispatch),
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(LoginView);
```

### Changing State

```js
// components/screens/LoginView.js

this.props.userActions.saveUser({
  authToken: response.authToken,
  userId: response.userId,
});
```

### Registering your State

```js
function mapStateToProps(state) {
  // nothing for now. we'll come back to this later!
  return { 
	  user: state.user,
  }
}
```

### Observing State Change (manually)

We can register a function callback with the store and observe each change like so:

```js
// index.ios.js

store.subscribe(() => {
  console.log("update received!!!")
  console.log(store.getState())
});
```

### Observing State Change (View bindings)

Or we can simply hook into the view bindings in React-Redux:

```js

// components/screens/LoginView.js

<Text>
    User ID: {this.props.user.id}
</Text>
<Text>
    Auth Token: {this.props.user.autToken}
</Text>
```

And with that, we've integrated Redux into our app!

## CTA

Don't miss my next post. Sign up using the box below:
