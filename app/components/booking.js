'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

export default function Booking() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Отправка...');

    const serviceId = 'service_n5elo7q';
    const templateId = 'template_mc2m7lc';
    const publicKey = 'p6-8Suo3-yvkEtbQw';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setStatus('Успешно отправлено!');
        form.current.reset();
      }, (error) => {
        setStatus('Ошибка: ' + error.text);
      });
  };

  return (
    <section className="relative w-full bg-[#EEF5FF] overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/icons/Фон.svg" alt="" fill className="object-cover object-top" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-8 xl:px-20 2xl:px-[258px]">
        <h2 className="font-heading text-[36px] md:text-[52px] xl:text-[68px] leading-none uppercase mb-10 md:mb-16">
          <span className="text-[#002B41]">ЗАПИСЬ</span>{' '}
          <span className="font-script text-[#FF1514] lowercase text-[30px] md:text-[42px] xl:text-[54px]">на занятие</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <form ref={form} onSubmit={sendEmail} className="w-full lg:w-1/2 flex flex-col gap-5 order-2 lg:order-1">
            
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="relative w-full sm:w-[317px] h-[85px]">
                <input 
                  type="date" 
                  name="date"
                  required
                  className="w-full h-full rounded-[85px] border border-[#002B41]/30 bg-transparent px-6 text-[16px] text-[#002B41] outline-none focus:border-[#002B41] cursor-pointer" 
                />
              </div>
              
              <div className="relative w-full sm:w-[317px] h-[85px]">
                <input 
                  type="time" 
                  name="time"
                  required
                  className="w-full h-full rounded-[85px] border border-[#002B41]/30 bg-transparent px-6 text-[16px] text-[#002B41] outline-none focus:border-[#002B41] cursor-pointer" 
                />
              </div>
            </div>

            {/* Убрал фиксированную ширину sm:w-[654px], оставил просто w-full sm:w-[654px] чтобы оно не растягивалось больше */}
            <div className="relative w-full sm:max-w-[654px] h-[85px]">
              <select name="tariff" required defaultValue="" className="w-full h-full appearance-none rounded-[85px] border border-[#002B41]/30 bg-transparent px-6 text-[16px] text-[#002B41] outline-none focus:border-[#002B41] cursor-pointer">
                <option value="" disabled hidden>Выберите подходящий тариф</option>
                <option value="Easy Start">Easy Start</option>
                <option value="Flow Rider">Flow Rider</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 9L12 15L18 9" stroke="#002B41" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <input type="text" name="name" required placeholder="Иванов Иван" className="w-full sm:w-[317px] h-[85px] rounded-[85px] border border-[#002B41]/30 bg-transparent px-6 text-[16px] text-[#002B41] outline-none focus:border-[#002B41] placeholder:text-[#002B41]/50" />
              <input type="tel" name="phone" required placeholder="8(999) 999-99-99" className="w-full sm:w-[317px] h-[85px] rounded-[85px] border border-[#002B41]/30 bg-transparent px-6 text-[16px] text-[#002B41] outline-none focus:border-[#002B41] placeholder:text-[#002B41]/50" />
            </div>

            <div className="flex flex-col xl:flex-row items-center gap-6 mt-4">
              <button type="submit" className="w-full xl:w-auto h-[70px] px-10 bg-[#FF1514] text-white text-[16px] md:text-[18px] font-heading rounded-[85px] transition-all duration-500 hover:px-16 hover:scale-105 shrink-0">
                Записаться онлайн
              </button>
              
              <div className="font-text text-[#385462] text-[12px] md:text-[14px] leading-[1.4] max-w-[250px]">
                {status && <p className="mb-2 font-bold text-[#FF1514]">{status}</p>}
                <p>Нажимая на кнопку, вы соглашаетесь <br className="hidden md:block"/> с <span className="text-[#FF1514]">политикой обработки данных</span></p>
              </div>
            </div>
          </form>

          <div className="relative w-full lg:w-[560px] h-[300px] md:h-[422px] rounded-[60px] overflow-hidden shrink-0 order-1 lg:order-2">
            <Image src="/photo/img.png" alt="Серфингистка" fill className="object-cover" sizes="(max-width: 768px) 100vw, 560px" />
          </div>
        </div>
      </div>
    </section>
  );
}