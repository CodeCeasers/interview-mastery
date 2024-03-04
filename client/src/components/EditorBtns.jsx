export function EditorBtns() {
  return (
    <>
      <div className="w-full flex justify-end items-center mt-4">
        <div className="flex flex-row gap-2">
          <button className="bg-white hover:bg-zinc-400 rounded-md  text-black p-2 font-semibold">
            Run code
          </button>
          <button className="bg-white hover:bg-zinc-400 rounded-md  text-black p-2 font-semibold">
            Ask AI
          </button>
        </div>
      </div>
    </>
  );
}
