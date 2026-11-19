import {Routes,Route,useLocation} from 'react-router-dom';import {AnimatePresence} from 'framer-motion';
import Header from './components/Header';import Footer from './components/Footer';import useScrollTop from './hooks/useScrollTop';
import Home from './pages/Home';import Catalog from './pages/Catalog';import Product from './pages/Product';import Cart from './pages/Cart';
import About from './pages/About';import Contact from './pages/Contact';import NotFound from './pages/NotFound';
export default function App(){
 const loc=useLocation();useScrollTop();
 return(<><Header/><AnimatePresence mode="wait"><Routes location={loc} key={loc.pathname}>
  <Route path="/" element={<Home/>}/><Route path="/catalog" element={<Catalog/>}/><Route path="/product/:id" element={<Product/>}/>
  <Route path="/cart" element={<Cart/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/>
 </Routes></AnimatePresence><Footer/></>);
}
