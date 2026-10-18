import localFont from 'next/font/local';
import './globals.css';
import Header from './components/header';

const formaRegular = localFont({ src: './fonts/FormaDJRCyrillicBanner-Regular-Testing.otf', variable: '--font-forma', display: 'swap' });
const formaBold = localFont({ src: './fonts/FormaDJRCyrillicBanner-Bold-Testing.otf', variable: '--font-forma-bold', display: 'swap' });
const formaLight = localFont({ src: './fonts/FormaDJRCyrillicBanner-Light-Testing.otf', variable: '--font-forma-light', display: 'swap' });
const formaVariable = localFont({ src: './fonts/FormaDJRCyrillicVariable-VF-Testing.ttf', variable: '--font-forma-variable', display: 'swap' });
const formaDisplay = localFont({ src: './fonts/FormaDJRCyrillicDisplay-Regular-Testing.ttf', variable: '--font-forma-display', display: 'swap' });
const panton = localFont({ src: './fonts/ofont.ru_Panton Rust Script.ttf', variable: '--font-panton', display: 'swap' });
const pantonSemiBold = localFont({ src: './fonts/Panton Rust Script SemiBold.ttf', variable: '--font-panton-semibold', display: 'swap' });

export const metadata = { title: 'Surf Train Co', description: 'Школа серфинга' };

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${formaRegular.variable} ${formaBold.variable} ${formaLight.variable} ${formaVariable.variable} ${formaDisplay.variable} ${panton.variable} ${pantonSemiBold.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}