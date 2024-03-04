"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import Loader from "@/app/loader";

export const CodeEditor = () => {
  const [value, setValue] = useState("");

  const handleCodeChange = async () => {
    try {
      await fetch("http://localhost:4000/api/code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: value }),
      });
    } catch (error) {
      console.error("Error updating code on the backend:", error.message);
    }
  };

  return (
    <div className="flex">
      <Editor
        className="p-1 rounded-xl"
        height="55vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={value}
        onChange={(e) => setValue(e)}
        defaultValue="// Write your code here"
        loading={<Loader />}
      />
    </div>
  );
};
