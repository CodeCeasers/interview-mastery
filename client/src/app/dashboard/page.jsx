"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
require("dotenv").config();

export default function Dashboard() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isCandidate, setIsCandidate] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("user").role === "candidate") {
      setIsCandidate(true);
      setData(JSON.parse(localStorage.getItem("user")));
      return;
    }
    if (localStorage.getItem("user").role === "interviewer") {
      setIsCandidate(false);
      setData(JSON.parse(localStorage.getItem("user")));
      router.push("/editor");
      return;
    }
    router.push("/signin");
  }, []);


  return (
    <main className="flex flex-row bg-[#12151c] h-screen text-white">
      <div className="flex w-1/2 h-full justify-center items-center border-r">
        <div className="flex flex-col gap-16">
          <h1 className="text-5xl">
            Welcome, {isCandidate ? "Candidate" : "Interviewer"}
          </h1>
          <span className="ml-36 text-5xl">vjfvejkflewbfe</span>
        </div>
      </div>
      <div className="border-r-1 border-white"></div>
      <div className="flex justify-center items-stretch w-1/2 h-full">
        <div className="flex items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl">Interview Link</h1>
            <button className="outline-none w-full py-2 bg-slate-600">
              Link
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
