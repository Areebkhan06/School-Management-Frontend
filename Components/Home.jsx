"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head"; // For SEO tags

const Home = () => {
  const [state, setState] = useState("login");
  const router = useRouter();

  // input state
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <>
      {/* ✅ SEO tags for this page */}
      <Head>
        <title>{state === "login" ? "Login | Student Portal" : "Register | Student Portal"}</title>
        <meta
          name="description"
          content={
            state === "login"
              ? "Login to your student account to manage attendance, view results, and access dashboard features."
              : "Register for a new student account to access attendance management, grades, and student dashboard tools."
          }
        />
        <meta name="keywords" content="student login, register, school portal, dashboard, attendance, education app" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={state === "login" ? "Login | Student Portal" : "Register | Student Portal"} />
        <meta
          property="og:description"
          content={
            state === "login"
              ? "Login securely to access your student dashboard."
              : "Create an account to manage your student information and attendance."
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
      </Head>

      <main className="w-full min-h-screen flex items-center justify-center bg-black p-7">
        <section
          aria-labelledby="auth-heading"
          className="w-full sm:w-[350px] text-center border border-zinc-300/60 dark:border-zinc-700 rounded-2xl px-8 bg-white dark:bg-zinc-900 shadow-md"
        >
          <h1
            id="auth-heading"
            className="text-zinc-900 dark:text-white text-3xl mt-10 font-semibold"
          >
            {state === "login" ? "Login" : "Register"}
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2 pb-6">
            Please {state === "login" ? "sign in" : "sign up"} to continue
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            {state !== "login" && (
              <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <span className="sr-only">Name</span>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
                  name="name"
                  value={data.name}
                  onChange={onChangeHandler}
                  required
                />
              </div>
            )}

            <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <span className="sr-only">Email</span>
              <input
                type="email"
                placeholder="Email id"
                className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
                name="email"
                value={data.email}
                onChange={onChangeHandler}
                required
              />
            </div>

            <div className="flex items-center mt-4 w-full bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <span className="sr-only">Password</span>
              <input
                type="password"
                placeholder="Password"
                className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
                name="password"
                value={data.password}
                onChange={onChangeHandler}
                required
              />
            </div>

            <div className="mt-5 text-left w-full">
              <a
                className="text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
                href="#"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="mt-4 w-full h-11 rounded-full text-white bg-indigo-500 hover:bg-indigo-600 transition-colors"
            >
              {state === "login" ? "Login" : "Create Account"}
            </button>
          </form>

          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-4 mb-10">
            {state === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              type="button"
              className="text-indigo-500 dark:text-indigo-400 hover:underline"
              onClick={() =>
                setState((prev) =>
                  prev === "login" ? "register" : "login"
                )
              }
            >
              {state === "login" ? "Register" : "Login"}
            </button>
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
