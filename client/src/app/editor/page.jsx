"use client";
import { Details } from "@/components/Details"
import { CodeEditor } from "@/components/Editor"
import { EditorBtns } from "@/components/EditorBtns"
import { EditorHeader } from "@/components/EditorTop"
import { Video } from "@/components/VideoChat"
import { RecoilRoot } from "recoil";

const { InputOutputs } = require("@/components/CodeOutput")

export default function(){
    return <>
    <RecoilRoot>

    <div className="flex flex-col p-3 bg-zinc-900 h-screen justify-center">
        <div className="flex w-full h-[95vh] justify-center gap-1">
            <div className="flex flex-col w-full h-full bg-zinc-950 rounded-lg p-2 gap-2">
                <div className="flex h-2/3 w-full rounded-md p-2 bg-zinc-900">
                    <Details/>
                </div>
                <div className="flex h-1/3 w-full rounded-md p-2 bg-zinc-900">
                    <Video/>
                </div>
            </div>
            <div className="flex flex-col w-full h-full bg-zinc-950 rounded-lg p-3">
                <CodeEditor/>
                <EditorBtns/>
                <InputOutputs/>
            </div>
        </div>
    </div>
    </RecoilRoot>
    </>
}