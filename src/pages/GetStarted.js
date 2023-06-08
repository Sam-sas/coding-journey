import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function GetStarted() {
  return (
    <>
      <h1>Test VSC</h1>
      <div>
        <h2>File setup</h2>
        <ol>
          <li>Create a folder on your desktop</li>
          <li>Open that folder in VSC</li>
          <li>Inside the folder write at least 3 files:</li>
          <ul>
            <li>index.html</li>
            <li>style.css</li>
            <li>index.js</li>
          </ul>
          <li>
            Open your terminal just to get used to it being open for later work
          </li>
        </ol>
      </div>
      <div id="files">
        <div>
          <h2>HTML file</h2>
          <p>Write this in the following lines:</p>
          <SyntaxHighlighter language="html5" style={docco} customStyle={{background: 'rgb(248, 248, 255)'}}>
            {`
<html>
  <head>
    <title>Hello world</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Hello World</h1>
    <script src="index.js"></script>
  </body>
</html>
            `}
          </SyntaxHighlighter>
          <p>
            The Head will hold your CSS file since you want to render it before
            the document is up, and you put your script at the bottom of your
            body tag becuase it needs to manipulate the document files.
          </p>
          <p>Save your file</p>
        </div>
        <div>
          <h2>CSS File</h2>
          <p>
            Now that you have a base, write some css code to interact with the
            file, like:
          </p>
          <SyntaxHighlighter language="css" style={docco}>
            {`
background-color: pink;
            `}
          </SyntaxHighlighter>
          <p>Save the file.</p>
        </div>
        <div>
          <h2>Javascript File</h2>
          <p>Now for some easy JS to see if anything happens.</p>
          <SyntaxHighlighter language="javscript" style={docco}>
            {`
console.log('Hello there');
            `}
          </SyntaxHighlighter>
          <p>Save the file</p>
        </div>
      </div>

      <div>
        <h2>Time to run</h2>
        <p>
          Now that you have the files set up, you can run it all and see if it
          works.
        </p>
        <p>
          Press Run in the bar on the top left, and select run without debugging
        </p>
        <p>
          You should see your html and CSS, and if you open up your developer
          tools (F12) and go to Console you'll see hello world.
        </p>
      </div>
      <div>
        <h2>Notes</h2>
        <p>
          Once you get a handle on the basics and move onto a framework like
          react or anything else, you're going to move away from this setup and
          have node running your environments.
        </p>
        <p>
          If you dont want to run everything with html and css, you can just run
          a JavaScript file in your terminal by typing:
        </p>
        <pre>
          <code>node javascriptFileName.js</code>
        </pre>
        <p>From the files location on your computer.</p>
      </div>
    </>
  );
}
