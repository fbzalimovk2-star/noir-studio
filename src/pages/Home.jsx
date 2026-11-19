import {useEffect,useState} from 'react';import {Link} from 'react-router-dom';import {AnimatePresence,motion} from 'framer-motion';import {ArrowRight,ChevronRight} from 'lucide-react';
import Page from '../components/Page';import ProductCard from '../components/ProductCard';import {products} from '../data/products';import {isEmail} from '../utils/format';
const slides=[0,1,2].map(n=>`https://picsum.photos/seed/noirhero${n}/1920/1200?grayscale`);
const tiles=[['Новинки','/catalog',1],['Базовые вещи','/catalog?category=Футболки',2],['О бренде','/about',3]];
const Grid=({id,title,list,to})=>(<section id={id} className="wrap py-20"><div className="mb-10 flex items-end justify-between"><h2 className="display text-4xl md:text-6xl">{title}</h2><Link to={to} className="label border-b border-white/40 pb-1">Смотреть все</Link></div>
 <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">{list.map(p=><ProductCard key={p.id} p={p}/>)}</div></section>);
export default function Home(){
 const [i,setI]=useState(0);const [email,setEmail]=useState('');const [msg,setMsg]=useState('');
 useEffect(()=>{const t=setInterval(()=>setI(x=>(x+1)%slides.length),7000);return()=>clearInterval(t)},[i]);
 const sub=e=>{e.preventDefault();setMsg(isEmail(email)?'Спасибо! Это демо: адрес никуда не отправляется.':'Введите корректный email.');};
 return(<Page>
  <section className="relative -mt-16 h-screen min-h-[640px] overflow-hidden">
   <AnimatePresence><motion.img key={i} src={slides[i]} alt="" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1.2}} className="absolute inset-0 h-full w-full object-cover"/></AnimatePresence>
   <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-black/10"/>
   <div className="wrap relative flex h-full flex-col justify-center pt-16">
    <div className="flex items-center gap-4"><span className="h-px w-16 bg-white/60 md:w-24"/><span className="label">Осень / Зима 2026</span></div>
    <h1 className="display mt-8 text-[11vw] lg:text-[7.5rem]">BEYOND<br/>THE ORDINARY</h1>
    <p className="label mt-8 tracking-[.4em] text-white/80">Одежда для новой эпохи</p>
    <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:gap-12">{[['Мужская коллекция','Мужское'],['Женская коллекция','Женское']].map(([t,g])=>
     <Link key={g} to={`/catalog?gender=${g}`} className="label group inline-flex items-center gap-4">{t}<ArrowRight size={26} strokeWidth={1} className="transition group-hover:translate-x-1"/></Link>)}</div></div>
   <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col gap-3 border-r border-white/60 pr-4 text-right text-sm sm:flex md:right-10">{slides.map((_,n)=>
    <button key={n} onClick={()=>setI(n)} aria-label={`Слайд ${n+1}`} className={i===n?'text-white':'text-white/30'}>{`0${n+1}`}</button>)}</div>
   <button onClick={()=>document.getElementById('new')?.scrollIntoView({behavior:'smooth'})} className="absolute bottom-8 left-5 hidden items-center gap-4 md:left-10 md:flex"><span className="h-16 w-px bg-white/60"/><span className="label">Вниз</span></button>
   <div className="absolute bottom-0 left-[23%] hidden w-[62%] grid-cols-3 md:grid">{tiles.map(([t,to,n])=>
    <Link key={t} to={to} className="group relative h-36 overflow-hidden border-x border-white/10"><img src={`https://picsum.photos/seed/noirtile${n}/600/300?grayscale`} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><span className="absolute inset-0 bg-black/50"/>
     <span className="label absolute bottom-6 left-7 flex items-center gap-2">{t}<ChevronRight size={14}/></span></Link>)}</div>
  </section>
  <Grid id="new" title="Новые поступления" list={products.filter(p=>p.isNew)} to="/catalog"/>
  <Grid title="Популярное" list={[...products].sort((a,b)=>b.popularity-a.popularity).slice(0,4)} to="/catalog"/>
  <section className="wrap grid gap-4 py-8 md:grid-cols-[5fr_8fr]">{[['Трикотаж','knitwear','object-top'],['Верхняя одежда','outerwear','object-[25%_center]']].map(([c,f,pos])=>
   <Link key={c} to={`/catalog?category=${encodeURIComponent(c)}`} aria-label={c} className="group block h-64 overflow-hidden bg-sand sm:h-[420px] md:h-[560px]"><img src={`/images/collection-${f}.png`} alt={c} className={`h-full w-full object-cover ${pos} transition duration-700 group-hover:scale-105`}/></Link>)}</section>
  <section className="my-20 bg-sand py-28 text-center"><div className="wrap"><h2 className="display text-5xl md:text-8xl">Осенняя коллекция</h2><p className="mx-auto mt-6 max-w-md text-ash">Тёплые ткани и спокойные оттенки. Двенадцать вещей, которые легко сочетать между собой.</p><Link to="/catalog" className="btn mt-10">Перейти в каталог</Link></div></section>
  <section className="wrap max-w-xl py-16 text-center"><h2 className="display text-4xl">Новости бренда</h2><p className="mt-3 text-ash">Раз в месяц: новые коллекции и закрытые распродажи.</p>
   <form onSubmit={sub} noValidate className="mt-8 flex gap-4"><input className="input" type="email" placeholder="Ваш email" aria-label="Email" value={email} onChange={e=>setEmail(e.target.value)}/><button className="btn">Подписаться</button></form>
   {msg&&<p className="mt-3 text-sm" role="status">{msg}</p>}</section>
 </Page>);
}
