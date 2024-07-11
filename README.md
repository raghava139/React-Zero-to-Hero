#Raghavendra Yallamanda
---First---
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

------second-------

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


---------third-------------------------

