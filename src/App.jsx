import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

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

There's also [links](https://www.markdownguide.org/), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1024px-Markdown-mark.svg.png)
`;

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  return (
    <div className="background">
      <h1 className="title">Markdown Previewer</h1>
      <div className="boxes-container">
        <textarea
          name="editor"
          id="editor"
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
        />
        <div id="preview">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
export default App;
