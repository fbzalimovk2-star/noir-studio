import {useState} from 'react';import {Instagram,Twitter,Mail,MapPin} from 'lucide-react';import Page from '../components/Page';import {isEmail} from '../utils/format';
export default function Contact(){
 const [f,setF]=useState({name:'',email:'',message:''});const [err,setErr]=useState({});const [sent,setSent]=useState(false);
 const submit=e=>{e.preventDefault();const x={};if(f.name.trim().length<2)x.name='Введите имя';if(!isEmail(f.email))x.email='Введите корректный email';if(f.message.trim().length<10)x.message='Сообщение: минимум 10 символов';
  setErr(x);if(!Object.keys(x).length){setSent(true);setF({name:'',email:'',message:''});}};
 const field=(k,label,extra)=><label className="block"><span className="text-sm">{label}</span>{extra?<textarea rows="5" className="input" value={f[k]} onChange={e=>setF({...f,[k]:e.target.value})}/>:<input className="input" type={k==='email'?'email':'text'} value={f[k]} onChange={e=>setF({...f,[k]:e.target.value})}/>}{err[k]&&<span className="text-sm text-red-400" role="alert">{err[k]}</span>}</label>;
 return(<Page><div className="wrap grid gap-16 py-16 md:grid-cols-2"><div><h1 className="display text-6xl md:text-8xl">Контакты</h1>
  <p className="mt-8 flex items-center gap-3"><Mail size={18}/>hello@noir-studio.demo</p><p className="mt-3 flex items-center gap-3"><MapPin size={18}/>Москва, Демонстрационная ул., 1</p>
  <div className="mt-6 flex gap-4"><a href="https://instagram.com" aria-label="Instagram"><Instagram/></a><a href="https://x.com" aria-label="X"><Twitter/></a></div></div>
  <form onSubmit={submit} noValidate className="space-y-6">{field('name','Имя')}{field('email','Email')}{field('message','Сообщение',true)}<button className="btn">Отправить</button>
   {sent&&<p role="status" className="text-sm">Форма прошла проверку. Это демо: сообщение никуда не отправлено.</p>}</form></div></Page>);
}
