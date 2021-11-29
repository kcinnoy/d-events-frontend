import Head from 'next/head';
import {useRouter} from 'next/router';
import styles from '@/styles/Layout.module.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Showcase from './Showcase';


export default function Layout({title, keywords, description, children}) {
    const router = useRouter();
   

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>

            <Navbar />
           {router.pathname === '/' && <Showcase />}
            <div className={styles.container}>
                {children}    
            </div>  
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'Events | Find the best events',
    description:  'Find the best hosts and venues',
    keywords: 'music, venues, events'
}