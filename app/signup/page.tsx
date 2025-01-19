"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Link from "next/link";
import Image from "next/image";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

// Validation Schema
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data:", values);
      // Perform signup action here (e.g., API call)
      resetForm();
    },
  });

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <section className="flex md:flex-row flex-col gap-5 w-full my-10">
          <div className="md:w-7/12 w-full rounded-2xl border p-4">
            <div className="w-full py-12 px-10 flex flex-col gap-4">
              <h2 className="text-3xl font-bold">Create Account</h2>
              <p className="text-gray-700 my-3">Sign up now and unlock exclusive access!</p>

              <form className="w-full flex flex-col" onSubmit={formik.handleSubmit}>
                <div className="w-full flex items-center justify-between gap-3 my-3">
                  <div className="sm:w-6/12 w-full">
                    <label htmlFor="firstName" className="text-bold text-xl">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      className={`rounded-lg w-full py-3 px-3 bg-[#F5F5F5] mt-2 ${
                        formik.touched.firstName && formik.errors.firstName
                          ? "border-red-500"
                          : ""
                      } focus:outline-none focus:ring-0`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <p className="text-red-500  text-[12px] pl-2 pt-1">{formik.errors.firstName}</p>
                    )}
                  </div>
                  <div className="sm:w-6/12 w-full">
                    <label htmlFor="lastName" className="text-bold text-xl">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      className={`rounded-lg w-full py-3 px-3 bg-[#F5F5F5] mt-2 ${
                        formik.touched.lastName && formik.errors.lastName
                          ? "border-red-500"
                          : ""
                      } focus:outline-none focus:ring-0`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <p className="text-red-500 text-[12px] pl-2 pt-1">{formik.errors.lastName}</p>
                    )}
                  </div>
                </div>

                <label htmlFor="email" className="text-bold text-xl my-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your Email"
                  className={`rounded-lg py-3 px-3 bg-[#F5F5F5] ${
                    formik.touched.email && formik.errors.email ? "border-red-500" : ""
                  } focus:outline-none focus:ring-0`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-[12px] pl-2 pt-1">{formik.errors.email}</p>
                )}

                <label htmlFor="password" className="text-bold text-xl mt-3 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your Password"
                    className={`rounded-lg py-3 px-3 bg-[#F5F5F5] w-full ${
                      formik.touched.password && formik.errors.password ? "border-red-500" : ""
                    } focus:outline-none focus:ring-0`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500"
                  >
                    {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                  </button>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-[12px] pl-2 pt-1">{formik.errors.password}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#6D5FFD] text-white font-bold my-4 hover:bg-black transition-all"
                >
                  SIGNUP
                </button>
                <p className="font-bold text-center w-full text-sm my-3">
                  Already have an account?{" "}
                  <Link href="/login" className="text-[#6D5FFD] hover:text-black transition-all">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="md:w-5/12 w-full">
            <Image
              src="/login-side-pic.svg"
              className="w-full max-h-[100%]"
              width={100}
              height={100}
              quality={100}
              alt="login"
              priority
            />
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default SignupPage;
