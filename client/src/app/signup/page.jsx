"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Toaster, toast } from "sonner";
require("dotenv").config();

export default function SignUp() {
  const router = useRouter();
  const [isCandidate, setCandidate] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: `${isCandidate ? "candidate" : "interviewer"}`,
  });
  const [interviewStyle, setInterviewStyle] = useState(true);
  const [candidateStyle, setCandidateStyle] = useState(false);
  const [focus, setFocus] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const toggleCandidate = (isCandid) => () => {
    setCandidate(isCandid);
    isCandid ? setCandidateStyle(false) : setCandidateStyle(true);
    isCandid ? setInterviewStyle(true) : setInterviewStyle(false);
  };

  //   useEffect(() => {
  //     const handleStorageChange = () => {
  //       const storedTheme = localStorage.getItem("theme");
  //       setTheme(storedTheme === "true");
  //     };

  //     // Check if window is defined to ensure it's executed on the client side
  //     if (typeof window !== "undefined") {
  //       // Attach event listener for changes in localStorage
  //       window.addEventListener("storage", handleStorageChange);

  //       // Initial setup
  //       handleStorageChange();

  //       // Clean up the event listener when the component unmounts
  //       return () => {
  //         window.removeEventListener("storage", handleStorageChange);
  //       };
  //     }
  //   }, []); // Empty dependency array as it runs once on mount

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!form.email || !form.password || !form.firstName || !form.lastName) {
        toast.warning("Please fill in all fields");
        return;
      }

      console.log(form);

      const res = await fetch(`http://localhost:400/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          name: `${form.firstName} ${form.lastName}`,
          password: form.password,
          role: form.role,
        }),
      });

      const data = await res.json();

      if (data.token) {
        toast.success("Logged in successfully");
        const user = {
          token: data.token,
          id: data.id,
          email: form.email,
          name: `${form.firstName} ${form.lastName}`,
        };

        if (localStorage.getItem("candidate")) {
          localStorage.removeItem("candidate");
        }
        if (localStorage.getItem("interviewer")) {
          localStorage.removeItem("interviewer");
        }

        localStorage.setItem(
          `${form.role == "candidate" ? "candidate" : "interviewer"}`,
          JSON.stringify(user)
        );

        setForm({ email: "", password: "", firstName: "", lastName: "" });

        router.push("/");
      } else {
        toast.error(data.msg);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-dvh w-dvw bg-[#12151c]">
      <h1 className=" text-center mb-4 text-[2rem] text-white">Sign Up</h1>
      <div className="w-[650px] shadow-[0px_20px_50px_0px_rgba(0,0,0,0.25)] pb-[50px] rounded-[15px] bg-slate-600 text-white">
        <div className="flex flex-row w-full h-14 mb-12 cursor-pointer">
          <div
            className={`flex justify-center items-center w-2/4 rounded-tl-[15px] ${
              candidateStyle
                ? `bg-[#1b222c] border-b-2 border-transparent`
                : `bg-none border-b-2 border-b-white`
            }`}
            onClick={toggleCandidate(true)}
          >
            <span>Candidate</span>
          </div>
          <div
            className={`flex justify-center items-center w-2/4 rounded-tr-[15px]  ${
              interviewStyle
                ? `bg-[#1b222c] border-b-2 border-transparent`
                : `bg-none border-b-2 border-b-white`
            }`}
            onClick={toggleCandidate(false)}
          >
            <span>Interviewer</span>
          </div>
        </div>
        <form className="flex flex-col mb-8 px-[50px]">
          <div className="flex flex-row justify-between">
            <label
              className={`flex flex-col gap-[0.5em] mb-[2em] ${
                focus.firstName ? "underline" : ""
              }`}
            >
              <div className="text-[0.8em]">FIRST NAME</div>
              <input
                className="text-[1em] border px-[15px] py-2.5 rounded-[5px] border-solid border-[#ddd] text-black outline-none"
                type="text"
                name="firstName"
                required
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                onFocus={() => setFocus({ ...focus, firstName: true })}
                onBlur={() => setFocus({ ...focus, firstName: false })}
                value={form.firstName}
              />
            </label>
            <label
              className={`flex flex-col gap-[0.5em] mb-[2em] ${
                focus.lastName ? "underline" : ""
              }`}
            >
              <div className="text-[0.8em]">LAST NAME</div>
              <input
                className="text-[1em] border px-[15px] py-2.5 rounded-[5px] border-solid border-[#ddd] text-black outline-none"
                type="text"
                name="lastName"
                required
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                onFocus={() => setFocus({ ...focus, lastName: true })}
                onBlur={() => setFocus({ ...focus, lastName: false })}
                value={form.lastName}
              />
            </label>
          </div>
          <label
            className={`flex flex-col gap-[0.5em] mb-[2em] ${
              focus.email ? "underline" : ""
            }`}
          >
            <div className="text-[0.8em]">EMAIL ADDRESS</div>
            <input
              className="text-[1em] border px-[15px] py-2.5 rounded-[5px] border-solid border-[#ddd] text-black outline-none"
              type="email"
              name="email"
              required
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onFocus={() => setFocus({ ...focus, email: true })}
              onBlur={() => setFocus({ ...focus, email: false })}
              value={form.email}
            />
          </label>
          <label
            className={`flex flex-col gap-[0.5em] mb-[2em] ${
              focus.password ? "underline" : ""
            }`}
          >
            <div className="text-[0.8em]">PASSWORD</div>
            <input
              className="text-[1em] border px-[15px] py-2.5 rounded-[5px] border-solid border-[#ddd] text-black outline-none"
              type="password"
              name="password"
              required
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              onFocus={() => setFocus({ ...focus, password: true })}
              onBlur={() => setFocus({ ...focus, password: false })}
              value={form.password}
            />
          </label>
          <input
            className="text-[19px] text-white cursor-pointer mt-2.5 p-2.5 rounded-[5px] border-[none] bg-slate-950 font-bold"
            type="submit"
            value="Sign Up"
            onClick={handleSubmit}
          />
        </form>
        <div className="flex flex-row justify-between px-[50px]">
          <div>Already have an account?</div>
          <div className=" underline font-semibold">
            <Link href="/login">Login</Link>
          </div>
        </div>
      </div>
      <Toaster theme="light" position="bottom-left" />
    </div>
  );
}
