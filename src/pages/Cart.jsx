import {useState} from 'react';import {Link} from 'react-router-dom';import {Minus,Plus,Trash2,ShoppingBag} from 'lucide-react';
import Page from '../components/Page';import {getProduct} from '../data/products';import {useShop} from '../context/ShopContext';import {fmt} from '../utils/format';
export default function Cart(){
 const {cart,setQty,remove,clear}=useShop();const [ordered,setOrdered]=useState(false);
 const items=cart.map(i=>({...i,p:getProduct(i.id)})).filter(i=>i.p);const total=items.reduce((s,i)=>s+i.p.price*i.qty,0);
 if(ordered)return <Page><div className="wrap py-32 text-center"><h1 className="display text-5xl">Демо-заказ оформлен</h1><p className="mx-auto mt-4 max-w-md text-ash">Оплаты и отправки нет: в проекте нет backend.</p><Link to="/catalog" className="btn mt-8">Продолжить покупки</Link></div></Page>;
 if(!items.length)return <Page><div className="wrap py-32 text-center"><ShoppingBag className="mx-auto" size={40}/><h1 className="display mt-6 text-5xl">Корзина пуста</h1><p className="mt-3 text-ash">Добавьте вещи из каталога.</p><Link to="/catalog" className="btn mt-8">Перейти в каталог</Link></div></Page>;
 return(<Page><div className="wrap py-10"><h1 className="display text-5xl md:text-7xl">Корзина</h1>
  <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_380px]"><ul className="divide-y border-y">{items.map(({key,p,size,color,qty})=>
   <li key={key} className="flex gap-4 py-5"><Link to={`/product/${p.id}`}><img src={p.image} alt={p.name} className="aspect-[4/5] w-24 object-cover md:w-32"/></Link>
    <div className="flex flex-1 flex-col justify-between"><div className="flex justify-between gap-4"><div><p>{p.name}</p><p className="text-sm text-ash">Размер {size}, {color}</p></div><p>{fmt(p.price*qty)}</p></div>
     <div className="flex items-center justify-between"><div className="flex items-center border"><button aria-label="Меньше" className="p-2" onClick={()=>setQty(key,qty-1)}><Minus size={14}/></button><span className="w-8 text-center">{qty}</span><button aria-label="Больше" className="p-2" onClick={()=>setQty(key,qty+1)}><Plus size={14}/></button></div>
      <button aria-label="Удалить" onClick={()=>remove(key)}><Trash2 size={18}/></button></div></div></li>)}</ul>
   <aside className="h-fit bg-sand p-6"><div className="flex justify-between text-lg"><span>Итого</span><span>{fmt(total)}</span></div><p className="mt-2 text-sm text-ash">Доставка {total>=150?'бесплатно':'считается при оформлении'}</p>
    <button className="btn mt-6 w-full" onClick={()=>{clear();setOrdered(true);}}>Оформить (демо)</button><Link to="/catalog" className="btn-o mt-3 w-full">Продолжить покупки</Link></aside></div></div></Page>);
}
