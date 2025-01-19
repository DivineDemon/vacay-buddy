"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Link from "next/link";
import Image from "next/image";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data:", values);
      // Perform login action here (e.g., API call)

      // Reset the form
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
              <h2 className="text-3xl font-bold">Get Started Now</h2>
              <p className="text-gray-700 my-3">
                Please enter your information to access your account
              </p>

              <div className="flex gap-3 justify-between sm:flex-row flex-col">
                <div className="md:w-6/12 w-full">
                  <Link href="">
                    <div className="border text-center flex justify-center rounded-lg py-3 my-2">
                      <Image
                        src="/google-btn.svg"
                        width={100}
                        height={100}
                        quality={100}
                        alt="google"
                        priority
                      />
                    </div>
                  </Link>
                </div>
                <div className=" md:w-6/12 w-full">
                  <Link href="">
                    <div className="border flex justify-center rounded-lg py-3 my-2">
                      <Image
                        src="/apple-btn.svg"
                        width={90}
                        height={100}
                        quality={100}
                        alt="apple"
                        priority
                      />
                    </div>
                  </Link>
                </div>
              </div>

              <div className="flex sm:flex-row flex-col justify-between text-center items-center">
                <hr className="bg-gray-400 w-full h-[2px]" />
                <span className="text-xsm text-gray-400 w-full my-2">
                  Or Continue With
                </span>
                <hr className="bg-gray-400 w-full h-[2px]" />
              </div>

              {/* Formik Form */}
              <form
                className="w-full flex flex-col"
                onSubmit={formik.handleSubmit}
              >
                <label htmlFor="email" className="text-bold text-xl my-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your Email"
                  className={`rounded-lg py-3 px-3 bg-[#F5F5F5] ${formik.touched.email && formik.errors.email ? "border-red-500" : ""
                    } focus:outline-none focus:ring-0 active:outline-none`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />

                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-[12px] pl-2 pt-1">{formik.errors.email}</div>
                ) : null}

                <label htmlFor="password" className="text-bold text-xl mt-3 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your Password"
                    className={`rounded-lg py-3 px-3 bg-[#F5F5F5] w-full ${formik.touched.password && formik.errors.password ? "border-red-500" : ""
                      } focus:outline-none focus:ring-0 active:outline-none`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500"
                  >
                    {showPassword ? (
                      <AiFillEyeInvisible size={20} />
                    ) : (
                      <AiFillEye size={20} />
                    )}
                  </button>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-[12px] pl-2 pt-1">
                    {formik.errors.password}
                  </div>
                ) : null}

                <div className="flex justify-between my-4 text-sm">
                  <div className="text-left">
                    <div className="flex gap-2">
                      <input type="checkbox" />
                      <div className="text-gray-500">Remember Me</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Link href="">
                      <p className="text-[#6D5FFD] hover:text-black transition-all">
                        Forgot Password?
                      </p>
                    </Link>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#6D5FFD] hover:bg-black transition-all text-white font-bold my-4"
                >
                  LOGIN
                </button>
                <p className="font-bold text-center w-full text-sm my-3">
                  Don't have an account?{" "}
                  <Link
                    href="/signup"
                    className="text-[#6D5FFD] hover:text-black transition-all"
                  >
                    Sign Up
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

export default page;
