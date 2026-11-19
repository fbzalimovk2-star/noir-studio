import {Link} from 'react-router-dom';import Page from '../components/Page';
export default function NotFound(){return <Page><div className="wrap py-32 text-center"><p className="display text-9xl">404</p><p className="mt-4 text-ash">Такой страницы нет.</p><Link to="/" className="btn mt-8">На главную</Link></div></Page>}
