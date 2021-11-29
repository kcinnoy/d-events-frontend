import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import { Menu, Container, Button } from 'semantic-ui-react';

export default function Navbar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Link href='/' passHref>
                        <Menu.Item as='a' header>D-events</Menu.Item>
                </Link>
            </Container>
        </Menu>

        // <header className={styles.navbar}>
        //     <div className={styles.logo}>
        //         <Link href='/'>
        //             <a>Events</a>
        //         </Link>
        //     </div>
        //     <nav>
        //         <ul>
        //             <li>
        //                 <Link href='/events'>
        //                     <a>Events</a>
        //                 </Link>
        //             </li>
        //         </ul>
        //     </nav>

        // </header>
    );
}
