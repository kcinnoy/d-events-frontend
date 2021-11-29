import styles from '@/styles/Search.module.css';
import {useState} from 'react';
import { useRouter } from 'next/router';
import { Input, Form, Menu } from 'semantic-ui-react';


export default function Search() {
    const [term, setTerm] = useState('');

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/events/search?term=${term}`)
        setTerm('')
    }


    // <Menu.Menu position='right'>
    //                 <Menu.Item>
    //                     <Input icon='search' placeholder='Search...' />
    //                 </Menu.Item>
    //             </Menu.Menu>

    return (
        // <div className={styles.search}>
        //     <form onSubmit={handleSubmit}>
        //         <input type='text' value={term} onChange={(e) => setTerm(e.target.value)} />
        //     </form>
        // </div>


<>
    <Menu.Menu position='right' size={'large'}>
        <Menu.Item>
            <Form onSubmit={handleSubmit}>
                <Form.Input icon='search' placeholder='Search events...' value={term} onChange={(e) => setTerm(e.target.value)}  />
            </Form> 
        </Menu.Item>
    </Menu.Menu>
    
</> 
    )
}
