export function Details() {
  return (
    <>
      <div className="flex flex-col text-white">
        <h1 className="text-3xl font-semibold text-white">
          Welcome to code Editor
        </h1>
        <div className="flex flex-col p-5">
        <h3 className="text-xl font-bold ">
        Problem Statement:
        </h3>
        <div>
        Design a program to calculate the sum of two random numbers generated within a specified range. The program should take user input for the range and generate two random numbers within that range. Afterward, it should calculate and display the sum of these two numbers.
        </div>

        <h3 className="text-xl  font-bold mt-4">
        Scenario:
        </h3>
        <div>
        Imagine a scenario where a user wants to quickly practice addition by working with random numbers. They need a simple tool that generates two random numbers based on a user-defined range and calculates their sum. This tool will be helpful for students or anyone looking to improve their mental math skills through random practice scenarios.
        </div>
        </div>
      </div>
    </>
  );
}
