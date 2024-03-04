import { Details } from "@/components/Details"
import { CodeEditor } from "@/components/Editor"
import { EditorBtns } from "@/components/EditorBtns"
import { EditorHeader } from "@/components/EditorTop"
import { Video } from "@/components/VideoChat"

const { InputOutputs } = require("@/components/CodeOutput")

export default function(){
    return <>
    <div className="flex flex-col p-2 bg-zinc-900">
        <EditorHeader/>
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
    </>
}