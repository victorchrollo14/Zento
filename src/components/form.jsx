import React from "react";

export const Form = () => {
  return (
    <form
      action=""
      className=" mt-5 py-px w-full max-w-[458px]"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href =
          "https://chat.whatsapp.com/CBCXsN0bjxYHpjTSFbvQXa";
      }}
    >
      <input
        type="email"
        placeholder="enter your email"
        className="placeholder:text-center text-center text-black font-mont w-full sm:h-14 sm:text-lg rounded-full outline-lYellow"
      />{" "}
      <br />
      <button
        type="submit"
        className="text-center font-mont text-black bg-lYellow w-full  h-10 rounded-full mt-2 sm:h-14 sm:text-lg hover:bg-drkYellow"
      >
        Subscribe
      </button>
    </form>
  );
};
