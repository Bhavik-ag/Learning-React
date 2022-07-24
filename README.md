# Getting Started with React - Reference Notes

## Create React App
npx create-react-app <project-name>
npm start

## Components are of 2 Types:-
    1) Functional Components - JavaScript functions that return HTML(JSX)
    2) Class Components - JavaScript ES6 class that returns HTML in render() method 

## Exports
    1) export default <name> - Allows to import the component with any name
    2) name exports doesn't allow you have to import the component with exact same name

## Class Components
    1) Should extend Component class from React 
    2) Should implement a render() method which returns null or HTML(JSX)

## JSX - JavaScript XML
    1) Makes your react code simpler and elegant    
    2) JSX ultimately transpiles to pure JavaScript which is understood by the browsers
    3) Differences - class - className, for - htmlFor, onclick - onClick, tabindex - tabIndex 

## Props - To make the component dynamic
    1) props are immutable
    2) props.children - jsx written between opening and closing tag of components 
    3) props.<property> - value of the property assigned in opening tag of components 

## States
    1) State is an object which is privately maintained in the component

## setState
    1) To change the state of component anywhere other than the constructor you have to use the setState method 
    2) setState method has two paramaters - first is the state object and second is the callback function 
    3) Callback function is executed after the state is set as setState method is asynchronous
    4) React can group multiple setState methods in a row so whenever you want to update the state based on the previous state make to pass the function(prevState,props) as the argument of the setState function 

## Event Handling
    1) Event handler is a function and not a function call. =>"onClick = {clickHandler}" this is correct and "onClick = {clickHandler()}" this is wrong
    2) For class we write => "onClick = {this.clickHandler}"
    3) 'this' keyword is undefined in an event handler and hence event binding is necessary

## How to bind an event handler
    1) binding in the render method - this.clickHandler.bind(this)
    2) Use the arrow function in the render method - onClick={()=>{this.clickHandler()}}
    3) Approach preffered and given in React Docs - Bind in the constructor - this.clickHandler = this.clickHandler.bind(this)
    4) Class Property as arrow function 

## Methods as props 
    1) When you want to pass the function from parentComponent to the childComponent
    2) Define Method in parentComponent and in childComponent tag pass the method as a prop and access in childComponent using props 

## Conditionals - refer UserGreeting.jsx

## key prop
    1) is a special attribute with unique value we need to include when creating lists of elements  
    2) They are not accessible in the childComponent it is reserved for React 
    3) You can pass index as the second parameter in the arrow fxn and use it as a key for lists 
    4) Use INDEX as key only when list is static (no changes will be done) and it will never be sorted or filtered.

## Controlled elements
    1) Initialize their value from state 
    2) Use onChange() event listener and call specific function that maintains the changes in the state 

## LifeCycle Methods
    1) Mounting - constructor,static getDerivedStateFromProps,render and componentDidMount
    2) Updating - static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and componentDidUpdate
    3) Unmounting - componentWillUpdate
    4) Error Handling - static getDerivedStateFromError and componentDidCatch

##  Mounting LifeCycle Methods 
    1) constructor(props) - Use for Initializing State, Binding the Event Handlers 
                          - Call "super(props)" to overwrite the base constructor
    2) static getDerivedStateFromProps(props,state) - Use to Set the state 
    3) render() - Read props and state and return JSX
    4) componentDidMount() - Perfect place to cause side effects (interact with DOM or perform any ajax calls)

## React Fragment
    1) We can return multiple JSX elements using React Fragment without including an extra div in our DOM 
    2) Only attribute you can pass through Fragments is key attribute.
    3) We can use shorthand <> for React Fragments but it has limitation that we can't pass key attribute in this.

## Pure Component
    Regular Method does not implement shouldComponentUpdate method it always return true and thus it will always re-render.
    1) Pure Component implements shouldComponentUpdate method with shallow props and state comparison.
    2) Component will only re-render if shouldComponentUpdate returns false.
    3) Never mutate the state. Always return a object that reflects the new state.
    4) Works with Class Component only.

## React.memo()
    1) Works as Pure Component for functional Components
    2) accepts a functional component and returns an enhanced component that prevents rerender if there are no changes.

## Refs 
    1) Can be used to focus a form element on load (ref. RefsDemo.jsx)
    2) To fetch the input value 
    3) Refs can be attached with class components also. (ref. FocusInput.jsx && Input.jsx)

## Forwarding Ref 
    1) Create a ref in parentComponent
    2) Attach it with child component instance
    3) Re-write the child component using React.forwardRef (ref. FRInput.jsx)
    4) Attach the ref to the native input element 

