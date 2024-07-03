{/*
    
<div id='parent'>
    <div id='child'>
        <h1>
            I am an h1 tag
        </h1>
    </div>
</div> 

*/}


// const Heading = React.createElement("h1", { id: 'heading', className: 'new' }, "hello world from react");

// console.log(Heading)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Heading);

// React.createElement creates an object  and Render is taken an object and return the html and put into the DOM
const Heading = React.createElement("div",
    { id: 'parent', className: 'parenclass' },
    [
        React.createElement('div', { id: 'child-1' },
            [React.createElement('h1', {}, 'iam an h13 tag'), React.createElement('h2', {}, ['iam an h23 tag', React.createElement('p', {}, 'paragraph tag')])]
        ), React.createElement('div', { id: 'child-2' },
            [React.createElement('h1', {}, 'iam an h1 tag'), React.createElement('h2', {}, 'iam an h2 tag')]
        )]
);
console.log(Heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading);