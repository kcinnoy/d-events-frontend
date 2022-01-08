import { useState, useEffect } from 'react';
import { API_URL } from '@/config/index';
import { Input, Form, Button, Icon } from 'semantic-ui-react';

export default function ImageUpload({ evtId, imageUploaded, token }) {
    const [image, setImage] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('files', image);
        formData.append('ref', 'events');
        formData.append('refId', evtId);
        formData.append('field', 'image');

        const res = await fetch(`${API_URL}/upload`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData,
        });

        if (res.ok) {
            imageUploaded();
        }
    };

    // useEffect(() => {
    //     console.log('image:');
    //     console.log(image);
    //   }, [image]);

    const handleFileChange = e => {
        
        //console.log(e.target.files[0])
        setImage(e.target.files[0]);
        
       
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <input type='file' id='file' onChange={handleFileChange} />
                </Form.Field>
                <Form.Button >Upload</Form.Button>
            </Form>
        </div>
    );
}
