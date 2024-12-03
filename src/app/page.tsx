import { LoginForm } from "@/components/LoginForm";

export default function Login() {
  return (
    <div className="flex h-screen w-full select-none items-center justify-center font-baiJamjuree">
      <div className="flex h-full w-full items-center justify-center p-5 max-md:hidden">
        <div className="flex h-full w-full rounded-xl bg-[url('/images/login-image-dark.webp')] bg-cover bg-no-repeat" />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-16 p-3 max-md:overflow-auto">
        <div className="flex flex-col items-center text-center">
          <div
            className={`mb-10 size-32 bg-[url('/images/logo-light.svg')] bg-cover bg-no-repeat dark:bg-[url('/images/logo-dark.svg')]`}
          />
          <h1 className="mb-5 text-5xl font-semibold">WELCOME TO SATORI</h1>
          <h1 className="text-[#808080]">
            Enter your email and password to acess your account
          </h1>
        </div>
        <div className="flex w-full max-w-xl flex-col items-center justify-between">
          <LoginForm />
          {/* <div className="mt-8 flex flex-col items-center justify-center gap-5">
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
          </div> */}
          <h1 className="mt-10 text-center text-[#808080]">
            Don’t you have an account?{" "}
            <span className="font-medium">contact the admin!</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
