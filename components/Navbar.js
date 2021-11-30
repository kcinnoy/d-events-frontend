import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import { Menu, Container, Button, Input } from 'semantic-ui-react';
import Search from './Search';

export default function Navbar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Link href='/' passHref>
                    <Menu.Item as='a' header>
                        D-events
                    </Menu.Item>
                </Link>
                
                <Search />
                <Link href='/events' passHref>
                    <Menu.Item as='a' header >
                        Events
                    </Menu.Item>
                </Link>
                <Link href='/events/add' passHref>
                    <Menu.Item as='a' header >
                        Add Event
                    </Menu.Item>
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
