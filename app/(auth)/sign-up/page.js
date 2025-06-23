import SignupForm from "@/app/(auth)/sign-up/signupForm";

import Link from "next/link";
const Signup = () => {
  return (
    <>
      <section className="border border-none rounded-[4px] shadow shadow-slate-400 mt-76 text-center max-w-100 py-6 ml-76 mb-4">
        <h1 className=" mb-10 font-bold text-[36px] text-blue-700 ">
          <u>Sign up</u>
        </h1>

        <SignupForm />

        <p className="text-center">
          Already have an account?
          <Link href="/sign-in">
            <span className="text-blue-600">
              <u> Log in</u>
            </span>
          </Link>
        </p>
      </section>
    </>
  );
};

export default Signup;
