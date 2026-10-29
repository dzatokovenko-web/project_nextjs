'use client';

import Image from 'next/image';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-white pt-24 pb-10 overflow-hidden">
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <span className="font-heading text-[#F2F4F5] text-[300px] md:text-[450px] lg:text-[600px] leading-none uppercase whitespace-nowrap select-none opacity-70">
          CONTACT
        </span>
      </div>

      <div className="relative z-10 w-full px-4 md:px-8 xl:px-20 2xl:px-[258px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 mb-16">
          
          <div className="flex flex-col items-start">
            <a href="/#home" className="mb-6">
              <Image src="/icons/logo.svg" alt="Surf Train Co" width={90} height={48} />
            </a>
            <p className="font-text text-[#002B41] text-[14px] md:text-[16px] leading-[1.4] max-w-[300px] mb-6">
              Свяжитесь с нами любым удобным способом
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:scale-110 transition-transform"><Image src="/icons/telegram.svg" alt="TG" width={24} height={24} /></a>
              <a href="#" className="hover:scale-110 transition-transform"><Image src="/icons/whatsapp.svg" alt="WA" width={24} height={24} /></a>
              <a href="#" className="hover:scale-110 transition-transform"><Image src="/icons/viber.svg" alt="VB" width={24} height={24} /></a>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="font-heading text-[#002B41] text-[18px] md:text-[20px] mb-6">Контакты</h3>
            <div className="flex flex-col gap-3 font-text text-[#385462] text-[14px] md:text-[16px]">
              <a href="tel:+79106849053" className="hover:text-[#FF1514] transition-colors">+7 (910) 684-90-53</a>
              <a href="mailto:SurfCocommerce@yandex.ru" className="hover:text-[#FF1514] transition-colors">SurfCocommerce@yandex.ru</a>
              <span>г. Москва, ул. Черкизова 14</span>
              <span>Работаем с 8:00-22:00</span>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="font-heading text-[#002B41] text-[18px] md:text-[20px] mb-6">Для клиентов</h3>
            <div className="flex flex-col gap-3 font-text text-[#385462] text-[14px] md:text-[16px]">
              <a href="/#about" className="hover:text-[#FF1514] transition-colors">О нас</a>
              <a href="/#awards" className="hover:text-[#FF1514] transition-colors">Награды</a>
              <a href="/#prices" className="hover:text-[#FF1514] transition-colors">Тарифы</a>
              <a href="/#promo" className="hover:text-[#FF1514] transition-colors">Акции</a>
              <a href="/#contacts" className="hover:text-[#FF1514] transition-colors">Контакты</a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#002B41]/10 pt-8 relative">
          <p className="font-text text-[#385462] text-[12px] md:text-[14px] text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} Surf Train Co. Все права защищены.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group absolute right-0 -bottom-2 md:relative md:bottom-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#002B41] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#FF1514] hover:-translate-y-1"
            aria-label="Наверх"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:-translate-y-1">
              <path d="M12 19V5M5 12L12 5L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}