import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import './markdown.css';
// Add the markdown to imput fields

export default function Markdown() {
  const [markdown, setMarkdown] = React.useState("");

  return (
      <>
          <div className="">

      <textarea  rows={10} cols={50} onChange={(e)=>setMarkdown(e.target.value)} />
      <ReactMarkdown className="markdown-body" children={markdown} remarkPlugins={[remarkGfm]} />
        </div>
    </>
  );
}