## Portals
    1) React portals allow to mount components out of the root element.
    2) ReactDOM.createPortal("JSX", DOM node to mount the component)
    3) Best use for pop-up components 

## Error Boundary
    1) will catch the error and display a fallback UI 
    2) they catch errors during rendering of the componenets and can't be used for check error in event handling 
    3) Use like this - <ErrorBoundary><Hero heroName="Batman"></Hero></ErrorBoundary>

## HigherOrderComponents
    1) To share the common functionalities between the components 
    2) It is the function which accepts original component and returns a new enhanced component (ref. WithCounter.jsx, ClickCounter.jsx, HoverCounter.jsx)
    3) Check the naming convention in withCounter.jsx
    4) When we specify the props on WrappedComponent they are sent to the HOC. To fix this we pass remaining props using spread operator {...this.props}
    5) You can pass the paramaters to the HOC's

## Render Props
    1) Technique to share code between React Components using prop whose value is a function.
    2) Check - RenderPropsDemo.jsx, ClickCounterTwo.jsx, HoverCounterTwo.jsx
    3) App Component - <RenderPropsDemo render={(count, increamentCount) => <ClickCounterTwo count={count} increamentCount={increamentCount} />}/>

## Context
    1) Context provides a way to pass data through the component tree.
    2) Enclose the component from which you want to pass the data like this <UserProvider value="Bhavik"> <ComponentC/> </UserProvider>
    3) Ref. ComponentC.jsx, ComponentE.jsx, ComponentF.jsx and userContext.jsx
    4) We can add a default value to our context by passing while declaring the context 
    5) We can use typeContext to access the value in some component between the source and target components.

# **---------------Hooks---------------**

## useState Hook 
    1) Import useState function and call it with the initial value of the state.
    2) useState returns the state value and a method that is capable of updating the state property. (ref. HookCounter.jsx)
    3) When you need to set the state value based on the previous state value, always go with passing a function to setter function which gets prevState as an argument. (ref. HookCounterTwo.jsx)
    4) useState does not update and merge the object state properties like setState method and thus we need to use the spread operator for objects. (ref. HookCounterThree.jsx)
    5) Similarly, we can use the spread operator for an array. (ref. HookCounterFour.jsx)

## useEffect Hook 
    1) Import useEffect from React, call it and pass a function to it which you want to call on each render. (ref. ClickCounter.jsx)
    2) Conditionally Run Effects - useEffect takes second paramater as an array in which you can pass the states you want to keep track and call the passed function on change of any of the state in that array 
    3) Run Effects only once - This can be done by simple specifying the second paramater of useEffect method as an empty array.
    4) CleanUp Code - When you want to execute some cleanup code you can return it as function from the function passed in the useEffect function.
    5) Data Fetching using useState and useEffect (ref. DataFetching.jsx)

## useContext Hook
    1) Creating contest is same as previous.
    2) We can access context value where we want just by importing context and passing it to the useContext method which returns the context value. (ref. ComponentE.jsx)

## useReducer Hook 
    1) Hook for state management and is related to reduces functions 
    2) useReducer(reducer,intialState) where reducer is a function which takes currentState and action -> reducer(currentState,action) and returns the newState.
    3) Based on the action value reducer function updates the state.
    4) By making use of action as object we can use additional data in reducer function. (ref. CounterTwo.jsx)
    5) We can use multiple useReducers to prevent duplication of code. (ref. CounterThree.jsx)
    6) Fetching Data with useReducer and useContext (ref. DataFetchingReducer.jsx)

## useState v/s useReducer
    1) Convinient to use - useState - number,string,boolean and useReducer - object or array
    2) When number of state transitions are more useReducer is preffered.

## useCallback Hook
    1) useCallback is a hook that returns a memoized version of the callback function that only changes if any of the dependencies are changed.
    2) It is used to prevent unnecessary re-renders. (ref. IntervalHookCounter.jsx)

## useMemo Hook
    1) Similar like useCallback and prevents the unnecessary re-renders.
    2) useCallback caches the provided function instance itself while the useMemo caches its result. (ref. Counter.jsx)

## useRef Hook
    1) Allows us to access DOM nodes in React functional components. (ref. FocusInput.jsx)
    2) It can be used to create a generic container that can be used to store a mutable value. It stores data even after other state variables cause re-renders of the componenet. (ref. HookTimer.jsx)

## Custom Hook 
    1) JavaScript function whose name state with 'use'
    2) Example - useDocumentTitle (ref. DocTitle.jsx)
