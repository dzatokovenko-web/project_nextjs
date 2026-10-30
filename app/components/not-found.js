import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-[#EEF5FF] text-[#002B41] px-4">
      <h2 className="font-heading text-[100px] md:text-[150px] leading-none mb-4">404</h2>
      <p className="font-text text-[20px] md:text-[24px] mb-8 text-center">Упс! Кажется, мы поймали не ту волну.</p>
      <Link href="/" className="h-[60px] px-8 bg-[#FF1514] text-white rounded-full flex items-center justify-center font-heading hover:bg-[#cc100f] transition-colors">
        Вернуться на главную
      </Link>
    </main>
  );
}