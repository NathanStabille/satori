import { ThemeSwitcher } from "@/components/ThemeSwitcherButton";

export default function Login() {
  return (
    <div className="flex h-full w-full items-center justify-center font-baiJamjuree">
      <ThemeSwitcher className="absolute right-3 top-3 z-10" />

      <div className="h-full"></div>
      <div className="flex h-full flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center text-center">
          <div
            className={`mb-10 size-32 bg-[url('/images/logo-light.svg')] bg-cover bg-no-repeat dark:bg-[url('/images/logo-dark.svg')]`}
          />
          <h1 className="mb-5 text-5xl font-semibold">WELCOME TO SATORI</h1>
          <h1 className="text-[#808080]">
            Enter your username/email and password to acess your account
          </h1>
        </div>

        <form
          action=""
          className="flex w-full flex-col gap-5 p-5 text-center transition-all"
        >
          <input
            type="email"
            placeholder="email"
            className="rounded-xl border-none bg-lightSecondColor px-5 py-4 placeholder:text-[#A1A1A1] focus:outline focus:outline-lightPrimarColor/50 dark:bg-black/70 focus:dark:outline-darkPrimaryColor/30"
          />
          <input
            type="password"
            placeholder="password"
            className="rounded-xl border-none bg-lightSecondColor px-5 py-4 placeholder:text-[#A1A1A1] focus:outline focus:outline-lightPrimarColor/50 dark:bg-black/70 focus:dark:outline-darkPrimaryColor/30"
          />
          <h1 className="text-[#808080]">or login with</h1>
          <div>
            <button></button>
            <button></button>
          </div>
          <button
            type="submit"
            className="mt-5 rounded-xl bg-lightPrimarColor py-3 text-2xl font-bold uppercase tracking-wider text-gray-50 dark:bg-darkPrimaryColor hover:dark:bg-darkPrimaryColor/80 active:dark:bg-darkPrimaryColor/90"
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
}
