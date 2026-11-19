import {useEffect,useState} from 'react';import {Link,useLocation,useNavigate} from 'react-router-dom';import {Search,Heart,ShoppingBag,Menu,X} from 'lucide-react';import {useShop} from '../context/ShopContext';
const nav=[['/catalog?gender=Мужское','Мужское'],['/catalog?gender=Женское','Женское'],['/catalog','Каталог'],['/about','О бренде'],['/contact','Контакты']];
const Badge=({n})=>n>0?<span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-white text-[10px] text-ink">{n}</span>:null;
export default function Header(){
 const [open,setOpen]=useState(false);const [solid,setSolid]=useState(false);const [q,setQ]=useState('');
 const {count,favs}=useShop();const {pathname}=useLocation();const go=useNavigate();
 useEffect(()=>{const f=()=>setSolid(window.scrollY>40);f();window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]);
 useEffect(()=>setOpen(false),[pathname]);
 const clear=pathname==='/'&&!solid&&!open;
 const search=e=>{e.preventDefault();go(`/catalog?q=${encodeURIComponent(q)}`);};
 return(<header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${clear?'border-b border-transparent bg-transparent':'border-b border-white/10 bg-ink/90 backdrop-blur'}`}>
  <div className="wrap flex h-16 items-center justify-between">
   <button className="md:hidden" aria-label="Меню" onClick={()=>setOpen(!open)}>{open?<X size={20} strokeWidth={1.5}/>:<Menu size={20} strokeWidth={1.5}/>}</button>
   <Link to="/" className="text-sm tracking-[.6em]">NOIR STUDIO</Link>
   <nav className="hidden gap-10 md:flex">{nav.map(([to,l])=><Link key={l} to={to} className="label text-white/80 transition hover:text-white">{l}</Link>)}</nav>
   <div className="flex items-center gap-5">
    <form onSubmit={search} className="hidden items-center lg:flex"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="ПОИСК" aria-label="Поиск" className="label w-36 border-b border-white/30 bg-transparent py-1 outline-none placeholder:text-white/60 focus:border-white"/></form>
    <Link to="/catalog?focus=1" aria-label="Поиск" className="lg:hidden"><Search size={19} strokeWidth={1.5}/></Link>
    <Link to="/catalog?fav=1" aria-label="Избранное" className="relative"><Heart size={19} strokeWidth={1.5}/><Badge n={favs.length}/></Link>
    <Link to="/cart" aria-label="Корзина" className="relative"><ShoppingBag size={19} strokeWidth={1.5}/><Badge n={count}/></Link>
   </div></div>
  {open&&<nav className="flex flex-col gap-6 border-t border-white/10 bg-ink px-5 py-8 md:hidden">{nav.map(([to,l])=><Link key={l} to={to} className="label">{l}</Link>)}</nav>}
 </header>);
}
