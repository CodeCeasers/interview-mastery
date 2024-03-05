import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main
      className={`flex h-screen flex-col items-center justify-between bg-zinc-900`}
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center w-screen h-full">
        <div className="gap-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-6xl mb-10 font-bold text-white">InterviewMastery</h1>
          <div className="flex flex-row justify-between text-white w-full px-10">

            <div className="flex flex-col text-center gap-4 bg-zinc-950 p-6 my-7 rounded-lg">
              <div className=" text-5xl font-bold text-blue-500">For Candidates</div>
              <p className="text-slate-300 text-xl w-2/3 self-center">
                Showcase your skills and get hired by top companies
              </p>
            </div>
            <div className="flex flex-col text-center gap-4 bg-zinc-950 p-6 my-7 rounded-lg">
              <div className=" text-5xl font-bold text-blue-500">For Interviewers</div>
              <p className="text-slate-300 w-2/3 text-xl self-center">
              Get the best out of your candidates with our platform powered by
                AI
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              href="/signup"
              className="bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="border border-white text-white py-2 px-4 rounded-md"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
