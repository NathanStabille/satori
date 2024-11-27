"use client";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = async (values: FormEvent<HTMLFormElement>) => {
    values.preventDefault();

    try {
      const res = await signIn("credentials", {
        redirect: false,
        ...values,
      });

      if (res?.ok) {
        router.push("/");
      } else {
        setError("Invalid email or password");
      }
    } catch {
      setError("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col gap-3 p-5 text-center transition-all"
    >
      <div className="flex items-center rounded-xl border-none bg-lightSecondColor px-3 outline-1 placeholder:text-[#A1A1A1] focus-within:outline focus-within:outline-lightPrimarColor/50 dark:bg-black/70 focus-within:dark:outline-darkPrimaryColor/30">
        <EnvelopeIcon width={25} className="mr-2" color="#808080" />
        <input
          name="email"
          placeholder="email"
          type="email"
          className="h-full w-full border-none bg-transparent py-4 outline-none"
          required
        />
      </div>
      <div className="flex items-center rounded-xl border-none bg-lightSecondColor px-3 outline-1 placeholder:text-[#A1A1A1] focus-within:outline focus-within:outline-lightPrimarColor/50 dark:bg-black/70 focus-within:dark:outline-darkPrimaryColor/30">
        <LockClosedIcon width={25} className="mr-2" color="#808080" />
        <input
          name="password"
          placeholder="password"
          type="password"
          className="h-full w-full border-none bg-transparent py-4 outline-none"
          required
        />
      </div>
      <label
        htmlFor="remember"
        className="flex h-full w-full cursor-pointer items-center justify-start gap-2 px-1"
      >
        <input
          className="cursor-pointer border-lightPrimarColor dark:border-darkPrimaryColor"
          type="checkbox"
          id="remember"
          name="remember"
        />
        <p className="mb-1 text-[#808080]">remember me</p>
      </label>
      <button
        type="submit"
        className="mt-5 rounded-xl bg-lightPrimarColor py-3 text-2xl font-semibold uppercase tracking-wider text-gray-50 dark:bg-darkPrimaryColor hover:dark:bg-darkPrimaryColor/80 active:dark:bg-darkPrimaryColor/90"
      >
        login
      </button>
    </form>
  );
};
