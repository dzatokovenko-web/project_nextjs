'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Главная', href: '/' },
    { name: 'О нас', href: '/about' },
    { name: 'Награды', href: '/awards' },
    { name: 'Тарифы', href: '/prices' },
    { name: 'Акции', href: '/promo' },
    { name: 'Запись', href: '/booking' },
    { name: 'Контакты', href: '/contacts' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full font-[family-name:var(--font-forma)] z-50 pt-4">
      <div className="w-full px-4 md:px-8 xl:px-20 2xl:px-[290px] h-[52px] flex items-center justify-between gap-4">

        {/* Логотип */}
        <Link href="/" className="flex items-center shrink-0">
          <Image src="/icons/logo.svg" alt="Surf Train Co" width={70} height={38} priority />
        </Link>

        {/* Навигация (только xl ≥1280) */}
        <nav className="hidden xl:flex bg-white rounded-full items-center shadow-sm h-[52px] px-2 justify-between shrink-0 gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center justify-center h-[38px] px-3 text-[14px] leading-none no-underline rounded-full transition-all duration-500 ease-in-out whitespace-nowrap ${
                  isActive
                    ? 'bg-[#002B41] text-white'
                    : 'bg-transparent text-[#002B41] hover:text-[#FF372A]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Правая группа: планшет + десктоп (≥768) */}
        <div className="hidden md:flex items-center shrink-0 gap-3 xl:gap-6">
          <div className="flex gap-1.5">
            <a href="#" className="flex items-center justify-center transition-transform duration-500 ease-in-out hover:scale-110">
              <Image src="/icons/telegram.svg" alt="Telegram" width={20} height={20} />
            </a>
            <a href="#" className="flex items-center justify-center transition-transform duration-500 ease-in-out hover:scale-110">
              <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
            </a>
            <a href="#" className="flex items-center justify-center transition-transform duration-500 ease-in-out hover:scale-110">
              <Image src="/icons/viber.svg" alt="Viber" width={20} height={20} />
            </a>
          </div>
          <a
            href="tel:+79106849053"
            className="text-[14px] xl:text-[16px] text-[#002B41] no-underline font-bold whitespace-nowrap"
          >
            +7 (910) 684-90-53
          </a>
          <button className="w-[110px] xl:w-[130px] h-[44px] xl:h-[48px] text-[12px] xl:text-[14px] text-white bg-[#002B41] border-none rounded-full flex items-center justify-center gap-1.5 cursor-pointer shrink-0 transition-all duration-500 ease-in-out hover:bg-[#FF372A]">
            Подробнее
            <Image src="/icons/arrow.svg" alt="Arrow" width={12} height={12} />
          </button>

          {/* Бургер — до xl */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer"
            aria-label="Меню"
          >
            <span className={`block w-6 h-0.5 bg-[#002B41] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#002B41] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#002B41] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Мобилка (<768): соцсети + бургер */}
        <div className="flex md:hidden items-center shrink-0 gap-2">
          <div className="flex gap-1">
            <a href="#" className="flex items-center justify-center">
              <Image src="/icons/telegram.svg" alt="Telegram" width={20} height={20} />
            </a>
            <a href="#" className="flex items-center justify-center">
              <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
            </a>
            <a href="#" className="flex items-center justify-center">
              <Image src="/icons/viber.svg" alt="Viber" width={20} height={20} />
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer"
            aria-label="Меню"
          >
            <span className={`block w-6 h-0.5 bg-[#002B41] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#002B41] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[#002B41] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

      </div>

      {/* Бургер-меню */}
      <div
        className={`xl:hidden absolute top-[68px] left-0 w-full px-4 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-6 pt-2">
          <nav className="bg-white rounded-3xl p-4 shadow-md">
            <ul className="flex flex-col list-none m-0 p-0 gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-5 py-2.5 text-[14px] no-underline rounded-full transition-all duration-300 ${
                        isActive
                          ? 'bg-[#002B41] text-white'
                          : 'bg-transparent text-[#002B41] hover:bg-[#002B41] hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* На мобилке в бургере ещё телефон и кнопка */}
            <div className="md:hidden">
              <a
                href="tel:+79106849053"
                className="block mt-4 px-5 py-2.5 text-[14px] text-[#002B41] no-underline font-bold text-center"
              >
                +7 (910) 684-90-53
              </a>
              <button className="w-full mt-3 h-[44px] text-[12px] text-white bg-[#002B41] border-none rounded-full flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-500 ease-in-out hover:bg-[#FF372A]">
                Подробнее
                <Image src="/icons/arrow.svg" alt="Arrow" width={12} height={12} />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}