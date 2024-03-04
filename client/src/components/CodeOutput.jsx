"use client";

import { codeOp } from "@/atom/codeOutputAtom";
import { Tabs, Tab } from "./Tabs";
import { useRecoilValue } from "recoil";

export const InputOutputs = () => {
  const out = useRecoilValue(codeOp);
  return (
    <div>
      <Tabs>
        <Tab label="Input">
          <div className="">
            <textarea
              name=""
              id=""
              rows={8}
              className="w-full bg-black rounded-md text-white outline-none p-2"
            ></textarea>
          </div>
        </Tab>
        <Tab label="Output">
          <div className="">
            <div className="w-full text-white font-bold">{out}</div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
