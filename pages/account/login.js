import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { Input, Form, Card, Icon } from 'semantic-ui-react';

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Layout title='User Login'>
            <Card>
                <Card.Content>
                    <Card.Header>
                        <Icon name='user circle' />
                        Login
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    
                </Card.Content>
            </Card>
        </Layout>
    )
}
