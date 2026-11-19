import {Link} from 'react-router-dom';import {Heart} from 'lucide-react';import {useShop} from '../context/ShopContext';import {fmt} from '../utils/format';
export default function ProductCard({p}){
 const {favs,toggleFav,add}=useShop();const fav=favs.includes(p.id);
 return(<div className="group">
  <div className="relative aspect-[4/5] overflow-hidden bg-sand">
   <Link to={`/product/${p.id}`}><img src={p.image} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"/></Link>
   <button aria-label="В избранное" onClick={()=>toggleFav(p.id)} className="absolute right-3 top-3 bg-black/40 p-2 text-white"><Heart size={18} fill={fav?'#fff':'none'}/></button>
   <button onClick={()=>add(p,p.sizes[0],p.colors[0])} className="absolute inset-x-0 bottom-0 bg-white py-3 text-[11px] uppercase tracking-[.25em] text-ink md:translate-y-full md:transition md:group-hover:translate-y-0">В корзину ({p.sizes[0]})</button>
  </div>
  <Link to={`/product/${p.id}`} className="mt-3 flex justify-between gap-4 text-sm"><span>{p.name}</span><span>{fmt(p.price)}</span></Link></div>);
}
