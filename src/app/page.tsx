import Image from "next/image";
import TextLogo from "../../public/images/empthy-text-jp.svg";
import Logo from "../../public/images/logo.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className={`flex h-screen w-screen items-center justify-center bg-[#0D0D13] bg-[url('../../public/images/bg.svg')] bg-cover bg-no-repeat p-10`}
    >
      <div className="flex items-center justify-center gap-5">
        <div className="flex w-full flex-col items-center justify-center">
          <Image
            src={TextLogo}
            alt="logo"
            className="w-[80vw] max-w-[1300px]"
          />
          <Image src={Logo} alt="logo" className="w-[12vw] max-w-[240px]" />

          <Link href="/satori">
            <button className="mt-5 rounded-full border-2 border-purple-50 px-10 py-1 pb-2 font-skyer text-3xl font-semibold text-white duration-200 hover:border-transparent hover:bg-[#FF5B53] hover:text-[#0D0D13] hover:transition">
              Go to Satori
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
