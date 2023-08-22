import React, { useState } from 'react';
import './App.scss';
/* global marked */

marked.setOptions({
  breaks: true,  // Esto te permitirá usar <br> con sólo un salto de línea en lugar de dos
});

const Contenedor = () => {

const [input, setInput] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `);

  const [expandedContainer, setExpandedContainer] = useState('');

  const handleExpandClick = (container) => {
    setExpandedContainer(prevContainer => prevContainer === container ? '' : container);
  };
  
  

  const handleInputChange  = (e) => {
      setInput(e.target.value);
  }

  return (
      <div className='principal'>

        <div className={`contenedor1 contenedor ${expandedContainer === 'previewer' ? 'hidden' : (expandedContainer === 'editor' ? 'fijado' : '')}`}>
          <div className='barra'>
            <p>Editor</p>
            <i className={`fa ${expandedContainer === 'editor' ? 'fa-compress' : 'fa-arrows-alt'}`} 
              onClick={() => handleExpandClick('editor')} />
          </div>
          <div className='textarea'>
            <textarea 
              id="editor"
              value={input}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        <div className={`contenedor2 contenedor ${expandedContainer === 'editor' ? 'hidden' : (expandedContainer === 'previewer' ? 'fijado' : '')}`}>
          <div className='barra'>
            <p>Previewer</p>
            <i className={`fa ${expandedContainer === 'previewer' ? 'fa-compress' : 'fa-arrows-alt'}`} 
              onClick={() => handleExpandClick('previewer')} />
          </div>
          <div
            id="preview"
            dangerouslySetInnerHTML={{__html:marked(input)}}
          ></div>
        </div>

      </div>
    )
}


const App = () => {
 
   return (
     <div className="main">
        <Contenedor />
     </div>
   )
 }

export default App;
