'use client';

import { useState } from 'react';
import Image from 'next/image';

const awards = [
  {
    id: 1,
    photo: '/photo/Картинка1.png',
    label: 'Награда',
    title: '«Лучший инструктор по серфингу 2022»',
    source: 'от международной организации Surfers Against Sewage (SAS)',
    year: '(2022)',
  },
  {
    id: 2,
    photo: '/photo/Картинка2.png',
    label: 'Премия',
    title: '«За исключительные достижения в серфинге»',
    source: 'от международной организации World Surf League (WSL)',
    year: '(2022)',
  },
  {
    id: 3,
    photo: '/photo/Картинка3.png',
    label: 'Награда',
    title: '«За успешное продвижение серфинга»',
    source: 'от Международного Олимпийского Комитета',
    year: '(2022)',
  },
];

const years = [
  { year: '2022', active: true },
  { year: '2021', active: false },
  { year: '2019', active: false },
];

export default function Awards() {
  const [activeYear, setActiveYear] = useState('2022');
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="relative w-full bg-[#EEF5FF] overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/icons/Фон.svg"
          alt=""
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="relative z-10 w-full px-4 md:px-8 xl:px-20 2xl:px-[258px] py-16 md:py-24">

        <div className="flex flex-wrap items-start justify-between gap-6">

          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h2 className="font-[family-name:var(--font-forma-bold)] text-[#002B41] text-[36px] md:text-[52px] xl:text-[68px] leading-none uppercase">
              Награды
            </h2>
            <span className="font-[family-name:var(--font-panton-semibold)] text-[#FF1514] text-[20px] md:text-[28px] xl:text-[36px] leading-none">
              нашего клуба
            </span>
          </div>

          <div className="flex items-center gap-4 md:gap-6 mt-2">
            {years.map((item) => (
              <button
                key={item.year}
                onClick={() => setActiveYear(item.year)}
                className={`font-[family-name:var(--font-forma-variable)] text-[14px] md:text-[16px] leading-none transition-colors duration-300 ${
                  activeYear === item.year
                    ? 'text-[#002B41] underline'
                    : 'text-[#385462]/50 hover:text-[#002B41]'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>

        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {awards.map((card) => (
            <div
              key={card.id}
              className="relative w-full rounded-[60px] bg-[#EEF5FF] p-3 md:p-4 border border-[#002B41]/10"
            >
              <div className="relative w-full rounded-[35px] bg-white p-4 md:p-5 flex flex-col min-h-[420px]">

                <div className="relative -ml-6 md:-ml-8 w-[55%] aspect-[4/3] rounded-[35px] overflow-hidden shrink-0">
                  <Image
                    src={card.photo}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <span className="font-[family-name:var(--font-forma-display)] text-[#385462] text-[12px] md:text-[13px] leading-none">
                    {card.label}
                  </span>

                  <h3 className="font-[family-name:var(--font-forma-display)] text-[#002B41] text-[18px] md:text-[22px] leading-[1.2] mt-2">
                    {card.title}
                  </h3>

                  <p className="font-[family-name:var(--font-forma-display)] text-[#002B41] text-[11px] md:text-[12px] leading-[1.4] mt-3">
                    {card.source}
                  </p>

                  <p className="font-[family-name:var(--font-forma-display)] text-[#002B41] text-[11px] md:text-[12px] leading-none mt-2">
                    {card.year}
                  </p>
                </div>

                <button className="group absolute bottom-4 right-4 w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-full bg-[#EEF5FF] flex items-center justify-center transition-colors duration-500 ease-in-out hover:bg-[#FF372A]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transition-transform duration-500 ease-in-out group-hover:rotate-45">
                    <path d="M5 19L19 5M19 5H9M19 5V15" stroke="#002B41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors duration-500"/>
                  </svg>
                </button>

              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-8 md:mt-10">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => setActiveDot(dot)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                activeDot === dot ? 'bg-[#002B41]' : 'bg-[#385462]/30'
              }`}
              aria-label={`Слайд ${dot + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}