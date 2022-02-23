### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    A very Popular Front End JavaScript FrameWork.mainly Used to create User Interface cleanly. Allows you to create components and combine them in a different file.
- What is Babel?
    A Javscript compiler that in my experience converts JSX into readable JavaScript.
- What is JSX?
    stands for Javascript Markup Language, allows you to put html like elements into javascript file.
- How is a Component created in React?
    you must first import react and react-dom. 
    const COMPONENTNAME = () {
        return (
            <h1>Component</h1>
        )
    }
    
- What are some difference between state and props?
    props allow for data flow between the components. passing props between components through one another as a parameter. state on the other hand contains data on how a componenet looks at a certain point in time. consider a state kind of like a screenshot. 
- What does "downward data flow" refer to in React?
    mean data only flows in one direction and cant go back the other way. this is done through the use of props and states.
- What is a controlled component?
    a controlled component is one that is bound to a value.  its chagnes will be handled in code by using event based callbacks. FORMS
- What is an uncontrolled component?
    a component thats form is handled by the DOM itself. maintains its own state and will be update when the input values change.
- What is the purpose of the `key` prop when rendering a list of components?
    They allow for each item in a list of componenet to have its own id allowing it the states to be read individually. 
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

- Describe useEffect.  What use cases is it used for in React components?
    useEffect is a react hook. it is similar to using an event listener in Javascript. You place information inside that is read and ran on every rerender unless otherwise stated on the back end of the useEffect.
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef allows you to basically lock a piece of state. this state can change and wont cause a re render.
- When would you use a ref? When wouldn't you use one?

- What is a custom hook in React? When would you want to write one?
    a custom hook is a hook that you create on your own to fit whatever need you want it to. it is usally used to solve overcrowding in a component. if you have multple instances of code spread out throught multple components it may be easier to just create a custom hook.