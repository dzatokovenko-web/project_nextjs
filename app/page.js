import Promo from './components/promo';
import Cards from './components/cards';
import About from './components/about';
import Quote from './components/quote';
import Awards from './components/awards';

export default function Home() {
  return (
    <main>
      <Promo />
      <Cards />
      <About />
      <Quote />
      <Awards />
    </main>
  );
}