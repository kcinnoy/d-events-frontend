import Link from 'next/link';
import {useContext} from 'react';
import styles from '@/styles/Navbar.module.css';
import { Menu, Container, Button, Input, Icon } from 'semantic-ui-react';
import Search from './Search';
import AuthContext from '@/context/AuthContext';

export default function Navbar() {
    const {user, logout} = useContext(AuthContext)

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
                {user ? (
                    <>
                        <Link href='/events/add' passHref>
                            <Menu.Item as='a' header >
                                Add Event
                            </Menu.Item>
                        </Link>
                        <Link href='/account/dashboard' passHref>
                            <Menu.Item as='a' header >
                                Dashboard
                            </Menu.Item>
                        </Link>
                            <Menu.Item 
                                onClick={() => logout()}
                            >
                                <Icon name='user circle' />
                                Logout
                            </Menu.Item>
                    </> 
               ) : (<>
                 <Link href='/account/login' passHref>
                    <Menu.Item as='a' header >
                    <Icon name='user circle' />
                        Login
                    </Menu.Item>
                </Link>
                
               </>)}
               
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
