import {Link} from 'react-router-dom';import {Instagram,Twitter} from 'lucide-react';
export default function Footer(){return(<footer className="border-t border-white/10 bg-sand"><div className="wrap grid gap-10 py-16 md:grid-cols-4">
 <div><p className="tracking-[.6em]">NOIR STUDIO</p><p className="mt-4 text-sm text-white/60">Одежда без лишнего. Проект создан для портфолио.</p></div>
 <div className="flex flex-col gap-2 text-sm"><Link to="/catalog">Каталог</Link><Link to="/about">О бренде</Link><Link to="/contact">Контакты</Link></div>
 <div className="flex flex-col gap-2 text-sm text-white/70"><span>Доставка 2–5 дней</span><span>Возврат 30 дней</span><span>hello@noir-studio.demo</span></div>
 <div className="flex gap-4"><a href="https://instagram.com" aria-label="Instagram"><Instagram/></a><a href="https://x.com" aria-label="X"><Twitter/></a></div></div>
 <p className="border-t border-white/10 py-6 text-center text-xs text-white/50">© {new Date().getFullYear()} NOIR STUDIO. Демонстрационный проект.</p></footer>)}
