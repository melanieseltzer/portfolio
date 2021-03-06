---
title: Playing with React Hooks
date: "2018-10-29T00:00:00"
layout: post
draft: false
path: "/posts/playing-with-react-hooks/"
category: "React"
tags:
  - React
  - Hooks
description: "React Hooks were just announced and useReducer in particular has me excited!"
---

Last week at <a href="https://conf.reactjs.org/" target="_blank">React Conf 2018</a> the team announced a new proposal for <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">React Hooks</a>, a new API that allows you to use state and other features more directly without the need for classes. There are no breaking changes and it's completely opt-in, so if you're not _hooked_ just yet (heh) you don't have to use them and can continue using classes, no problems. Pretty exciting stuff!

It's currently only in the proposal stage but if you're like me you love playing around with new features, so you can start integrating them right now with the React <a href="https://www.npmjs.com/package/react/v/16.7.0-alpha.0" target="_blank">v16.7.0-alpha.0</a> release.

One hook in particular has me pretty excited, and that is `useReducer`. It offers Redux-like functionality without needing to bring in a separate state management package 😮 Really cool!

With `useReducer` we get the current state along with a matching dispatch method. This is particularly useful with the new `useContext` hook, as I discovered while playing around with the two together over the weekend. I created <a href="https://react-hooks.netlify.com/" target="_blank">a simple little app</a> that allows you to update the width, height and background of a square.

Inside `Context.js` we initialize the context and create the reducer, and also create the provider component (`AppContextProvider`) which wraps around the `Controls` and `Square` components (they are siblings). This means when the context is updated via the Controls component, Square is able to get the updates without having to pass any props down. Pretty cool 😃 

Let's go over how all this works. Starting in Context.js:

```js
import React from 'react';

// Create the context as AppContext
const AppContext = React.createContext();

// Define some initial state
const initialState = {
  width: 320,
  height: 250,
  activeColor: '#F44336'
};

// Create the reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'width':
      return { ...state, width: action.payload };
    case 'height':
      return { ...state, height: action.payload };
    case 'activeColor':
      return { ...state, activeColor: action.payload };
    default:
      return initialState;
  }
};

const AppContextProvider = props => {
  // Create the provider as AppContextProvider
  // useReducer uses the above reducer and initial state, and returns
  // the current state and matching dispatch method
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // Return the Provider and pass through the state and dispatch as value
  return <AppContext.Provider value={{ state, dispatch }}>{props.children}</AppContext.Provider>;
};

// Make sure to export both context and provider
export { AppContext, AppContextProvider };
```

You don't have to create the Provider in a separate component like above, but I like doing it that way because it keeps things very clean in `App.js`. Personal preference 🤷‍

The resulting `App.js` imports the Provider which then wraps around the components, enabling them to subscribe to the context changes.

```js
// App.js

// ...
import { AppContextProvider } from 'path/to/Context';

// Import our other components
import Controls from 'path/to/Controls';
import Square from 'path/to/Square';

export default function App() {
  return (
    // Wrap the Provider around our components. Nice and clean!
    <AppContextProvider>
      <Controls />
      <Square />
    </AppContextProvider>
  );
}
```

In the `Controls` component, we then have to import the context for use with `useContext`. From that, we can pull off the state and dispatch.

```js
// Controls.js

// ...
import React from 'react';
import { AppContext } from 'path/to/context';

export default function Controls() {
  // Use AppContext as the context and pull off state and dispatch
  const { state, dispatch } = React.useContext(AppContext);

  // Create the functions to update state, using the dispatch method passed in
  // from the provider
  const setWidth = value => dispatch({ type: 'width', payload: value });
  const setHeight = value => dispatch({ type: 'height', payload: value });
  const setActiveColor = color =>
    dispatch({ type: 'activeColor', payload: color });

  return (
    ...
    // Now we can update state using each of the above functions in the 
    // onChange handler e.g. with the color picker that would look like:
    <CirclePicker
      color={state.activeColor}
      onChange={color => setActiveColor(color.hex)}
    />
    ...
  );
}
```

And then all we have to do in `Square` component is pull the state off from the context and pass it down as props for styling (I'm using styled-components). Easy peasy!

```js
// Square.js

// ...
import { AppContext } from '../../context';

export default function Square() {
  // Use AppContext as the context and pull off state
  const { state } = useContext(AppContext);
  // Pull off specific state from the context
  const { width, height, activeColor } = state;

  return (
    // Pass state down as props
    <SquareStyle
      className="square"
      width={width}
      height={height}
      activeColor={activeColor}
    />
  );
}

// And use within the styled-component
const SquareStyle = styled.div`
  background: ${props => props.activeColor};
  height: ${props => props.height + 'px'};
  width: ${props => props.width + 'px'};
`;
```

After some inevitable initial confusion, I feel like ultimately hooks are pretty intuitive to me. I'm excited to see where things go and welcome the new addition to React. Will definitely be using them down the line when they are officially released.

Thanks for reading, and if you want to dive deeper into the above, the code is available on <a href="https://github.com/melanieseltzer/react-hooks" target="_blank">Github</a> 👍