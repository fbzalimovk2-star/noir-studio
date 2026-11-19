import {createContext,useContext,useEffect,useState} from 'react';
const Ctx=createContext();
const load=k=>{try{return JSON.parse(localStorage.getItem(k))||[]}catch{return[]}};
export function ShopProvider({children}){
 const [cart,setCart]=useState(()=>load('noir-cart'));
 const [favs,setFavs]=useState(()=>load('noir-favs'));
 useEffect(()=>{try{localStorage.setItem('noir-cart',JSON.stringify(cart))}catch{}},[cart]);
 useEffect(()=>{try{localStorage.setItem('noir-favs',JSON.stringify(favs))}catch{}},[favs]);
 const add=(p,size,color,qty=1)=>setCart(c=>{const key=`${p.id}-${size}-${color}`;const f=c.find(i=>i.key===key);
  return f?c.map(i=>i.key===key?{...i,qty:i.qty+qty}:i):[...c,{key,id:p.id,size,color,qty}]});
 const setQty=(key,q)=>setCart(c=>q<1?c.filter(i=>i.key!==key):c.map(i=>i.key===key?{...i,qty:q}:i));
 const remove=key=>setCart(c=>c.filter(i=>i.key!==key));
 const clear=()=>setCart([]);
 const toggleFav=id=>setFavs(f=>f.includes(id)?f.filter(x=>x!==id):[...f,id]);
 const count=cart.reduce((s,i)=>s+i.qty,0);
 return <Ctx.Provider value={{cart,favs,add,setQty,remove,clear,toggleFav,count}}>{children}</Ctx.Provider>;
}
export const useShop=()=>useContext(Ctx);
