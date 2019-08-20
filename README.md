#### React Components

Javascript classes that inherit from `React.Component` are able to take advantage of React's state management, render function, lifecycle hooks.

State management means that a component is constantly aware of how it is supposed to present data to the UI. Rather than directly mutating the state object `React.Component` uses a method called `setState()` which accept a new object as an argument and uses `Object.assign` to create a new object. 

After a Component receives a new state object the `render()` function is called. React then checks for any 'diffs' in this state object compared to the previous state object and then rerenders the DOM accordingly. React has a diffing algorithm that compares changes to it's virtual DOM to what is currently on the page so that it can selectively remove and update nodes rather than doing a full repaint of the DOM, which would otherwise be expensive.

React has a few lifecycle methods that can be included from `React.Component` which are called respective to rendering. `componentDidMount()` is called immediately after the first render of the component. `componentDidUpdate()` is called immediately following an update of the component. `componentWillUnmount()` called immediately before the component is removed from use in the UI. `shouldComponentUpdate()` is called before rendering the component allowing the developer to decided if a change in state or props warrents an update to the DOM.

#### You don't always need React.Component

React.Component does not always need to be inherited from in order to create a Component. However you must always `import React from 'react'` so that React is in scope so that you can use jsx. Components that do not inherit from `React.Component` are known as 'presentational' component.

#### Making API Calls

As a general rule API calls should be made at a higher point in your application. Any function which kicks off an API call would most likely get kicked of in `componentDidMount()`. Note that the API call is kicked of _after_ the first render of your component so it would be a good idea to add some kind of loader while this is happening.

#### Hooks!

Hooks are new to React and allow developers to create components with significantly reduced boilerplate. The `useState()` function is basically the component's state object and `setState()` compined into one. `useEffect()` is kind of like `componentDidMount()`, `componentDidUpdate()`, and `componentWillUpdate()` all rolled into one function. So clean! [Go Learn Hooks!](https://reactjs.org/docs/hooks-reference.html)

![Captian Hook](https://media.giphy.com/media/FIhBdogDLQiGs/giphy.gif)