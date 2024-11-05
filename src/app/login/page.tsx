import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Login() {
  return (
    <div className="flex h-screen w-full select-none items-center justify-center font-baiJamjuree">
      <div className="flex h-full w-full items-center justify-center p-5 max-md:hidden">
        <div className="flex h-full w-full rounded-xl bg-[url('/images/login-image-dark.webp')] bg-cover bg-no-repeat" />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-16 p-3 max-md:overflow-auto">
        <div className="flex flex-col items-center text-center">
          <div
            className={`mb-10 size-32 bg-[url('/images/logo-light.svg')] bg-cover bg-no-repeat dark:bg-[url('/images/logo-dark.svg')] `}
          />
          <h1 className="mb-5 text-5xl font-semibold">WELCOME TO SATORI</h1>
          <h1 className="text-[#808080]">
            Enter your email and password to acess your account
          </h1>
        </div>
        <div className="flex w-full max-w-xl flex-col items-center justify-between">
          <form
            action=""
            className="flex w-full flex-col gap-3 p-5 text-center transition-all"
          >
            <div className="flex items-center rounded-xl border-none bg-lightSecondColor px-3 outline-1 placeholder:text-[#A1A1A1] focus-within:outline focus-within:outline-lightPrimarColor/50 dark:bg-black/70 focus-within:dark:outline-darkPrimaryColor/30">
              <EnvelopeIcon width={25} className="mr-2" color="#808080" />
              <input
                placeholder="email"
                type="email"
                className="h-full w-full border-none bg-transparent py-4 outline-none"
              />
            </div>
            <div className="flex items-center rounded-xl border-none bg-lightSecondColor px-3 outline-1 placeholder:text-[#A1A1A1] focus-within:outline focus-within:outline-lightPrimarColor/50 dark:bg-black/70 focus-within:dark:outline-darkPrimaryColor/30">
              <LockClosedIcon width={25} className="mr-2" color="#808080" />
              <input
                placeholder="password"
                type="password"
                className="h-full w-full border-none bg-transparent py-4 outline-none"
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
          <div className="mt-8 flex flex-col items-center justify-center gap-5">
            <h1 className="text-[#808080]">or login with</h1>
            <button className="flex items-center justify-center gap-3 rounded-lg border border-blue-500 px-4 py-3 text-lg font-medium uppercase text-blue-500 transition-all hover:bg-blue-500 hover:text-slate-50 active:bg-blue-600">
              <Image
                className="h-auto w-auto"
                src="images/microsoft-logo.svg"
                width={50}
                height={50}
                alt="icon"
              />
              microsoft account
            </button>
          </div>
          <h1 className="mt-10 text-center text-[#808080]">
            Don’t you have an account?{" "}
            <span className="font-medium">contact the admin!</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
