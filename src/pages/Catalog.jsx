import {useMemo,useState} from 'react';import {useSearchParams} from 'react-router-dom';
import Page from '../components/Page';import ProductCard from '../components/ProductCard';import {products,categories} from '../data/products';import {useShop} from '../context/ShopContext';
const SIZES=['XS','S','M','L','XL'];
export default function Catalog(){
 const [sp,setSp]=useSearchParams();const {favs}=useShop();
 const [cat,setCat]=useState(sp.get('category')||'');const [size,setSize]=useState('');const [max,setMax]=useState(300);const [sort,setSort]=useState('pop');
 const q=sp.get('q')||'',gender=sp.get('gender')||'',fav=sp.get('fav');
 const setQ=v=>{const n=new URLSearchParams(sp);v?n.set('q',v):n.delete('q');setSp(n,{replace:true});};
 const list=useMemo(()=>products.filter(p=>(!cat||p.category===cat)&&(!gender||p.gender===gender)&&(!size||p.sizes.includes(size))&&p.price<=max&&p.name.toLowerCase().includes(q.toLowerCase())&&(!fav||favs.includes(p.id)))
  .sort((a,b)=>sort==='asc'?a.price-b.price:sort==='desc'?b.price-a.price:b.popularity-a.popularity),[cat,size,max,sort,q,gender,fav,favs]);
 const reset=()=>{setCat('');setSize('');setMax(300);setSp({});};
 return(<Page><div className="wrap py-10">
  <h1 className="display text-5xl md:text-7xl">{fav?'Избранное':gender||'Каталог'}</h1>
  <div className="mt-8 grid gap-6 border-y py-6 md:grid-cols-4">
   <input className="input" placeholder="Поиск по названию" aria-label="Поиск" autoFocus={sp.get('focus')==='1'} value={q} onChange={e=>setQ(e.target.value)}/>
   <select className="input" aria-label="Категория" value={cat} onChange={e=>setCat(e.target.value)}><option value="">Все категории</option>{categories.map(c=><option key={c}>{c}</option>)}</select>
   <select className="input" aria-label="Сортировка" value={sort} onChange={e=>setSort(e.target.value)}><option value="pop">Сначала популярные</option><option value="asc">Сначала дешёвые</option><option value="desc">Сначала дорогие</option></select>
   <label className="text-sm">Цена до ${max}<input type="range" min="50" max="300" step="10" value={max} onChange={e=>setMax(+e.target.value)} className="mt-2 w-full accent-white"/></label>
   <div className="flex flex-wrap gap-2 md:col-span-4">{SIZES.map(s=><button key={s} onClick={()=>setSize(size===s?'':s)} className={`chip ${size===s?'bg-white text-ink':''}`}>{s}</button>)}</div></div>
  <p className="my-6 text-sm text-ash">Найдено: {list.length}</p>
  {list.length?<div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">{list.map(p=><ProductCard key={p.id} p={p}/>)}</div>
  :<div className="py-24 text-center"><p className="display text-4xl">Ничего не найдено</p><button onClick={reset} className="btn mt-6">Сбросить фильтры</button></div>}
 </div></Page>);
}
