#Raghavendra Yallamanda

# ---First---Inception

1.Html (Hello World)
2.JS (Hello World)
3.React(Hello World)
i. cdn links ---> 1.development, 2.DOM Operations.
ii. React.CreatElement(tagName,{id:'1', className:'2'}, innerHTML [OR] React.CreatElement)--> it return objects,
iii. ReactDOM.CreatRoot(element),
iv. Root.Render()---> its takes an object and return html and put it into the dom
v. Nested Elements Using React.CreateElement.
vi. for same line multiple write html using [ARRAY]
vii. Replacing the Div-Root(example) Inside
viii.Library Vs FrameWork

# -----second-------Igniting our App

1.package.json is the configure of npm (command- npm init)
2.npm install -D Parcel ( -d is nothing Development Dependency) (here modules also created)
3.There Two Types Dependencies -> dev,Normal(prod) Dependencies
4.In Package.json there are symbols like --> caret(^) and tilde(~)
i.caret(^) --> It matches minor and patch versions
ii.Tilde(~) --> It Matches only patch versions
example: 2.1.8 --> Here 2 is major , 1 is minor, 8 is the patch 5. package.lock.json --->
i. there is nested dependencies
ii. It tracks the Exact versions of every installed pacakge, including 'Nested Dependencies' 6. npx parcel index.html---> it executes the parcel of src html file in local host 7. npm install react and npm install react-dom 8. don't use the cdn link. becuase the cdn link makes network
and then you are using that react. so basically local folder there is react code we are using that's better. 9. import the react from nodemodules like ---> import React from 'react' 10. the browser can't understand your script imports that's why we are using script type="module" 11. we don't push the code in github folders like nodemodules,dist etc..., whatever you are installing.
because the server will automatically or manually their use to run npm install all the stuff of nodemodules 12. browsers list ---> It supports old browser or latest browser (using in package.json) 13. npx parcel build index.html ---> it's for production build

# parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement(auto refresh) and
- file watch Algorithm ---> written C++
- caching - faster builds
- Image Optimization
- Minification
- Bundling
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagonstic
- Error Handling
- Https
- Tree shaking Algorithm ( remove unused Code for you)
- Different dev and prod bundles ( when builds )

# ---------third---laying the foundation

# npm scripts

- actually we are using 'npx parcel index.html' executing the parcel package with source file of index.html;
- In Package.json file we are using start and build.
  1. so we can add our key,value in scripts. something like this...
     "scripts": {
     "test": "raghavendra",
     "start":"parcel index.html",
     "build":"parcel build index.html"
     },
  2. start is dev to like npx parcel index.html [or] npm start [or] npm run start
  3. build is for production like npx parcel build index.html [or] npm run build

# React Elements

- React Element is an object the 'render' can takes that object and returns the html and put it into the DOM.
- React.createElement => Object => HTML Element(render).
- So, our Entire Application can we write like react.createElement it is very difficult.so, That's why they are releasing the JSX.

# JSX

- JSX is not an Html in js.
- JSX is look html Syntax.
- React and JSX is different.
- SO, In parcel package there is babel. What babel does .

# Babel

- Babel is a Javasript Compiler or Transpiler.
- Babel transpiles the Jsx code => React.createElement.
- Babel transpiles the code es6 => es5,es4...,etc browser understanding purpose.

# Jsx Rules

- attributes should be camelCase. ex:- className,backgroundColor...etc..,
- use brackets() for multiples lines write in jsx
  ex:- (<div>
  <h1>helloworld</h1>
  </div>)
  because the babel need where is jsx starts and ends;
- Babel transpiles the code JSX => react.element => js object => html element(render)

# VS-code extensions

- prettier code.
- bracket pair colorization.
- eslint.
- Better Comments.

# React Components

- There are two types of Components in React.
  1.class based components.
  2.functional based components.

- If a function return a ReactElement it becomes functional component.
- If a function return a jsx it becomes functional component.

- react element vs react component
- function name starting letter should be Capital letter ex:- function Hello(){}
  becacuse lower letter for html elements
- root.render(<component/>) and root.render(element);

# <component/>---> how it works inside.

1.  babel transforms the jsx to plain javascript
2.  so , in these case <component/> becomes => React.createElement(Component,null).
    when React sees the "component" it recognizes that "component" it is a COMPONENT.
3.  then React call the "component" function which returns a element that describe what should be rendered
    on the screen.

