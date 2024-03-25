"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const signupForm = document.getElementById("signupForm");
    const handleSubmit = async (event: Event) => {
      event.preventDefault();
      try {
        const response = await fetch("http://localhost:8080/api/v1/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Registration successful:", data);
        } else {
          console.error("Registration failed:", response.statusText);
        }
      } catch (error) {
        console.error("Registration failed:", error);
      }
    };

    if (signupForm) {
      signupForm.addEventListener("submit", handleSubmit);
    }

    return () => {
      if (signupForm) {
        signupForm.removeEventListener("submit", handleSubmit);
      }
    };
  }, [formData]);

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-6">
          <h2 className="font-bold text-2xl text-[#002D74]">Signup</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            Create an account to get started
          </p>

          <form id="signupForm" className="flex flex-col gap-1">
            <input
              className="p-2 mt-8 rounded-xl border text-gray-800"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              className="p-2 mt-2 rounded-xl border text-gray-800"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              className="p-2 mt-2 rounded-xl border text-gray-800"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              className="p-2 mt-2 rounded-xl border text-gray-800"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="p-2 mt-2 rounded-xl border text-gray-800"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-[#002D74] mt-4 rounded-xl text-white py-2 hover:scale-105 duration-300"
            >
              Register
            </button>
          </form>

          <div className="mt-6 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            <p>
              Already have an account?
              <a href="http://localhost:3000/login"> Login here</a>
            </p>
          </div>
        </div>

        <div className="md:block hidden w-1/2">
          <Image
            src="/login-signup-banner.jpg"
            alt="image"
            width={307}
            height={507}
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
