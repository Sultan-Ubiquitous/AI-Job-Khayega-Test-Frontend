'use client';
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeDisplay = ({ codeData }) => {
  const [formattedCode, setFormattedCode] = useState("");

  useEffect(() => {
    if (codeData) {
      // Extract code inside triple backticks
      const extractedCode = codeData.code.replace(/```jsx\n|\n```/g, "");
      console.log(extractedCode);
      
      setFormattedCode(extractedCode);
    }
  }, [codeData]);

  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-lg">
      <SyntaxHighlighter language="jsx" style={oneDark} showLineNumbers>
        {formattedCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;



