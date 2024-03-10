//MarkdownEditorComponent.tsx

import React, { useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

const MarkdownEditorComponent: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const mdParser = new MarkdownIt();

  function handleEditorChange({ html, text }: { html: string; text: string }) {
    setContent(text);
  }

  return (
    <MdEditor
      // style={{ height: "300px" }}
      renderHTML={(text) => mdParser.render(text)}
      onChange={handleEditorChange}
      value={content}
    />
  );
};

export default MarkdownEditorComponent;
