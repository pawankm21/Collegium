import { useRef } from "react";

const UserProfileBig = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const genderRef = useRef();
    const idRef = useRef();
    const collegeRef = useRef();
    const passwordRef = useRef();

    const user = { name: '', email: '', gender: '', password: '', id: '', colllege: '' };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        user.name = nameRef.current.value;
        user.email = emailRef.current.value;
        user.gender = genderRef.current.value;
        user.password = passwordRef.current.value;
        user.id = idRef.current.value;
        user.colllege = collegeRef.current.value;
        console.log(user);
    }

	return (
		<div className="h-auto max-h-screen w-auto bg-red-100 border-8 border-red-100 py-5 px-5 grid grid-cols-3 space-x-8 mx-10">
			<div className="bg-blue-200 grid justify-items-center">
				<div className="mt-10">
					<img
						src="https://www.w3schools.com/howto/img_avatar.png"
						alt="user image"
						className="h-48 w-48 rounded-full"
					/>
				</div>
				<div className="bg-blue-400 mt-4 mb-10 py-2 px-2 rounded-full">
					<button className="">Change picture</button>
				</div>
			</div>
			<div className="bg-blue-200 col-span-2 flex">
				<div className="ml-10 flex content-center">
					<form action="" className="flex flex-col justify-center space-y-4" onSubmit={formSubmitHandler}>
						<div className="">
							<label htmlFor="name" className="">Name: </label>
							<input type="text" name="name" id="name" className="bg-red-100 outline-none" ref={nameRef} />
						</div>
						<div className="">
						    <label htmlFor="email">Email: </label>
						    <input type="email" name="email" id="email" className="bg-red-100 outline-none" ref={emailRef} />
						</div>
						<div className="">
                            <label htmlFor="gender">Gender: </label>
                            <select name="gender" id="gender" className="bg-red-100 outline-none" ref={genderRef}> 
                                <option value="select">Select</option>
                                <option value="male">MALE</option>
                                <option value="female">FEMALE</option>
                                <option value="other">OTHER</option>
                                <option value="sigma-male">SIGMA MALE(only for abhijit)</option>
                            </select>
						    {/* <input type="text" name="gender" id="gender" className="bg-red-100 outline-none" ref={genderRef} /> */}
						</div>
						<div className="">
						    <label htmlFor="password">Password: </label>
						    <input type="password" name="password" id="password" className="bg-red-100 outline-none" ref={passwordRef} />
						</div>
						<div className="">
						    <label htmlFor="college">College: </label>
						    <input type="text" name="college" id="college" className="bg-red-100 outline-none" ref={collegeRef} />
						</div>
						<div className="">
						    <label htmlFor="id">ID: </label>
						    <input type="text" name="id" id="id" className="bg-red-100 outline-none" ref={idRef} />
                        </div>
                        <button className="bg-gray-400 mt-2 w-24 rounded-full">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export default UserProfileBig;
