"use client";

import "./globals.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import SplitText from "./components/SplitText";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[100vh] relative ">

        {/* TÍTULO ANIMADO */}
        <div>
          {isClient && (
            <SplitText
              text="Design Everything"
              className="font-crimson-pro text-7xl text-[#232357] text-center z-20 w-[600px] h-[100px]"
              delay={80}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.15}
              rootMargin="-100px"
              textAlign="center"
            />
          )}
        </div>

        {/* RECTÁNGULO VERDE DETRÁS */}
        <div
          className="absolute w-[1200px] h-[300px] bg-[#69B578] rounded-2xl z-0"
          style={{ top: '71%', transform: 'translateY(-50%)' }}
        ></div>

        {/* IMAGEN EN LUGAR DEL MOCKUP */}
        <div className="relative w-[900px] max-w-full z-10">
          <Image
            src="/Computer.png"
            alt="Imagen del computador"
            width={900}
            height={450}
            className="rounded-lg object-contain"
          />
        </div>
      </div>

      {/* SEPARADOR */}
      <div className="flex flex-col pt-1">
        <hr className="border-t border-gray-400 my-10 w-[80%] mx-auto" />

        {/* NUEVA SECCIÓN INFORMATIVA */}
        <div className="bg-[#f1f8fc] py-14 px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* TEXTO A LA IZQUIERDA */}
            <div>
              <p className="text-sm text-[#69B578] mb-2 font-medium">About</p>
              <h2 className="text-4xl font-bold text-[#232357] font-crimson-pro mb-6">
                We’ve got you covered.
              </h2>
              <p className="font-crimson-pro text-[#232357] leading-relaxed text-lg">
                We craft digital experiences that blend striking design with seamless functionality.
                Combining graphic design artistry with full-stack web development, we turn ideas into
                elegant, high-performing websites. From concept to launch, every detail is intentional,
                every interaction refined.
              </p>
            </div>

            {/* IMAGEN A LA DERECHA */}
            <div className="flex justify-center">
              <Image
                src="/amaretto.webp"
                alt="Illustration"
                width={650}
                height={800}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-1">
        <hr className="border-t border-gray-400 my-10 w-[80%] mx-auto" />

      </div>
    </div>
  );
}
