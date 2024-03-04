"use client";

import { codeIp, codeOp } from "@/atom/codeOutputAtom";
import { Tabs, Tab } from "./Tabs";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const InputOutputs = () => {
  const out = useRecoilValue(codeOp);
  const input = useSetRecoilState(codeIp);
  return (
    <div>
      <Tabs>
        <Tab label="Input">
          <div className="">
            <textarea
              name=""
              id=""
              rows={8}
              onChange={(e)=>{
                input(e.target.value);
              }}
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
