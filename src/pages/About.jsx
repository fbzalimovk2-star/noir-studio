import Page from '../components/Page';
export default function About(){return(<Page><div className="wrap py-16"><h1 className="display text-6xl md:text-9xl">О бренде</h1>
 <div className="mt-12 grid items-center gap-12 md:grid-cols-2"><div className="space-y-10">
  <div><h2 className="display text-4xl">История</h2><p className="mt-4 max-w-prose text-ash">NOIR STUDIO начинался как мастерская на три человека. Мы шили одну куртку в сезон и меняли крой, пока она не садилась без компромиссов. Сегодня коллекции остаются небольшими.</p></div>
  <div><h2 className="display text-4xl">Философия</h2><p className="mt-4 max-w-prose text-ash">Меньше вещей, больше смысла. Натуральные ткани, спокойная палитра и крой, который не устаревает за сезон.</p></div></div>
  <img src="/images/about-1.png" alt="Пальто на вешалке" className="aspect-[4/5] w-full object-cover"/></div>
 <img src="/images/about-2.png" alt="" className="mt-12 aspect-video w-full object-cover md:aspect-[21/9]"/></div></Page>)}
