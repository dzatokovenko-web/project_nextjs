import Image from 'next/image';

export default function Quote2() {
  return (
    <section className="relative w-full bg-transparent overflow-hidden">
      <div className="relative z-10 w-full px-4 md:px-8 xl:px-20 2xl:px-[258px] pt-20 pb-12 md:pt-20 md:pb-20">

        <p className="font-[family-name:var(--font-forma-variable)] text-[#002B41] text-[16px] md:text-[24px] xl:text-[34px] leading-[1.3] max-w-[1100px]">
          Помните, что каждый ваш выход на доску - это возможность{' '}
          <span className="relative inline-block">
            выйти за пределы своих комфортных зон
            <Image
              src="/icons/wave3.svg"
              alt=""
              width={410}
              height={20}
              className="absolute left-0 top-full -mt-[5px] w-full h-auto pointer-events-none"
            />
          </span>{' '}
          и стать лучше, сильнее и увереннее. Поверьте в себя, стремитесь к новым вершинам и не забывайте наслаждаться каждым мгновением на доске.
        </p>

      </div>
    </section>
  );
}