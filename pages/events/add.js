import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import { Input, Form } from 'semantic-ui-react';
//import SemanticDatepicker from 'react-semantic-ui-datepickers';
//import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
//import styles from '@/styles/Form.modules.css';

export default function AddEventPage() {
    const [values, setValues] = useState({
        name: '',
        performers: '',
        venue: '',
        address: '',
        date: '',
        time: '',
        description: ''
    });

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        //validation
        const hasEmptyFields = Object.values(values).some(
            (element) => element === ''
        )

        if (hasEmptyFields) {
            toast.error('Please fill in all fields')
        }

        const res = await fetch(`${API_URL}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(values)
        })

        if(!res.ok) {
            toast.error('Something went wrong')
        } else {
            const evt = await res.json()
            router.push(`/events/${evt.slug}`)
        }


    };

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <Layout title='Add New Event'>
            <Link href='/events'>Go back</Link>
            <h1>Add Event</h1>
            <ToastContainer />
            <Form onSubmit={handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field
                        control={Input}
                        id='name'
                        name='name'
                        label='Event Name'
                        placeholder='Event name'
                        value={values.name}
                        onChange={handleInputChange}
                    />
                    <Form.Field
                        control={Input}
                        id='performers'
                        name='performers'
                        label='Performers'
                        placeholder='Performers'
                        value={values.performers}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        control={Input}
                        id='venue'
                        name='venue'
                        label='Venue'
                        placeholder='Venue'
                        value={values.venue}
                        onChange={handleInputChange}
                    />
                    <Form.Field
                        control={Input}
                        id='address'
                        name='address'
                        label='Address'
                        placeholder='Address'
                        value={values.address}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Field
                        type='date'
                        control={Input}
                        id='date'
                        name='date'
                        label='Date'
                        placeholder='Date'
                        format='D-MMM-YYYY'
                        value={values.date}
                        onChange={handleInputChange}
                    />

                    <Form.Field
                        control={Input}
                        id='time'
                        name='time'
                        label='Time'
                        placeholder='Time'
                        value={values.time}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.TextArea
                    id='description'
                    name='description'
                    label='Description'
                    placeholder='Description'
                    value={values.description}
                    onChange={handleInputChange}
                />
                <Form.Button>Add Event</Form.Button>
            </Form>
        </Layout>
    );
}
