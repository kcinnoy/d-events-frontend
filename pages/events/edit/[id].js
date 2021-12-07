import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import Modal from '@/components/Modal';
import ImageUpload from '@/components/ImageUpload';
import { API_URL } from '@/config/index';
import { Input, Form, Button, Icon } from 'semantic-ui-react';

export default function EditEventPage({ evt }) {
    const [values, setValues] = useState({
        name: evt.name,
        performers: evt.performers,
        venue: evt.venue,
        address: evt.address,
        date: evt.date,
        time: evt.time,
        description: evt.description
    });

    const [imagePreview, setImagePreview] = useState(
        evt.image ? evt.image.formats.thumbnail.url : null
    );

    const [showModal, setShowModal] = useState(false)

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        //validation
        const hasEmptyFields = Object.values(values).some(element => element === '');

        if (hasEmptyFields) {
            toast.error('Please fill in all fields');
        }

        const res = await fetch(`${API_URL}/events/${evt.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });

        if (!res.ok) {
            toast.error('Something went wrong');
        } else {
            const evt = await res.json();
            router.push(`/events/${evt.slug}`);
        }
    };

    const handleInputChange = async e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const imageUploaded = async e => {
        const res = await fetch(`${API_URL}/events/${evt.id}`)
        const data = await res.json()
        setImagePreview(data.image.formats.thumbnail.url)
        setShowModal(false)
        
    }

    return (
        <Layout title='Add New Event'>
            <Link href='/events'>Go back</Link>
            <h1>Edit Event</h1>
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
                        format='DD-MM-yyyy'
                        value={moment(values.date).format('yyyy-MM-DD')}
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
                <Form.Button>Update Event</Form.Button>
            </Form>

            <h2>Event Image</h2>
            {imagePreview ? (
                <Image src={imagePreview} height={100} width={170} />
            ) : (
                <div>
                    <p>No image</p>
                </div>
            )}

            <div style={{marginTop: 20}}>
            
                <Button icon labelPosition='left' onClick={() => setShowModal(true)} >
                    <Icon name='image' />
                    Add Image
                </Button>
            </div>

            <Modal show={showModal} onClose={() => setShowModal(false)} >
            <ImageUpload evtId={evt.id} imageUploaded={imageUploaded}/>

                    
            </Modal>
        </Layout>
    );
}

export async function getServerSideProps({ params: { id } }) {
    const res = await fetch(`${API_URL}/events/${id}`);
    const evt = await res.json();

    return {
        props: { evt }
    };
}

// export async function getServerSideProps({ params: { id } }) {
//     const res = await fetch(`${API_URL}/events/${id}`)
//     const evt = await res.json()

//     return {
//       props: {
//         evt,
//       },
//     }
//   }
