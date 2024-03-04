"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import Loader from "@/app/loader";
import { useRecoilState, useRecoilValue } from "recoil";
import { codeLang } from "@/atom/codeLang";
import { codeAtom } from "@/atom/codeAtom";

export const CodeEditor = () => {
  const [value, setValue] = useRecoilState(codeAtom);
  const lang = useRecoilValue(codeLang);

  return (
    <div className="flex">
      <Editor
        className="p-1 rounded-xl"
        height="55vh"
        defaultLanguage={lang}
        theme="vs-dark"
        value={value}
        onChange={(e) => setValue(e)}
        defaultValue="// Write your code here"
        loading={<Loader />}
      />
    </div>
  );
};
