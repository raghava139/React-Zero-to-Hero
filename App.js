import React, { createElement } from "react";
import ReactDOM from 'react-dom/client';
import  Header from "./src/components/Header";
import Body from "./src/components/Body";
// React CreateElement => Object => Html ELement(render)
// Jsx => React createElement => object => html Element(render)
//the Babel Transpiler Converts the code Jsx to React.createElement 
// the babel is coming from Parcel

const TestElement = React.createElement('div')
console.log(TestElement)
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);