import Image from 'next/image';

const cards = [
  { id: 1, photo: '/photo/photo1.png', stamp: '/icons/1.svg', title: 'Профессиональное руководство', text: 'опытные инструкторы помогут вам освоить основы и быстро совершенствоваться.', theme: 'dark' },
  { id: 2, photo: '/photo/photo2.png', stamp: '/icons/2.svg', title: 'Качественное оборудование', text: 'доски и гидрокостюмы помогут вам оставаться в безопасности и получать удовольствие.', theme: 'light' },
  { id: 3, photo: '/photo/photo3.png', stamp: '/icons/3.svg', title: 'Благоприятная обстановка', text: 'благоприятная и безопасная обстановка в обучении с людьми со схожим опытом и целями.', theme: 'dark' },
  { id: 4, photo: '/photo/photo4.png', stamp: '/icons/4.svg', title: 'Дополнительные услуги', text: 'услуги фотографий и видео помогут вам запечатлить и поделиться опытом серфинга.', theme: 'light', hideOnTablet: true },
];

export default function Cards() {
  return (
    <section className="relative w-full -mt-[239px] z-20">
      <div className="w-full px-4 md:px-8 xl:px-20 2xl:px-[258px]">
        <div className="w-full bg-[#EEF5FF] rounded-[60px] md:rounded-[80px] p-6 md:p-8">

          <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {cards.map((card) => {
              const isDark = card.theme === 'dark';
              return (
                <div
                  key={card.id}
                  className={`relative w-full rounded-[35px] p-4 flex flex-row md:flex-col gap-4 md:gap-0 ${
                    isDark ? 'bg-[#002B41] text-white' : 'bg-white text-[#002B41]'
                  } ${card.hideOnTablet ? 'md:hidden lg:flex' : ''}`}
                >
                  {/* Изображение + печать */}
                  <div className="relative w-[120px] md:w-full shrink-0">
                    <Image
                      src={card.photo}
                      alt={card.title}
                      width={500}
                      height={375}
                      className="w-full h-auto rounded-[25px]"
                      sizes="(max-width: 768px) 120px, (max-width: 1024px) 33vw, 25vw"
                    />

                    <Image
                      src={card.stamp}
                      alt=""
                      width={80}
                      height={80}
                      className="absolute right-2 bottom-0 w-[35px] md:w-[50px] h-auto"
                    />
                  </div>

                  {/* Текст */}
                  <div className="flex flex-col md:mt-4">
                    <h3 className="font-[family-name:var(--font-forma-variable)] text-[16px] md:text-[18px] leading-[1.15]">
                      {card.title}
                    </h3>

                    <p className="font-[family-name:var(--font-forma-display)] text-[12px] md:text-[13px] leading-[1.35] mt-2 md:mt-3">
                      {card.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}