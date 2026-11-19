import {useState} from 'react';import {Link,useParams} from 'react-router-dom';import {Minus,Plus,Truck} from 'lucide-react';
import Page from '../components/Page';import ProductCard from '../components/ProductCard';import NotFound from './NotFound';
import {getProduct,products} from '../data/products';import {useShop} from '../context/ShopContext';import {fmt} from '../utils/format';
export default function Product(){
 const {id}=useParams();const p=getProduct(id);const {add}=useShop();
 const [size,setSize]=useState('');const [color,setColor]=useState('');const [qty,setQty]=useState(1);const [done,setDone]=useState(false);
 if(!p)return <NotFound/>;
 const need=!size;
 const go=()=>{if(need)return;add(p,size,color||p.colors[0],qty);setDone(true);};
 return(<Page><div className="wrap grid gap-10 py-10 md:grid-cols-2">
  <img src={p.image} alt={p.name} className="aspect-[4/5] w-full object-cover"/>
  <div className="md:sticky md:top-24 md:self-start"><h1 className="display text-5xl">{p.name}</h1><p className="mt-3 text-2xl">{fmt(p.price)}</p><p className="mt-6 max-w-md text-ash">{p.description}</p>
   <p className="mt-8 text-sm">Размер</p><div className="mt-2 flex flex-wrap gap-2">{p.sizes.map(x=><button key={x} onClick={()=>setSize(x)} className={`chip ${size===x?'bg-white text-ink':''}`}>{x}</button>)}</div>
   <p className="mt-6 text-sm">Цвет: {color||p.colors[0]}</p><div className="mt-2 flex flex-wrap gap-2">{p.colors.map(x=><button key={x} onClick={()=>setColor(x)} className={`chip ${(color||p.colors[0])===x?'bg-white text-ink':''}`}>{x}</button>)}</div>
   <div className="mt-8 flex items-center gap-6"><div className="flex items-center border"><button aria-label="Меньше" className="p-3" onClick={()=>setQty(Math.max(1,qty-1))}><Minus size={16}/></button><span className="w-8 text-center">{qty}</span><button aria-label="Больше" className="p-3" onClick={()=>setQty(qty+1)}><Plus size={16}/></button></div>
    <button className="btn flex-1" disabled={need} onClick={go}>{need?'Выберите размер':'Добавить в корзину'}</button></div>
   {done&&<p className="mt-4 text-sm" role="status">Добавлено. <Link className="underline" to="/cart">Перейти в корзину</Link></p>}
   <p className="mt-8 flex items-center gap-3 border-t pt-6 text-sm"><Truck size={18}/>Доставка 2–5 дней, бесплатно от $150. Возврат 30 дней.</p></div></div>
  <section className="wrap py-16"><h2 className="display mb-8 text-4xl">Вам может понравиться</h2><div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{products.filter(x=>x.id!==p.id&&x.category===p.category||x.gender===p.gender&&x.id!==p.id).slice(0,4).map(x=><ProductCard key={x.id} p={x}/>)}</div></section></Page>);
}
