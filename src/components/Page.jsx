import {motion} from 'framer-motion';
export default function Page({children}){return <motion.main initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:.35}} className="pt-16 min-h-screen">{children}</motion.main>}
