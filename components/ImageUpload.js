import { useState } from 'react';
import { API_URL } from '@/config/index';
import { Input, Form, Button, Icon } from 'semantic-ui-react';

export default function ImageUpload({evtId,ImageUpload}) {

    const [image, setImage] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
    }

    const handleFileChange = e => {}



    return (
        <div>
            <Form onSubmit={handleSubmit}>
                    <Form.Field >
                        <input type="file" id="file"  onChange={handleFileChange} />
                    </Form.Field>                
                <Form.Button>Upload</Form.Button>
            </Form>
        </div>
    )
}
