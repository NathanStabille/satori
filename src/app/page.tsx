import Image from "next/image";
import TextLogo from '../../public/images/empthy-text-jp.svg'
import Logo from '../../public/images/logo.svg'
import Link from "next/link";

export default function Home() {
  return (
    <div className={`h-screen w-screen bg-[#0D0D13] bg-[url('../../public/images/bg.svg')] bg-cover bg-no-repeat flex justify-center items-center p-10`}>

      <div className=" flex justify-center items-center gap-5">
        {/* <h1
          className='fixed top-10 font-japanese text-transparent text-4xl whitespace-nowrap bg-gradient-to-r from-[#00FACD] to-[#00D1FF] bg-clip-text bg-[300%] bg-[length:200%_200%] animate-colorsAnimated'>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
        </h1> */}

        <div className="w-full flex justify-center flex-col items-center">
          <Image src={TextLogo} alt="logo" className="w-[80vw] max-w-[1300px]" />
          <Image src={Logo} alt="logo" className="w-[12vw] max-w-[240px]" />

          <Link href='/satori'>
            <button className="text-3xl font-skyer text-white border-purple-50 border-2 px-10 py-1 pb-2 rounded-full font-semibold mt-5 hover:bg-[#FF5B53] hover:transition duration-200 hover:border-transparent hover:text-[#0D0D13]"> Go to Satori</button>
          </Link>
        </div>

 
        {/* <h1
          className='fixed bottom-10 font-japanese text-transparent text-4xl whitespace-nowrap bg-gradient-to-r from-[#00FACD] to-[#00D1FF] bg-clip-text bg-[300%] bg-[length:200%_200%] animate-colorsAnimated'>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
          <span className="pl-5">EMPTHY</span> <b className="pl-5">エンプティー</b>
        </h1> */}
      </div>

    </div>
  );
}
