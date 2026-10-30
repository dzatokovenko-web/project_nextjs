'use client';

import { useState } from 'react';
import Image from 'next/image';

const AWARDS = [
  { id: 1, photo: '/photo/Картинка1.png', label: 'Награда', title: '«Лучший инструктор по серфингу 2022»', source: 'от международной организации Surfers Against Sewage (SAS)', year: '(2022)' },
  { id: 2, photo: '/photo/Картинка2.png', label: 'Награда', title: '«За успешное продвижение серфинга»', source: 'от Международного Олимпийского Комитета', year: '(2022)' },
  { id: 3, photo: '/photo/Картинка3.png', label: 'Премия', title: '«За исключительные достижения в серфинге»', source: 'от международной организации World Surf League (WSL)', year: '(2022)' },
];

const YEARS = ['2022', '2021', '2019'];

export default function Awards() {
  const [activeYear, setActiveYear] = useState('2022');
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative w-full bg-[#EEF5FF] overflow-hidden">
      
      {/* Фон для Наград */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image src="/icons/bg-main.svg" alt="" fill className="object-cover object-top" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-8 xl:px-20 2xl:px-[258px] pt-16 md:pt-24">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h2 className="font-heading text-[#002B41] text-[36px] md:text-[52px] xl:text-[68px] leading-none uppercase">Награды</h2>
            <span className="font-script text-[#FF1514] text-[20px] md:text-[28px] xl:text-[36px] leading-none">нашего клуба</span>
          </div>

          <div className="flex items-center gap-4 md:gap-6 mt-2 md:mt-4 ml-auto md:mr-10">
            {YEARS.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`font-variable text-[14px] md:text-[16px] leading-none transition-colors duration-300 ${
                  activeYear === year ? 'text-[#002B41] underline' : 'text-[#385462]/50 hover:text-[#002B41]'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full mt-10 md:mt-14 overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out gap-4 md:gap-6"
          style={{ transform: `translateX(calc(17.5vw - ${currentSlide} * (65vw + 16px)))` }}
        >
          {AWARDS.map((card, index) => {
            const isActive = currentSlide === index;
            return (
              <div 
                key={card.id} 
                className={`shrink-0 w-[85vw] md:w-[65vw] max-w-[1000px] h-auto lg:h-[450px] rounded-[60px] bg-white/40 backdrop-blur-sm p-3 md:p-4 border border-[#002B41]/10 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-60'}`}
              >
                <div className="relative w-full h-full rounded-[35px] bg-white p-5 md:p-6 flex flex-col md:flex-row items-center gap-6">
                  <div className="relative w-full md:w-[55%] h-[200px] md:h-full rounded-[35px] overflow-hidden shrink-0 z-10">
                    <Image src={card.photo} alt={card.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 55vw" />
                  </div>

                  <div className="flex flex-col w-full md:w-[45%] pr-0 md:pr-8 py-2">
                    <span className="font-text text-[#385462] text-[12px] md:text-[14px] leading-none mb-3">{card.label}</span>
                    <h3 className="font-text text-[#002B41] text-[20px] md:text-[28px] leading-[1.15] mb-4">{card.title}</h3>
                    <p className="font-text text-[#002B41] text-[12px] md:text-[14px] leading-[1.4] mb-3 max-w-[350px]">{card.source}</p>
                    <p className="font-text text-[#002B41] text-[12px] md:text-[14px] leading-none">{card.year}</p>

                    <button className="group absolute bottom-4 right-4 md:bottom-6 md:right-6 w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-[#EEF5FF] flex items-center justify-center transition-colors duration-500 hover:bg-[#FF372A]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transition-transform duration-500 group-hover:rotate-45">
                        <path d="M5 19L19 5M19 5H9M19 5V15" stroke="#002B41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-500"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 flex justify-center items-center gap-2 mt-8 md:mt-10 pb-16 md:pb-24">
        {AWARDS.map((_, dot) => (
          <button
            key={dot}
            onClick={() => setCurrentSlide(dot)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${currentSlide === dot ? 'bg-[#002B41]' : 'bg-[#385462]/30'}`}
            aria-label={`Слайд ${dot + 1}`}
          />
        ))}
      </div>
    </section>
  );
}