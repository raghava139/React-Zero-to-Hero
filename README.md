#Raghavendra Yallamanda
---First---Inception
1.Html (Hello World)
2.JS (Hello World)
3.React(Hello World)
    i. cdn links ---> 1.development, 2.DOM Operations.
    ii.  React.CreatElement(tagName,{id:'1', className:'2'}, innerHTML [OR] React.CreatElement)--> it return objects,
    iii. ReactDOM.CreatRoot(element),
    iv.  Root.Render()---> its takes an object and return html and put it into the dom
    v.   Nested Elements Using React.CreateElement.
    vi.  for same line multiple write html using [ARRAY]
    vii. Replacing the Div-Root(example) Inside
    viii.Library Vs FrameWork

------second-------Igniting our App

1.package.json is the configure of npm (command- npm init)
2.npm install -D Parcel ( -d is nothing Development Dependency) (here modules also created)
3.There Two Types Dependencies -> dev,Normal(prod) Dependencies
4.In Package.json there are symbols like --> caret(^) and tilde(~) 
    i.caret(^) --> It matches minor and patch versions
    ii.Tilde(~) --> It Matches only patch versions
    example: 2.1.8 --> Here 2 is major , 1 is minor, 8 is the patch
5. package.lock.json --->
    i. there is nested dependencies
    ii. It tracks the Exact versions of every installed pacakge, including 'Nested Dependencies'
6. npx parcel index.html---> it executes the parcel of src html file in local host
7. npm install react and npm install react-dom
8. don't use the cdn link. becuase the cdn link makes network 
    and then you are using that react. so basically local folder there is react code we are using that's better.
9. import the react from nodemodules like ---> import React from 'react'
10. the browser can't understand your script imports that's why we are using script type="module"
11. we don't push the code in github folders like nodemodules,dist etc..., whatever you are installing.
    because the server will automatically or manually their use to run npm install all the stuff of nodemodules
12. browsers list ---> It supports old browser or latest browser (using in package.json)
13. npx parcel build index.html ---> it's for production build

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


---------third---laying the foundation

# npm scripts
- actually we are using  'npx parcel index.html' executing the parcel package with source file of index.html;
- In Package.json file we are using start and build.
    1. so we can add our key,value in scripts. something like this...
    "scripts": {
        "test": "raghavendra",
        "start":"parcel index.html",
        "build":"parcel build index.html"
    },
    2. start is dev to like npx parcel index.html [or] npm start [or]  npm run start
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
 1. babel transforms the jsx to plain javascript
 2. so , in these case <component/> becomes => React.createElement(Component,null).
    when React sees the "component" it recognizes that "component" it is a COMPONENT.
 3. then React call the "component" function which returns a element that describe what should be rendered 
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

-----Fourth ----talk-is-cheap-show-me-the-code
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
 - Props  Destructuring
 - List and Keys (uniquie ID"S)
  ---with keys----
  - 1. React Re-Renders only Those items that have changed-> New, removed , update.
  - 2. Efficiently works.

  ---without keys----
  - 1. React may re-render the entire list to manage changes.
  - 2. Less Efficient.

  -- key as Index----
    - if use index as key--> React to Misidentify Which items have changed .
    - leading to unexpected behaviour
    - unNecessary Re-Renders.