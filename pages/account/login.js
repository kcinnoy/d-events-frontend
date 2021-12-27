import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import AuthContext from '@/context/AuthContext';
import { Input, Form, Card, Icon } from 'semantic-ui-react';


export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const { login, error } = useContext(AuthContext)
  
    useEffect(() => error && toast.error(error))
  
    const handleSubmit = (e) => {
        console.log('form submitted')
      e.preventDefault()
      login({ email, password })
    }

    return (
        <Layout title='User Login'>
            <Card centered style={{marginTop: 30}}>
                <Card.Content>
                    <Card.Header>
                        <Icon name='user circle' />
                        Login
                    </Card.Header>
                    <ToastContainer />
                </Card.Content>
                <Card.Content>
                    <Form onSubmit={handleSubmit}>
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
                        <Form.Button>Login</Form.Button>
                    </Form>
                </Card.Content>
                <Card.Content>
                    Don't have an account? &nbsp; <Link href='/account/register'>Register</Link>
                </Card.Content>
            </Card>
        </Layout>
    );
}




