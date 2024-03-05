import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex w-full h-16 justify-between items-center text-white px-6 text-sm">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" width={40} height={40} alt="logo" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href="/signin"
          className="border rounded-md outline-none py-2 px-3"
        >
          Log In
        </Link>
        <Link
          href="/signup"
          className="bg-slate-500 py-2 px-3 rounded-md outline-none hover:bg-slate-400"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
