import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { Input, Form, Card, Icon, Container, Grid } from 'semantic-ui-react';
import AuthContext from '@/context/AuthContext';


export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const {register, error} = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault();

        if (password !== passwordConfirm) {
            toast.error('Passwords do not match!')
            return
        }
        register({username, email, password})
    }

    return (
        <Layout title='User Registration'>
            <Card ui centered style={{marginTop: 30}}>
                <Card.Content>
                    <Card.Header>
                        <Icon name='user circle' />
                        Register
                    </Card.Header>
                    <ToastContainer />
                </Card.Content>
                <Card.Content>
                    <Form onSubmit={handleSubmit}>
                    <Form.Field
                            type='text'
                            control={Input}
                            id='username'
                            //name='name'
                            label='Username'
                            //placeholder=''
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Form.Field
                            type='email'
                            control={Input}
                            id='email'
                            //name='name'
                            label='Email Address'
                            placeholder='Enter emial'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Field
                            type='password'
                            control={Input}
                            id='password'
                            //name='name'
                            label='Password'
                            ///placeholder=''
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                         <Form.Field
                            type='password'
                            control={Input}
                            id='passwordConfirm'
                            //name='name'
                            label='Confirm Password'
                            ///placeholder=''
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />
                        <Form.Button>Register</Form.Button>
                    </Form>
                </Card.Content>
                <Card.Content>
                    Already have an account? &nbsp; <Link href='/account/login'>Login</Link>
                </Card.Content>
            </Card>
        </Layout>
    );
}
