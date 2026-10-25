import Image from 'next/image';

export default function About() {
  return (
    <section className="relative w-full bg-[#EEF5FF] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/icons/Фон.svg" alt="" fill className="object-cover object-top" priority />
      </div>

      <div className="relative z-10 w-full px-4 md:px-8 xl:px-20 2xl:px-[258px] py-16 md:py-20">
        <h2 className="font-heading text-[#002B41] text-[36px] md:text-[52px] xl:text-[68px] leading-none uppercase">СЕРФИНГ</h2>
        <p className="font-script text-[#FF1514] text-[24px] md:text-[36px] xl:text-[48px] leading-none ml-6 md:ml-12 xl:ml-18 mt-1">это стиль жизни</p>

        <div className="mt-8 md:mt-12 flex flex-col lg:flex-row gap-4 md:gap-5 items-start">
          <div className="relative w-full lg:w-[670px] lg:h-[375px] aspect-[894/500] lg:aspect-auto rounded-[28px] overflow-hidden shrink-0">
            <Image src="/photo/Картинка серфера.png" alt="Серфер" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src="/photo/Лого.png" alt="Surf Train Co" width={311} height={169} className="w-[140px] md:w-[180px] xl:w-[233px] h-auto" />
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-5 w-full lg:w-[327px] shrink-0">
            <div className="relative w-full lg:w-[327px] lg:h-[262px]">
              <button className="group absolute -top-4 -right-2 w-[68px] h-[68px] md:w-[80px] md:h-[80px] rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/25 z-20">
                <Image src="/icons/roundbutton.svg" alt="" fill className="object-contain" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <Image src="/icons/arrow1.svg" alt="Arrow" width={40} height={40} className="w-[20px] h-[20px] md:w-[26px] md:h-[26px] transition-all duration-500 group-hover:rotate-180 group-hover:scale-125" />
                </span>
              </button>
              <div className="w-full h-full rounded-[28px] bg-[#002B41] text-white p-5 md:p-6">
                <h3 className="font-variable text-[20px] md:text-[24px] leading-none">SurfTrainCo —</h3>
                <p className="font-text text-[14px] md:text-[15px] leading-[1.5] mt-4 md:mt-5 max-w-[270px]">это компания по обучению серфингу, расположенная в Москве, которая открылась в 2018 году.</p>
                <p className="font-text text-[14px] md:text-[15px] leading-[1.5] mt-3 md:mt-4 max-w-[270px]">Ее миссия состоит в том, чтобы обеспечить доступное, всестороннее и приятное обучение серфингу для всех уровней навыков и возрастов.</p>
              </div>
            </div>

            <div className="w-full lg:w-[327px] lg:h-[106px] rounded-[28px] bg-white border border-gray-300 p-4 md:p-5 flex items-center gap-3 transition-colors duration-500 group cursor-pointer hover:bg-[#FF1514] hover:border-[#FF1514]">
              <div className="flex -space-x-3 shrink-0">
                {[1, 2, 3].map((num) => (
                  <Image key={num} src={`/photo/Аватар ${num}.png`} alt="" width={60} height={60} className="w-[34px] md:w-[45px] h-[34px] md:h-[45px] rounded-full border-2 border-white" />
                ))}
              </div>
              <div className="flex flex-col transition-colors duration-500 group-hover:text-white">
                <span className="font-variable text-[20px] md:text-[27px] leading-none text-[#002B41] group-hover:text-white transition-colors duration-500">2000+</span>
                <span className="font-text text-[10px] md:text-[12px] leading-none text-[#002B41] group-hover:text-white transition-colors duration-500 mt-1">учеников</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}