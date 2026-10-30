'use client';

import { useRef } from 'react';
import Image from 'next/image';

const SALES = [
  { id: 1, photo: '/photo/акция1.png', topText: 'До 25.04.2024', bottomText: 'Бесплатный урок серфинга для первого посещения' },
  { id: 2, photo: '/photo/акция2.png', topText: 'Бессрочно', bottomText: 'Сертификация или аттестация по окончании курса' },
  { id: 3, photo: '/photo/акция3.png', topText: 'До 12.05.2024', bottomText: 'Пакет серфинга для двоих' },
];

export default function Sales() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-[#EEF5FF] pt-16 pb-32 md:pt-24 md:pb-48 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/icons/Подложка вырез.svg" alt="" fill className="object-cover object-bottom" />
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-10 w-[80px] md:w-[130px] pointer-events-none z-0">
        <Image src="/icons/Доска серф.svg" alt="" width={200} height={600} className="w-full h-auto -rotate-3" />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-10 w-[80px] md:w-[130px] pointer-events-none z-0">
        <Image src="/icons/Доска серф.svg" alt="" width={200} height={600} className="w-full h-auto rotate-3 -scale-x-100" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-8 xl:px-20 2xl:px-[258px]">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-10 md:mb-14">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h2 className="font-heading text-[#002B41] text-[32px] md:text-[52px] xl:text-[68px] leading-none uppercase">АКЦИИ</h2>
            <span className="font-script text-[#FF1514] text-[20px] md:text-[28px] xl:text-[36px] leading-none">и скидки</span>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => scroll('left')} className="group w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center transition-colors duration-300 hover:bg-[#FF1514]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:-translate-x-1">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#002B41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-300"/>
              </svg>
            </button>
            <button onClick={() => scroll('right')} className="group w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center transition-colors duration-300 hover:bg-[#FF1514]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#002B41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-300"/>
              </svg>
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex gap-5 md:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
          {SALES.map((card) => (
            <div key={card.id} className="shrink-0 w-[85vw] sm:w-[45vw] lg:w-[calc(33.333%-16px)] snap-start max-w-[400px]">
              <div className="w-full rounded-[60px] bg-[#EEF5FF] p-4 md:p-5 border border-white/50">
                <div className="relative w-full aspect-square rounded-[35px] overflow-hidden">
                  <Image src={card.photo} alt={card.bottomText} fill className="object-cover" sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
                  <div className="absolute top-3 left-3 right-3 md:top-4 md:left-4 md:right-4 flex justify-between items-start">
                    <span className="font-text text-white text-[10px] md:text-[14px] leading-none bg-black/20 px-2 py-1 rounded">
                      {card.topText}
                    </span>
                    <button className="group w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <path d="M7 17L17 7M17 7H7M7 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                    <p className="font-heading text-white text-[14px] md:text-[22px] leading-[1.2]">
                      {card.bottomText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}