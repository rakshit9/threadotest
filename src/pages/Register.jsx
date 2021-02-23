import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";

export default function Register() {
  return (
    <div
      className="bg-yellow-400 h-full md:h-screen bg-opacity-75 py-24 2xl:h-screen
            md:grid grid-cols-2"
    >
      <div></div>
      <div
        className="bg-white rounded-md shadow-lg
                items-center  py-7 px-6 mx-6
                md:w-9/12 lg:w-7/12
                md:py-9"
      >
        <div className="antialiased sm:subpixel-antialiased md:antialiased">
          <div className="text-4xl font-semibold text-black mb-3">
            Sign UP <span>&amp; Create You Community</span>
          </div>
          <p className="antialiased text-gray-400 text-base font-medium">
            If you have already signup, you can{" "}
            <Link to="/login" className="text-blue-600 ">
              Login.
            </Link>
          </p>
        </div>
        <div className="pt-5 space-y-5" id="create_">
          <hr className="border-1"></hr>
          <input
            className="border  border-transparent outline-none p-2 text-lg
                    rounded-md bg-gray-200 opacity-75 w-full
                    focus:outline-none focus:ring-2 focus:shadow-md
                  focus:bg-white focus:ring-gray-300 focus:border-transparent"
            placeholder="Email"
            type="text"
          />
          <input
            className="border  border-transparent outline-none p-2 text-lg
                    rounded-md bg-gray-200 opacity-75 w-full
                    focus:outline-none focus:ring-2 focus:shadow-md
                  focus:bg-white focus:ring-gray-300 focus:border-transparent"
            placeholder="Password"
            type="password"
          />
          <input
            className="border  border-transparent outline-none p-2 text-lg
                    rounded-md bg-gray-200 opacity-75 w-full
                    focus:outline-none focus:ring-2 focus:shadow-md
                  focus:bg-white focus:ring-gray-300 focus:border-transparent"
            placeholder="Confirm-Password"
            type="password"
          />
          <button
            className="border-none transition duration-150 ease-in-out bg-gray-700 
                    text-white p-3 rounded-md text-lg focus:outline-none
                    font-semibold antialiased focus:ring-4 focus:ring-gray-500 
                    focus:ring-opacity-50 w-full opacity-90"
          >
            <Link to="/login" className="flex">
              Create You Account
              <svg
                xmlns="../assets/icon/right_arrow.svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-white-500 stroke-2 ml-3 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </button>
        </div>

        <div className="space-y-5" id="create_third">
          <div className="mt-9 flex">
            <hr className="flex-1"></hr>
            <p className="text-center font-semibold text-gray-400 -mt-2.5 mx-3">
              OR
            </p>
            <hr className="flex-1"></hr>
          </div>
          <button
            className="border-none transition duration-150 ease-in-out bg-gray-700 
                    text-white p-3 rounded-md text-lg focus:outline-none
                    font-semibold antialiased focus:ring-4 focus:ring-gray-500 
                    focus:ring-opacity-50 w-full opacity-90"
          >
            <Link to="/login" className="flex">
              <FaIcons.FaTwitter className="text-gray-500 text-lg mr-2 mt-1" />
              Login with Twitter
            </Link>
          </button>

          <button
            className="border-none transition duration-150 ease-in-out bg-gray-700 
                    text-white p-3 rounded-md text-lg focus:outline-none
                    font-semibold antialiased focus:ring-4 focus:ring-gray-500 
                    focus:ring-opacity-50 w-full opacity-90 flex"
          >
            <Link to="/login" className="flex">
              <ImIcons.ImGoogle className="text-gray-500 text-lg mr-2 mt-1" />
              Login with Google
            </Link>
          </button>
          <p className="antialiased text-gray-400 text-base font-medium">
            By signup,you agree with the{" "}
            <Link to="/login" className="text-blue-600 ">
              Terms and Conditions{" "}
            </Link>
            and{" "}
            <Link to="/login" className="text-blue-600 ">
              Rules.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
