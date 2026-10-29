import Promo from './components/promo';
import Cards from './components/cards';
import About from './components/about';
import Quote from './components/quote';
import Awards from './components/awards';
import Programs from './components/programs';
import Sales from './components/sales';
import Quote2 from './components/quote2';
import Booking from './components/booking';
import Map from './components/map';
import Footer from './components/footer';

export default function Home() {
  return (
    <main>
      <section id="home"><Promo /></section>
      <Cards />
      <section id="about"><About /></section>
      <Quote />
      <section id="awards"><Awards /></section>
      <section id="prices"><Programs /></section>
      <section id="promo"><Sales /></section>
      <Quote2 />
      <section id="booking"><Booking /></section>
      <section id="contacts"><Map /></section>
      <Footer />
    </main>
  );
}