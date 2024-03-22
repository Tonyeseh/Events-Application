import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import logo from '../img/logo.png';

function RegisterPage () {
    const navigate = useNavigate()
    const [firstName, setFname] = useState('');
    const [lastName, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await fetch('http://localhost:5000/auth/register', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password
                })
            })
            if (!result.ok) {
                setMessage('Email or Password is wrong!')
            }
            else {
            const data = await result.json()
            console.log(data)
            navigate('/')
            }

        } catch (error) {
            setMessage('Network Error!')
        }
    }

    return (
        <div className="md:w-full md:h-full bg-[#2B293D] flex">
            <div className="w-2/5">
                <Link to="/"><img className="w-40 mt-3 ml-3" src={logo} alt="" /></Link>
                <div className="text-white font-extrabold text-3xl flex flex-col pr-28 pl-12 tracking-wide md:py-32 leading-10">
                    <h1>
                        Discover tailored events.
                    </h1>
                    <h1>
                        Sign up for personalized recommendations today!
                    </h1>
                </div>
            </div>
            <div className="bg-white rounded-l-3xl px-32 py-20 w-3/5">
                <h1 className="lg:text-3xl md:text-xl font-bold">
                    Create Account
                </h1>
                <form className="flex flex-col md:mt-12 mt-5" onSubmit={handleSubmit}>
                    {errorMessage && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-5 rounded relative" role="alert">
                        <strong className="font-bold">Holy smokes!</strong>
                        <span className="block sm:inline"> {errorMessage}</span>
                        <span onClick={() => setMessage('')} className="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                        </span>
                    </div>}
                    <label className="text-[#838383]" htmlFor="fName">First Name</label>
                    <input id="fName" className="p-2.5 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm" type="text" placeholder="Enter your First Name" value={firstName} onChange={(e) => setFname(e.target.value)} />
                    <label className="text-[#838383]" htmlFor="lName">Last Name</label>
                    <input id="lName" className="p-2.5 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm" type="text" placeholder="Enter your Last Name" value={lastName} onChange={(e) => setLname(e.target.value)} />
                    <label className="text-[#838383]" htmlFor="email">Email</label>
                    <input id="password" className="p-2.5 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm" type="email" placeholder="Enter your Email-Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className="text-[#838383]" htmlFor="password">Password</label>
                    <input id="password" className="p-2.5 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm" type="password" placeholder="Enter your Password" minLength={7} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Button action={`Create Account`} type={`submit`} />
                </form>
                <p className="text-[#838383] mt-5 text-sm">Already have an account? <Link className="text-[#5f5f5f]" to='/login'>Log In</Link></p>
            </div>
        </div>
    )
}

export default RegisterPage
