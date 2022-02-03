import { LockClosedIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { ReactComponent as LoudIcon } from "../assets/loud.svg";
import Footer from "../components/Footer";
import useLogin from "../hooks/useLogin";
export default function Login() {
  const { emailRef, passwordRef, submitHandler, isLoading } = useLogin();
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <LoudIcon className="mx-auto h-12 w-auto" alt="collegium logo" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-yellow-400">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={submitHandler}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-900 focus:border-gray-700 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  ref={emailRef}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-gray-900 focus:border-gray-700 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center"></div>

              <div className="text-sm">
                <Link
                  to="#"
                  className="font-medium text-yellow-400 hover:text-yellow-300"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border shadow border-transparent text-sm font-medium rounded-md hover:text-blue-900 hover:bg-yellow-400 bg-gray-900 text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:shadow-2xl ease-in-out duration-300"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 group-hover:text-gray-900 text-yellow-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-2 text-center text-sm text-yellow-400">
            Or Not registered?{" "}
            <Link
              to="/register"
              className="font-medium text-yellow-400 hover:text-yellow-300"
            >
              Register here.
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
