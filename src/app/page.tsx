import "./globals.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] relative">

      {/* TÍTULO */}
      <div className="font-serif text-6xl text-[#232357] mb-10 text-center z-20">
        Design Everything
      </div>

      {/* RECTÁNGULO VERDE DETRÁS */}
      <div
        className="absolute w-[1200px] h-[300px] bg-[#69B578] rounded-2xl z-0"
        style={{ top: '66%', transform: 'translateY(-50%)' }}
      />

      {/* MOCKUP NAVEGADOR ENCIMA */}
      <div className="mockup-browser border-2 border-gray-600 w-[900px] max-w-full z-10 relative">
        <div className="mockup-browser-toolbar">
          <div className="input">https://tupaginaweb.com</div>
        </div>
        <div className="bg-base-200 h-[500px] flex items-center justify-center p-4">
          <Image
            src="/website.png" 
            alt="Vista previa del sitio"
            width={860}
            height={450}
            className="rounded-lg object-contain"
          />
        </div>
      </div>
      
      
    </div>
    
    
  );
}


