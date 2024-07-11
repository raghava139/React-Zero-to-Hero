import React, { createElement } from "react";
import ReactDOM from 'react-dom/client';


// React CreateElement => Object => Html ELement(render)
const headingText = React.createElement('h1', { id: 'heading-tag' }, 'Hello Raghavendra')

// Jsx => React createElement => object => html Element(render)

//the Babel Transpiler Converts the code Jsx to React.createElement 
// the babel is coming from Parcel
const headingJsx = <h1>Hello Raghavendra</h1>


console.log("headingText", headingText)
console.log("headingJsx", headingJsx)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(headingJsx);