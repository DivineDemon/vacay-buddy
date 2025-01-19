"use client";

import Link from "next/link";
import Image from "next/image";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { type FormEvent, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignupPage = () => {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [verifying, setVerifying] = useState(false);
  const { isLoaded, signUp, setActive } = useSignUp();
  const [emailAddress, setEmailAddress] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setVerifying(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.push("/");
      } else {
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err: any) {
      console.error("Error:", JSON.stringify(err, null, 2));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <section className="flex md:flex-row flex-col gap-5 w-full my-10">
          <div className="md:w-7/12 w-full rounded-2xl border p-4">
            <div className="w-full py-12 px-10 flex flex-col gap-4">
              <h2 className="text-3xl font-bold">Create Account</h2>
              <p className="text-gray-700 my-3">
                Sign up now and unlock exclusive access!
              </p>

              {verifying ? (
                <form onSubmit={handleVerify} className="w-full flex flex-col">
                  <label id="code" className="text-bold text-xl my-2">
                    Enter your verification code
                  </label>
                  <input
                    value={code}
                    id="code"
                    name="code"
                    onChange={(e) => setCode(e.target.value)}
                    className="rounded-lg py-3 px-3 bg-[#F5F5F5] focus:outline-none focus:ring-0"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#6D5FFD] text-white font-bold my-4 hover:bg-black transition-all"
                  >
                    Verify
                  </button>
                </form>
              ) : (
                <form className="w-full flex flex-col" onSubmit={handleSubmit}>
                  <label htmlFor="email" className="text-bold text-xl my-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your Email"
                    className="rounded-lg py-3 px-3 bg-[#F5F5F5] focus:outline-none focus:ring-0"
                    onChange={(e) => setEmailAddress(e.target.value)}
                    value={emailAddress}
                  />
                  <label
                    htmlFor="password"
                    className="text-bold text-xl mt-3 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your Password"
                      className="w-full rounded-lg py-3 px-3 bg-[#F5F5F5] focus:outline-none focus:ring-0"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
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
                  <div id="clerk-captcha"></div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#6D5FFD] text-white font-bold my-4 hover:bg-black transition-all"
                  >
                    SIGNUP
                  </button>
                  <p className="font-bold text-center w-full text-sm my-3">
                    Already have an account?&nbsp;
                    <Link
                      href="/sign-in"
                      className="text-[#6D5FFD] hover:text-black transition-all"
                    >
                      Login
                    </Link>
                  </p>
                </form>
              )}
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
    </>
  );
};

export default SignupPage;
