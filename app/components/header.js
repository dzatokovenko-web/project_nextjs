'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { name: 'Главная', href: '/#home' },
  { name: 'О нас', href: '/#about' },
  { name: 'Награды', href: '/#awards' },
  { name: 'Тарифы', href: '/#prices' },
  { name: 'Акции', href: '/#promo' },
  { name: 'Запись', href: '/#booking' },
  { name: 'Контакты', href: '/#contacts' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Функция для плавного скролла без перезагрузки
  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 w-full font-[family-name:var(--font-forma)] z-50 pt-4">
      <div className="w-full px-4 md:px-8 xl:px-20 2xl:px-[290px] h-[52px] flex items-center justify-between gap-4">
        
        <a href="/#home" onClick={(e) => handleNavClick(e, '/#home')} className="flex items-center shrink-0">
          <Image src="/icons/logo.svg" alt="Surf Train Co" width={70} height={38} priority />
        </a>

        <nav className="hidden xl:flex bg-white rounded-full items-center shadow-sm h-[52px] px-2 justify-between shrink-0 gap-1">
          {NAV_ITEMS.map((item) => {
            // Активной делаем ссылку, если мы на главной странице (или если pathname пустой)
            // Для якорей это работает визуально, если мы на главной.
            const isActive = pathname === '/' && item.name === 'Главная';
            
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`flex items-center justify-center h-[38px] px-3 text-[14px] leading-none no-underline rounded-full transition-all duration-500 ease-in-out whitespace-nowrap ${
                  isActive 
                    ? 'bg-[#002B41] text-white' 
                    : 'bg-transparent text-[#002B41] hover:text-[#FF372A]'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center shrink-0 gap-3 xl:gap-6">
          <div className="flex gap-1.5">
            {['telegram', 'whatsapp', 'viber'].map((icon) => (
              <a key={icon} href="#" className="flex items-center justify-center transition-transform duration-500 hover:scale-110">
                <Image src={`/icons/${icon}.svg`} alt={icon} width={20} height={20} />
              </a>
            ))}
          </div>
          <a href="tel:+79106849053" className="text-[14px] xl:text-[16px] text-[#002B41] no-underline font-bold whitespace-nowrap transition-colors duration-300 hover:text-[#FF372A]">
            +7 (910) 684-90-53
          </a>
          <a 
            href="/#booking" 
            onClick={(e) => handleNavClick(e, '/#booking')}
            className="w-[110px] xl:w-[130px] h-[44px] xl:h-[48px] text-[12px] xl:text-[14px] text-white bg-[#002B41] border-none rounded-full flex items-center justify-center gap-1.5 cursor-pointer shrink-0 transition-all duration-500 hover:bg-[#FF372A] hover:scale-105 active:scale-95"
          >
            Подробнее
            <Image src="/icons/arrow.svg" alt="Arrow" width={12} height={12} />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer" aria-label="Меню">
            <span className={`block w-6 h-0.5 bg-[#002B41] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#002B41] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#002B41] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        <div className="flex md:hidden items-center shrink-0 gap-2">
          <div className="flex gap-1">
            {['telegram', 'whatsapp', 'viber'].map((icon) => (
              <a key={icon} href="#" className="flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <Image src={`/icons/${icon}.svg`} alt={icon} width={20} height={20} />
              </a>
            ))}
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer" aria-label="Меню">
            <span className={`block w-6 h-0.5 bg-[#002B41] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#002B41] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#002B41] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      <div className={`xl:hidden absolute top-[68px] left-0 w-full px-4 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pb-6 pt-2">
          <nav className="bg-white rounded-3xl p-4 shadow-md">
            <ul className="flex flex-col list-none m-0 p-0 gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === '/' && item.name === 'Главная';
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block px-5 py-2.5 text-[14px] no-underline rounded-full transition-all duration-300 ${
                        isActive ? 'bg-[#002B41] text-white' : 'bg-transparent text-[#002B41] hover:bg-[#002B41] hover:text-white'
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="md:hidden">
              <a href="tel:+79106849053" className="block mt-4 px-5 py-2.5 text-[14px] text-[#002B41] no-underline font-bold text-center transition-colors duration-300 hover:text-[#FF372A]">+7 (910) 684-90-53</a>
              <a 
                href="/#booking" 
                onClick={(e) => handleNavClick(e, '/#booking')}
                className="w-full mt-3 h-[44px] text-[12px] text-white bg-[#002B41] border-none rounded-full flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-500 hover:bg-[#FF372A]"
              >
                Подробнее <Image src="/icons/arrow.svg" alt="Arrow" width={12} height={12} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}