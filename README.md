# Pages and Routing

## Rendering: Server Side vs Client Side

Server Side Rendering, like what happens in .NET apps, is when your server dynamically builds your web page before sending it to the client. The URL that is sent to the server acts as build instructions for the server to know what to sent back.

Single Page Apps are not server side rendered meaning that all of the dynamic build instructions are sent to the client up front. This means that any change in URL must be handled entirely with _JAVASCRIPT_

## window.history window.location

Javascript routing works by manipulating [window.history](https://developer.mozilla.org/en-US/docs/Web/API/History_API)

## React Router

[React Router](https://reacttraining.com/react-router/web/guides/quick-start) builds upon the the window history object to give react a more declarative and integrated routing solution. It allows your application to react to changes in state without ever having to reload the page. i.e. using `<Link to="/">Home</Link>` instead of `<a href="/">Home</a>`.

Some of what React Router does may look like total magic, that's because it leverages the [React Context API](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/RouterContext.js) to make certain properties available to nested components. It also utilizes higher order components, we can wrap a deeply nested component in `withRouter()` and that component will have access to any and all Router context.

## Homework

[Watch This Video](https://youtu.be/cKnc8gXn80Q)