# JSX Tips

- inside {} curly braces we can write javascript
- cross site scripting attack
  1. to prevent the cross site attacks
  2. jsx will take care that all.

# different ways use our component

1. {component()}
2. <component/>
3. <component></component>

# -----Fourth ----talk-is-cheap-show-me-the-code

# Ex -> Food Ordering App

# planning

    - For Any Application we have to plan before writing the code.
    - components ----> Header, Body, Footer.

# writing css inside JSX

    - CamelCase (for Two Words)
    - style ={{backgroudColor:'red'}}
       1. first curly bracket is used for piece javascript.
       2. second curly bracket is used for javascript object.

# Props

    - Props is nothing but properties
    - Props are just normal Arguments of our javascript.(<header test={x}>)
    - Props is an object
    ---There are two Differe ways to use the props----
    1. props.name
    2. {name}  ---> (Destructure on the fly)

# Config Drive UI

# Json Viewer Extension

# How we Show the data inside Jsx

- using Map and keys returning the component
- resuable the components

# Optimize the code

- Props Destructuring
- List and Keys (uniquie ID"S)
  ---with keys----
- 1. React Re-Renders only Those items that have changed-> New, removed , update.
- 2. Efficiently works.

---without keys----

- 1. React may re-render the entire list to manage changes.
- 2. Less Efficient.

-- key as Index---- - if use index as key--> React to Misidentify Which items have changed . - leading to unexpected behaviour - unNecessary Re-Renders.

# ------Fifth ----Let's- Get Hooked

# Folder Structure;

- Make our folder structure good with human readable and understandable;
- .js [or] .jsx are same(file names)
- Hardcoded Strings, Hardcoded Data ---> don't use inside the component directly;
  1.- the common practices is used to keep in seperate files
  2.- some peoples calls like constant.js, config.js, utlis.js and common.js
  3.- variable name's should capital with Snake_Case

# import and export

- Export then import files of the components
- On Import -> .js, .jsx , empty("") not a problem----> because react will treat it JS file By Itself;
  -> example: import file from '../somefilename.js'
- There two types of exports
  1.  Default Export
  2.  Named Export
      - 1. Default Export:-
      ***
           - when we need only one single component or single variable---> we can use default export;
      -2. Named Export:-
      ***
           - when we need Multiple Components or Multiple Variables ---> we can use Named Export;
- It standard parctice to keep content(component) <=100 lines (not more than 100 lines)
- Default Export and Named Export ---> we Can write both at a time and also import like {destructure}, normal import;

# Event Handlers

- we can the event handlers inside the tags it should be camelCase;
  EX:- onClick, onMouseHover, onDoubleClick

# UIlayer & Data Layer Updating with Sync

    # React Things
     1. Fast DOM Manipulation
     2. Efficient DOM Manipulation
     3. Virtual DOM Manipulation
     4. Diff , Reconcilzation Algorithms

# Normal vs HOOks

# Normal

    - The Normal JS variable will Update The Data-Layer But not the UI-Layer

# HOOKS

    - Hooks are Normal JS Functions
    - Now We will The UseState;

# UseState()

- Whenever State Variable Update The React will Re-renders the Component.
- Removes the Component and Updates Properly.
- This useState Super Power Variable. It will update the Data-Layer along with UI-Layer ->In Sync;
- React is good at DOM Manipulation.

# React Work Behind The Scences--->?

    # It's All About Reconciliation Process
    # 1. What is Reconciliation ?
    # - Reconciliation is the process React uses to update the real DOM based on the Changes in Virtual DOM.
    # - and also it involves comparing new VDOM and Previous VDOM and then applying the necessary changes to the actual DOM.

# How Reconciliation Works ?

        # - 1. Initial Render
        # - 2. States or Props Changes
        # - 3. Diffing Alogrithm
        # - 4. Update the Real DOM

# -1. Initial Render :-

        # -------------
        # - When a React component is first rendered , React Creates a Virtual DOM Tree representing the component's Structure.
        # - This Virual DOM Tree is then used to generate the  Actual DOM that is displaying on the Screen.

# -2. States or Props Changes

        # ------------
        # - When a component's state or props change, React needs to update the UI to reflect these changes.
        # - React creates a new Virtual DOM tree based on the updated state or props.

# -3. Diffing Algorithm

        # ------------
        # - what is Diffing Alg ?
        # ------------
        # -Diffing algo is the core of the reconciliation process.
        # -It compares the new virtual DOM with Previous Vitrual DOM to Identiy the differences
    # How It Works ?
        # ------------
        # -1. tree diffing ------> to find the differences between compares the root nodes of the new VDOM and old VDOM trees changes.
        # -2. component diffing ---->  to find the difference between components--> react compares the previous and new States or Props changes.

# -4 Update the Real DOM ?

       # -------------
       # -1. Based on the comparison. React identifies what has changed in the virtual DOM (e.g., added, removed, or updated elements).
       # -2. React Then updates the actual DOM to Reflect these changes.

# What is Virtual DOM ?

        # - Virtual DOM is Light Weight Copy of the Real DOM (Actual DOM) or Representational
        # - When a React component is first rendered , React Creates a Virtual DOM Tree.
        # - Whenever State or Props changes it will create a New Virtual DOM.
        # - Now OLD VDOM AND NEW VDOM is comparing and identified the changes is called "DIFFING ALGORITHM".
        # - Once the VDOM Comparision are completed only that changes particular changes can update in the REAL DOM this process is known as "Reconciliation"
        # In Normal Words Virtual DOM is not thing React.createElement OBJECT;

# -----Six ----Exploring-The-World...

# 1. Monolith Archieture.

# 2. Micro Services.

        # -------> 1. MONO - All Together and do the project like API, UI , AUTH, DB, NOTIFICATION
        # -------> 2. MICRO - Seperation of consense and single reponsibility principle
        # ------> These are all servers can be together is called 'micro-services'
        # -------> They have languages for all like UI- React, BE-Java
        # -----> They Have ports UI-3000, BE-5000, SMS -300

# HOW WEB API'S FETCH THE DATA FROM BACKEND

        # ----------------------------------------------
        # - They are Two Approaches
        # - 1. loads --> API --> Render
        # - 2. loads --> Render ---> API ---> Render
        # The second loads > Render > API > Render this becomes better UX.

# When UseEffect Works

     # -----------------------------
     # Component ---> outside ---> HTML ---> UseEffect
     # UseEffect syntax useEffect(()=>{},[] ) Callback Function , Dependencies

# Cors Extension in browser (using for local api works);

# SHIMMER UI

     # -----------------------------
     # SHIMMER UI is nothing skeleton loading
     # Conditional Rendering ---> condition ? True: False

# const[x,setX]= useState();

# HOW it was chnge it is const variable ?

    # ----------------------------------------
    # Because when setX is called the OLD X is Changed to NEW X Variable.
    # Because when setX is Called the whole components get Render then OLD VDOM and NEW VDOM Will compare >
    # and update VDOM it will takes and update that new variable 'X' (Only Necessary Things get update)
    # Whenever State Variable Update , React Triggers a Reconciliation Cycle (renders the component)

# -----Seventh ----Find The Path...

# How The USeEffect Works
     - 1 UseEffect(()=>{})
     - 2 useEffect(()=>{},[])
     - 3 useEffect(()=>{},[state])
        -1.if no dependency array => useEffect is called on every render;
        -2.if the dependency array is empty[] => useEffect is called on initial render(calls  first render);
        -3.if the dependency array is something[state] => useEffect is called whenever state updates;

# useState Using Rules
      - 1 It must be inside of our component.
      - 2 It Must be use top level
      - 3. Never use inside conditions, loops, any other functions...

# How do we use Routing inside React.
# There are Two types of Routing.
      -1. client side routing ---> ex:- React-Router-Dom.
      -2. server side routing ---> ex:- Server Side routing render single seperate html

# Inside React we are using client side routing:-
     # steps For Routing;-
     1.npm i react-router-dom
     2.imports ---> createBrowserRouter,RouterProvider,useRouteError,useParams,Link
     3.path, element,errorElement
     4.childrenRoutes---> path,element,errorElement.
     5.Outlet---> It will Replaces the Children Routes.
     6. Dynamic Routes---> ex:- /name/:id
     7. useParams---> It is used for get the props from url "/name/:id" id it is the props;
     7. useRouteError--> if we enter the wrong url (or)  Any Route Error the useRouteError Helps to show what message we need to show on browser(using component);
     8.Anchor-Tag vs Link-Tag
       -1. anchor-tag:- when you click on hyperlink it will reload the page;
       -2. link-tag- when you click on hyperlink it will render only the component(not whole Page Reload)

# -----EightH ----Let's Get Classy....
 -In these We are using Class based components
 -class component
   - 1. class keyword
   - 2. class name
   - 3. extends 
   - 4. React.component
   - 5. constructor
   - 6. super keyword
   - 7. render  and return
   - 8. component did mount
   - 9. component did update.
   - 10. component will unmount.
   - 11. and other own methods [or] functions.
   - 12. what is instance.

  - 1. "class" is a keyword  and it defines a blueprint for creating objects.
  - 2. "class name"  - The identifier given to a class 
  - 3. "Extends" - To Inherit the features of another class.
  - 4. "React.component" - To Inherit the features of react (providing lifecycle methods and state management)
  - 5. "constructor" - A Special Method used to initalize an object's properties. when an instance of the class is created.
  - 6. "super Keyword" - Used inside a constructor to call the constructor of the parent class, ensuring the child class inherits properties and methods.
  - 7. Render - A method that returns JSX
  - 8. componentDidMount: A lifecycle method called after a component is mounted to the DOM, often used for initializing data.
  - 9. componentDidUpdate: A lifecycle method called after a component updates, allowing for actions based on changes in props or state.
  - 10. componentWillUnmount: A lifecycle method called right before a component is removed from the DOM, typically used for cleanup tasks.
  - 12. what is instance:-
        - An instance is a specific object created using a class.
        - Each instance has it's own set of props and methods based on the class.
        - Each one is Unique.
  - How can  we use the props inside class?
    -A. using super keyword - super(props);
  -How to we use the states in class based components?
    -A. this.state={
          count:1,
          count:2, 
      }
    -B. this.state.count
    -c. this is Refer to current instance of the current class and allow "properties(state & props) and methods"
 - How can we update the state inside Class based components ?
    -A. this.setState({count:this.state.count+1})
# Website -class based component(figure)
  - website- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
# Phases in Components
  - Render phase and commit phase
     - Render Phase - constructor and render
     - commit Phase - react dom and componentdid mount etc..,
# how the Class Components Works
 - Constructor -> render and [returns jsx] -> componentDiDMount -> this.setState() calls then "ComponentDidUpdate()" calls  ->  clean up tasks "ComponentWillUnmount" will calls
# parent and child relation works in class based component
  - Now we will check  how it works in class based components.
  - suppose there is parent component inside child component like that
   ex - 1.first component constructor
      - 2. first component render
      - 3. second component constructor
      - 4. second component render
      - 5. third component constructor
      - 6. third component render
      - 7. second component ComponentDidMount();[child1]
      - 8. third component ComponentDidMount(); [child2]
      - 9. First component ComoponentDidMount();[parent]
  -Dom Updated in single batch [DidMount]

# life cycle methods Difference between class based components and functional based components
   - componentDidMount() ===> useEffect(()=>{},[])  For every initial render
   - componentDidUpdate(prevProps,PrevState){
      if(this.state.count !== PrevState){

      }
      if(this.state.count2 !== PrevState)
      } 
      ===> useEffect(()=>{},[count,count2]) 
    - componentWillUnmount() ===> useEffect(()=>
                                            { 
                                              return()=>cleauptase
                                            }
                                          )
                                          
# -----nineTH ----Optimizing Your APP....       
1.custom Hooks
2.Single Responsbility Principle
  i.Resuable
  ii.maintable
  iii.testable
custom Hooks Tips
1. what is the contract
2. what is the input 
3. what is the output 

# Custom Hooks
In custom Hooks 
-"use" is not mandratory in Custom Hooks but using "use" is good practice

# Bundlers
- for Large scale Applications to create small bundlers is known as chunking, codespliting.
-Large Scale Applications
1. chunking
2. code spliting
3. dynamic bundling
4. lazy load 
5. on demand loading 

-Smaller Scale Applications
1. One Single File is Enough.

-Lazy Loading
1. import from react(lazy and suspense)
2. const test = lazy(()=>import('../path'))
3. suspense---> it is a component.
4. fallback --> it is using inside the suspense when the component rendering time it's loads the html...

conclusion:
- Actually we are using normal Hooks But when we want the best resuable logic to create "custom Hooks"
- Bundling the js files if small Application you can use the normal file(single file of bundle),
  if the Application is Large the you have to code split and create the bundles in chunks(pieces)
- if you use the lazy loading the whenever triggers the componet at the time only it will render other can't load this is the use of lazy loading.