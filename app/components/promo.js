import Image from 'next/image';

export default function Promo() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] bg-[#EEF5FF]">
      <Image src="/photo/promo.png" alt="Покоряйте волны вместе с нами" fill className="object-cover" priority />

      <div className="relative z-10 h-full w-full px-4 md:px-8 xl:px-20 2xl:px-[290px] flex flex-col justify-start pt-24 md:pt-28 lg:pt-32 xl:pt-36">
        <p className="font-script text-[14px] md:text-[18px] lg:text-[22px] xl:text-[26px] leading-none mb-3 md:mb-4 lg:mb-6 bg-gradient-to-r from-[#FF372A] to-[#FF1514] bg-clip-text text-transparent w-fit">
          ул. Черкизова 14, Москва
        </p>

        <h1 className="font-heading text-[#002B41] text-[28px] md:text-[44px] lg:text-[64px] xl:text-[88px] leading-[0.95] uppercase">
          Покоряйте{' '}
          <span className="relative inline-block">
            волны
            <Image src="/photo/wave.svg" alt="" width={410} height={20} className="absolute left-1/2 -translate-x-1/2 top-full -mt-[7px] w-[130px] md:w-[210px] lg:w-[300px] xl:w-[410px] h-auto pointer-events-none" />
          </span>
        </h1>

        <div className="flex flex-wrap items-center gap-2 md:gap-3 lg:gap-4 xl:gap-5 -mt-1 md:-mt-1.5 lg:-mt-2 xl:-mt-2.5">
          <h1 className="font-heading text-[#002B41] text-[28px] md:text-[44px] lg:text-[64px] xl:text-[88px] leading-[0.95] uppercase">вместе</h1>

          <button className="group relative w-[60px] h-[60px] md:w-[85px] md:h-[85px] xl:w-[110px] xl:h-[110px] shrink-0 rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/25">
            <Image src="/icons/roundbutton.svg" alt="" fill className="object-contain" />
            <span className="absolute inset-0 flex items-center justify-center">
              <Image src="/icons/arrow1.svg" alt="Arrow" width={40} height={40} className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] xl:w-[34px] xl:h-[34px] transition-all duration-500 group-hover:rotate-180 group-hover:scale-125" />
            </span>
          </button>

          <h1 className="font-heading text-[#002B41] text-[28px] md:text-[44px] lg:text-[64px] xl:text-[88px] leading-[0.95] uppercase">с нами!</h1>
        </div>

        <p className="font-[family-name:var(--font-forma-light)] text-[#002B41] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[1.4] mt-0 md:mt-0.5 lg:mt-1 xl:mt-1.5 w-full md:w-[400px]">
          SurfTrainCo предлагает вам доступное,<br className="hidden md:block" />
          комплексное и приятное обучение сёрфингу<br className="hidden md:block" />
          для всех уровней навыков и возрастов.
        </p>
      </div>
    </section>
  );
}