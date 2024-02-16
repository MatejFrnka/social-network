"use client";
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link'

export default function LoginPage() {
    const [router, setRouter] = useState(null);

    useEffect(() => {
        setRouter(require('next/router'));
    }, []);

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        if (router) {
            const loginForm = document.getElementById('loginForm');
            const handleSubmit = async (event: Event) => {
                event.preventDefault();
                const {username, password} = formData;
                try {
                    const response = await fetch('http://localhost:8080/api/v1/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({username, password}),
                    });

                    if (response.ok) {
                        const tokenResponse = await response.json(); // Parse response body
                        const token = tokenResponse.token; // Assuming the token is returned as 'token' property
                        console.log('Login successful:', tokenResponse);
                        localStorage.setItem('token', token); // Set token to localStorage
                        // Redirect logic can be implemented here using Next.js router
                    } else {
                        console.error('Login failed:', response.statusText);
                    }
                } catch (error) {
                    console.error('Login failed:', error);
                }
            };

            if (loginForm) {
                loginForm.addEventListener('submit', handleSubmit);
            }

            return () => {
                if (loginForm) {
                    loginForm.removeEventListener('submit', handleSubmit);
                }
            };
        }
    }, [formData, router]);


    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                <div className="md:w-1/2 px-8 md:px-6">
                    <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
                    <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>

                    <form id="loginForm" className="flex flex-col gap-1">
                        <input
                            className="p-2 mt-8 rounded-xl border text-gray-800"
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        <div className="relative">
                            <input
                                className="p-2 mt-2 rounded-xl border w-full text-gray-800"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit"
                                className="bg-[#002D74] mt-4 rounded-xl text-white py-2 hover:scale-105 duration-300">Login
                        </button>
                    </form>

                    <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400"/>
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-400"/>
                    </div>

                    <button
                        className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                            {/* Google icon */}
                        </svg>
                        Login with Google
                    </button>

                    <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
                        <a href="#">Forgot your password?</a>
                    </div>

                    <div className="mt-6 text-xs py-4 text-[#002D74]">
                        <p>
                            Don&apos;t have an account?
                            <a href="http://localhost:3000/signup"> Signup here</a>
                        </p>
                    </div>
                </div>


                <div className="md:block hidden w-1/2">
                    <Image src="/login-signup-banner.jpg" alt="image" width={307} height={507}
                           className="rounded-2xl"/>
                </div>
            </div>
        </section>
    );
}
