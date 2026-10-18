import Image from 'next/image';

export default function Quote() {
  return (
    <section className="relative w-full bg-[#EEF5FF] overflow-hidden">
      <div className="relative z-10 w-full px-4 md:px-8 xl:px-20 2xl:px-[258px] py-12 md:py-20">

        <p className="font-[family-name:var(--font-forma-variable)] text-[#002B41] text-[16px] md:text-[24px] xl:text-[34px] leading-[1.3] max-w-[1100px]">
          Не бойтесь испытать себя и свои возможности - поддайтесь волнам и пусть они помогут вам раскрыть свой истинный потенциал.{' '}
          <span className="relative inline-block">
            Погрузитесь в мир серфинга
            <Image
              src="/icons/wave.svg"
              alt=""
              width={410}
              height={20}
              className="absolute left-0 top-full -mt-[7px] w-full h-auto pointer-events-none"
            />
          </span>{' '}
          и почувствуйте, как ваша жизнь наполняется яркими эмоциями и волнующими приключениями. Погнали волну!
        </p>

      </div>
    </section>
  );
}