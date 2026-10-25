import Promo from './components/promo';
import Cards from './components/cards';
import About from './components/about';
import Quote from './components/quote';
import Awards from './components/awards';
import Programs from './components/programs';
import Sales from './components/sales';
import Quote2 from './components/quote2';
import Booking from './components/booking';

export default function Home() {
  return (
    <main>
      <Promo />
      <Cards />
      <About />
      <Quote />
      <Awards />
      <Programs />
      <Sales />
      <Quote2 />
      <Booking />
    </main>
  );
}