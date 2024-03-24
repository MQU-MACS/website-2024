"use client";

import React from "react";
import Animation from "@/components/ScrollAnimation";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xayrdvpj");

  return (
    <div className="relative overflow-hidden mx-auto">
      <div className="relative px-8 z-10">
        <Animation animationDirection="bottom-to-top">
          <div className="mb-8 py-8 lg:py-8 px-4 rounded-3xl mx-auto max-w-screen-md bg-primary-black border-2 ">
            <h2 className="text-white mb-4 text-4xl italic font-bold text-center">
              Contact <span className="text-primary-blue">Us</span>
            </h2>
            <div className="px-2 md:px-8">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="block p-3 w-full text-sm text-primary-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="Enter your name"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block p-3 w-full text-sm text-primary-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="name@MACS.com"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-white "
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="block p-3 w-full text-sm text-primary-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="Leave a message"
                    rows={8}
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <div className="mx-auto text-center">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-fit center bg-transparent hover:bg-black hover:text-white py-2 px-7 border border-white rounded-full italic"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {state.succeeded && (
                <Animation animationDirection="bottom-to-top">
                  <div className="text-center border-2 border-green-500 rounded-2xl p-4 mt-8 bg-green-900 text-white">
                    <p className="text-green-100">
                      Thank you for submitting the form!
                    </p>
                  </div>
                </Animation>
              )}
            </div>
          </div>
        </Animation>
        <p className="text-center w-fit mx-auto rounded-full mb-1">
          © 2023 Macquarie Association of Computing Students
        </p>
        <p className="text-center mb-4 w-fit mx-auto rounded-full text-sm text-slate-200">
          Made by:{" "}
          <a
            href="https://www.linkedin.com/in/quann"
            className="text-slate-400 hover:text-primary-blue"
          >
            Quan Nguyen (Peter)
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/noelgens"
            className="text-slate-400 hover:text-primary-blue"
          >
            {" "}
            Noel Gens{" "}
          </a>
        </p>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="285"
        height="653"
        viewBox="0 0 285 653"
        className="absolute top-1/3 sm:visible invisible"
        fill="none"
      >
        <path
          d="M284.5 652.501L-0.499894 652.501L-0.5 0L284.5 652.501Z"
          fill="#95C5F1"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="324"
        height="149"
        viewBox="0 0 324 149"
        className="absolute right-0 bottom-0 sm:visible invisible"
        fill="none"
      >
        <path
          d="M324 148.5L0.499858 148.501L324 0.500223L324 148.5Z"
          fill="#95C5F1"
        />
      </svg>
    </div>
  );
}