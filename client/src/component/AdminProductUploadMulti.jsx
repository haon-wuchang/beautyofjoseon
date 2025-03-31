import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';


export default function AdminProductUploadMulti({getFileName}) {
    const [oldFile,setOldFile] = useState([]); 

    const handleFileUploadMultiple = (e) => {
        const formData = new FormData();
        const files = e.target.files;
        // console.log('files==>', files);
        for (const file of files) {
            formData.append('files', file);
        }
        formData.append ( 'oldFiles',oldFile ) ;  // 
        axios.post(`http://localhost:9000/uploads/multiple?maxFiles=${files.length}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(res => {
                // console.log('업로드성공',res.data);
                getFileName(res.data);
                setOldFile(res.data.oldFile);
            })
            .catch(error => console.log(error));    
}


return (
    <div >
        <Form.Control type='file'
            onChange={(e) => { handleFileUploadMultiple(e) }}
            multiple />
    </div>
);
}

