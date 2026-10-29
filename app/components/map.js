import Image from 'next/image';

export default function Map() {
  return (
    <section className="relative w-full bg-[#EEF5FF] overflow-hidden py-16 md:py-24">
      
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/photo/карта.png" alt="Карта" fill className="object-cover object-center" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-8 xl:px-20 2xl:px-[258px] flex flex-col justify-between min-h-[600px] md:min-h-[800px]">
        
        <div className="relative w-fit bg-white rounded-[60px] px-8 py-6 md:px-12 md:py-8 mt-8 ml-0 md:ml-[10%]">
          <h2 className="font-heading text-[#002B41] text-[32px] md:text-[52px] leading-none uppercase">
            мы на карте
          </h2>
          <p className="font-script text-[#FF1514] text-[24px] md:text-[36px] leading-none mt-2 ml-4 md:ml-12">
            где искать
          </p>
        </div>

        {/* Десктопная версия */}
        <div className="hidden md:block relative w-full max-w-[1200px] mx-auto bg-white rounded-[60px] px-16 py-10 mt-auto mb-8">
          <div className="flex flex-row items-center justify-between gap-0">
            
            <div className="flex flex-col items-start w-[20%]">
              <span className="font-text text-[#385462] text-[15px] mb-3">социальные сети</span>
              <div className="flex gap-3">
                <a href="#" className="flex items-center justify-center transition-transform hover:scale-110">
                  <Image src="/icons/Инст.svg" alt="Instagram" width={24} height={24} />
                </a>
                <a href="#" className="flex items-center justify-center transition-transform hover:scale-110">
                  <Image src="/icons/Тик ток.svg" alt="TikTok" width={24} height={24} />
                </a>
                <a href="#" className="flex items-center justify-center transition-transform hover:scale-110">
                  <Image src="/icons/Вконтакте.svg" alt="VK" width={24} height={24} />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-start w-[20%]">
              <a href="tel:+79106849053" className="font-text text-[#385462] text-[15px] mb-3 whitespace-nowrap">
                +7 (910) 684-90-53
              </a>
              <div className="flex gap-2.5">
                <a href="#" className="flex items-center justify-center hover:scale-110 transition-transform"><Image src="/icons/telegram.svg" alt="TG" width={22} height={22} /></a>
                <a href="#" className="flex items-center justify-center hover:scale-110 transition-transform"><Image src="/icons/whatsapp.svg" alt="WA" width={22} height={22} /></a>
                <a href="#" className="flex items-center justify-center hover:scale-110 transition-transform"><Image src="/icons/viber.svg" alt="VB" width={22} height={22} /></a>
              </div>
            </div>

            <div className="flex items-center justify-center w-[20%]">
              <button className="group relative w-[110px] h-[110px] shrink-0 rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/25">
                <Image src="/icons/roundbutton.svg" alt="" fill className="object-contain" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <Image src="/icons/arrow1.svg" alt="Arrow" width={40} height={40} className="w-[34px] h-[34px] transition-all duration-500 group-hover:rotate-180 group-hover:scale-125" />
                </span>
              </button>
            </div>

            <div className="flex flex-col items-start w-[20%]">
              <div className="flex items-start gap-2">
                <Image src="/icons/Метка.svg" alt="Метка" width={22} height={22} className="mt-0.5 shrink-0" />
                <span className="font-text text-[#385462] text-[15px]">
                  ул. Черкизова 14,<br/>Москва
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start w-[20%]">
              <span className="font-heading text-[#002B41] text-[18px] mb-3 whitespace-nowrap">Как добраться?</span>
              <span className="font-text text-[#385462] text-[15px] whitespace-nowrap">
                Маршруты: 139, 28б
              </span>
            </div>

          </div>
        </div>

        {/* Мобильная версия */}
        <div className="flex md:hidden flex-col items-end gap-6 mt-auto mb-8 w-full">
          
          {/* Кнопка справа */}
          <button className="group relative w-[90px] h-[90px] shrink-0 rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/25 mr-4">
            <Image src="/icons/roundbutton.svg" alt="" fill className="object-contain" />
            <span className="absolute inset-0 flex items-center justify-center">
              <Image src="/icons/arrow1.svg" alt="Arrow" width={40} height={40} className="w-[28px] h-[28px] transition-all duration-500 group-hover:rotate-180 group-hover:scale-125" />
            </span>
          </button>

          {/* 3 прямоугольника */}
          <div className="flex flex-col gap-4 w-full">
            
            <div className="w-full bg-white rounded-[30px] px-6 py-4 flex justify-between items-center shadow-sm">
              <div className="flex items-center gap-2">
                <Image src="/icons/Метка.svg" alt="Метка" width={20} height={20} />
                <span className="font-text text-[#385462] text-[13px]">
                  ул. Черкизова 14,<br/>Москва
                </span>
              </div>
              <div className="flex flex-col items-end text-right">
                <span className="font-heading text-[#002B41] text-[14px] mb-1">Как добраться?</span>
                <span className="font-text text-[#385462] text-[12px]">Маршруты: 139, 28б</span>
              </div>
            </div>

            <div className="w-full bg-white rounded-[30px] px-6 py-4 flex justify-between items-center shadow-sm">
              <span className="font-text text-[#385462] text-[13px]">Социальные сети:</span>
              <div className="flex gap-3">
                <a href="#"><Image src="/icons/Инст.svg" alt="IG" width={22} height={22} /></a>
                <a href="#"><Image src="/icons/Тик ток.svg" alt="TT" width={22} height={22} /></a>
                <a href="#"><Image src="/icons/Вконтакте.svg" alt="VK" width={22} height={22} /></a>
              </div>
            </div>

            <div className="w-full bg-white rounded-[30px] px-6 py-4 flex justify-between items-center shadow-sm">
              <a href="tel:+79106849053" className="font-text text-[#385462] text-[13px]">+7 (910) 684-90-53</a>
              <div className="flex gap-2.5">
                <a href="#"><Image src="/icons/telegram.svg" alt="TG" width={22} height={22} /></a>
                <a href="#"><Image src="/icons/whatsapp.svg" alt="WA" width={22} height={22} /></a>
                <a href="#"><Image src="/icons/viber.svg" alt="VB" width={22} height={22} /></a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}