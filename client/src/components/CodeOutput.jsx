"use client";

import { Tabs, Tab } from "./Tabs";

export const InputOutputs = () => {
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
            <div className="w-full text-white font-bold">4 5 7</div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
