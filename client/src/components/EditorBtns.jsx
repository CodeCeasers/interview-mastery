"use client"
import { codeAtom } from '@/atom/codeAtom';
import { codeLang } from '@/atom/codeLang';
import { codeOp } from '@/atom/codeOutputAtom';
import React, { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

export function EditorBtns() {
  const code = useRecoilValue(codeAtom);
  const setOp = useSetRecoilState(codeOp);
  return (
    <>
      <div className="w-full flex justify-end items-center mt-4">
        <div className="flex flex-row gap-2">
          <button className="bg-white hover:bg-zinc-400 rounded-md text-black p-2 font-semibold"
          onClick={()=>{
            handleCodeChange(code, setOp);
          }}>
            Run code
          </button>
          <button className="bg-white hover:bg-zinc-400 rounded-md text-black p-2 font-semibold">
            Ask AI
          </button>
          <Lang />
        </div>
      </div>
    </>
  );
}

function Lang() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(codeLang); // Set the default language

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false); // Close the dropdown after selecting a language
  };

  return (
    <>
      <div className="relative">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative"
          type="button"
          onClick={toggleDropdown}
        >
          {selectedLanguage}{' '}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <div
            id="dropdown"
            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute right-0 mt-2 dark:bg-gray-700"
          >
            <ul className="py-2 flex flex-col text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <button className='p-1' onClick={() => selectLanguage('JavaScript')}>JavaScript</button>
              <button className='p-1' onClick={() => selectLanguage('Python')}>Python</button>
              <button className='p-1' onClick={() => selectLanguage('C')}>C</button>
              <button className='p-1' onClick={() => selectLanguage('C++')}>C++</button>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

const handleCodeChange = async (code, setOp) => {
  setOp("");
  try {
    const response = await fetch("http://localhost:4000/api/v1/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: code }),
    });
    const data = await response.json();
    console.log(data);
    setOp(data.msg);
  } catch (error) {
    console.error("Error updating code on the backend:", error.message);
  }
};
