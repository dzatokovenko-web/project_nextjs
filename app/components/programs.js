import Image from 'next/image';

const PROGRAMS = [
  {
    id: 1,
    surfer: '/icons/серфер.svg',
    title: 'Easy Start',
    duration: '5 уроков',
    lessonTime: '45 минут',
    features: [
      'Воссозданный искусственный речной порог',
      'Доска с плавниками, как на океане',
      'Даёт возможность отработать технику поворотов, трюки на волне, развить баланс и мышечную память',
      'Помогает подготовиться к катанию на океанских волнах (работа тела после поп-ап)',
    ],
    oldPrice: '29 000 руб.',
    newPrice: '12 990 руб.',
  },
  {
    id: 2,
    surfer: '/icons/серфер2.svg',
    title: 'Flow Rider',
    duration: '5 уроков',
    lessonTime: '45 минут',
    features: [
      'Напор воды, направленный вверх по натянутой тканевой поверхности',
      'Доска без плавников, нечто среднее между скейтбордом и сноубордом',
      'Даёт возможность развить баланс и получить яркие эмоции от катания на волне',
      'Возможность поймать удовольствие от движения и маневрирования на доске по водному потоку',
    ],
    oldPrice: '22 000 руб.',
    newPrice: '10 990 руб.',
  },
];

export default function Programs() {
  return (
    <section className="relative w-full bg-[#EEF5FF] pt-8 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      <div className="relative z-10 w-full px-4 md:px-8 xl:px-20 2xl:px-[258px]">
        <h2 className="font-heading text-[#002B41] text-[36px] md:text-[52px] xl:text-[68px] leading-none uppercase text-center mb-24 md:mb-32">
          ПРОГРАММЫ <span className="font-script text-[#FF1514] lowercase xl:text-[60px]">обучения</span>
        </h2>

        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12">
          {PROGRAMS.map((program) => (
            <div key={program.id} className="relative w-full max-w-[655px] bg-white rounded-[40px] px-6 md:px-10 pt-20 pb-12 md:pt-24 md:pb-16 flex flex-col items-center">
              <div className="absolute -top-16 md:-top-20 left-1/2 -translate-x-1/2 w-[120px] md:w-[160px] h-auto">
                <Image src={program.surfer} alt="Серфер" width={160} height={160} className="w-full h-auto object-contain" />
              </div>

              <span className="font-text text-[#385462] text-[16px] md:text-[20px] leading-none mb-2">-тариф-</span>
              <h3 className="font-heading text-[#002B41] text-[32px] md:text-[45px] leading-none mb-8">{program.title}</h3>

              <div className="w-full flex justify-center gap-6 md:gap-12 mb-8">
                <div className="flex items-center gap-3">
                  <Image src="/icons/календарь.svg" alt="Календарь" width={32} height={32} className="w-8 h-8 md:w-10 md:h-10" />
                  <div className="flex flex-col">
                    <span className="font-text text-[#385462] text-[10px] md:text-[12px] leading-tight">длительность курса</span>
                    <span className="font-text text-[#002B41] text-[14px] md:text-[16px] leading-tight font-bold">{program.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Image src="/icons/часы.svg" alt="Часы" width={32} height={32} className="w-8 h-8 md:w-10 md:h-10" />
                  <div className="flex flex-col">
                    <span className="font-text text-[#385462] text-[10px] md:text-[12px] leading-tight">длительность урока</span>
                    <span className="font-text text-[#002B41] text-[14px] md:text-[16px] leading-tight font-bold">{program.lessonTime}</span>
                  </div>
                </div>
              </div>

              <ul className="w-full flex flex-col gap-4 mb-10 flex-grow">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Image src="/icons/галочка.svg" alt="Check" width={20} height={20} className="shrink-0 mt-1" />
                    <span className="font-text text-[#385462] text-[14px] md:text-[15px] leading-[1.4]">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col items-center mb-8">
                <span className="font-text text-[#385462]/60 text-[18px] md:text-[20px] leading-none line-through mb-2">{program.oldPrice}</span>
                <span className="font-heading text-[#002B41] text-[28px] md:text-[30px] leading-none">{program.newPrice}</span>
              </div>

              <button className="w-full h-[60px] bg-[#FF1514] text-white text-[16px] md:text-[18px] font-text rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-[#cc100f]">
                Выбрать тариф
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}