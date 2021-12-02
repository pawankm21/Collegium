/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { LockClosedIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import { Link, Redirect,useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
	const emailRef = useRef("");
	const passwordRef = useRef("");
	const submitHandler = async event => {
		event.preventDefault();
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const response = await fetch("http://localhost:9000/User/login", {
			method: "POST",
			body: JSON.stringify({ email, password }),
			headers: {
				"Content-Type": "application/json",
			},
    });
    if (response.ok) {
      const data = await response.json();
      if (data.user) {
        alert('Log in successfull');
        localStorage.setItem('id', data.user);
        history.replace('/dashboard')
      } else {
        alert('Email or Password incorrect.')
      }
    }

	};
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<img
						className="mx-auto h-12 w-auto"
						src={process.env.PUBLIC_URL + "/images/loud.svg"}
						alt="collegium logo"
					/>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
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
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
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
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
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
								className="font-medium text-gray-600 hover:text-gray-500"
							>
								Forgot your password?
							</Link>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
						>
							<span className="absolute left-0 inset-y-0 flex items-center pl-3">
								<LockClosedIcon
									className="h-5 w-5 text-gray-500 group-hover:text-gray-400"
									aria-hidden="true"
								/>
							</span>
							Sign in
						</button>
					</div>
				</form>
				<p className="mt-2 text-center text-sm text-gray-600">
					Or Not registered?{" "}
					<Link
						to="/register"
						className="font-medium text-gray-600 hover:text-gray-500"
					>
						Register here.
					</Link>
				</p>
			</div>
		</div>
	);
}
