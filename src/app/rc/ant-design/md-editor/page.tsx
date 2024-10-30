"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import type { FC } from "react";

const MarkdownEditor = dynamic(() => import("@ant-design/md-editor").then((mod) => mod.MarkdownEditor), { ssr: false });

const initValue = `
ha

- [github.com/ant-design/md-editor](https://github.com/ant-design/md-editor)

`;

const MdEditorPage: FC = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div
      style={{
        padding: 24,
        border: "1px solid #f0f0f0",
        margin: "20px auto",
        width: "100%",
      }}
    >
      <MarkdownEditor
        width={"100%"}
        height={"auto"}
        readonly
        initValue={initValue}
        onChange={(e, s) => {
          console.log("onChange", s);
        }}
      />
    </div>
  );
};

export default MdEditorPage;
