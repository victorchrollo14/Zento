import React from "react";

export const Form = () => {
  return (
    <form action="" className=" mt-5 py-px w-full max-w-[458px]">
      <input
        type="email"
        placeholder="enter your email"
        className="placeholder:text-center text-center text-black font-mont w-full  rounded-full outline-lYellow"
      />{" "}
      <br />
      <button
        type="submit"
        className="text-center font-mont text-black bg-lYellow w-full  h-10 rounded-full mt-2 hover:bg-drkYellow"
      >
        Subscribe
      </button>
    </form>
  );
};
