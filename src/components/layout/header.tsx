import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header >
      <div >

          <nav className="fixed top-0 w-full h-25 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
          <div  className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* <Link href="/">
              <Image
                src="/"
                alt=""
                width={120}
                height={50}

              />
            </Link> */}
          <div className="hidden md:block text-xxl">
              <ul className="flex gap-8">
                <li className="text-[#2D3436] hover:text-[#7C9885] transition-colors">
                  <Link href="/prestations">Services</Link>
                </li>
                <li className="text-[#2D3436] hover:text-[#7C9885] transition-colors">
                  <Link href="/cabinet">Le cabinet</Link>
                </li>
                <li className="text-[#2D3436] hover:text-[#7C9885] transition-colors">
                  <Link href="/#contact">Contact</Link>
                </li>
              </ul>
            </div>
              <button className="bg-[#7C9885] hover:bg-[#6B8574] text-white rounded-full px-6 py-4"><Link href="/reservation" >
              Prendre RDV
              </Link></button>
            

          </div>
          
            
          
        </nav >
      </div>
    </header>
  );
}