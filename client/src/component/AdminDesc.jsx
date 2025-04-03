import React, { useState, useRef } from 'react';
import axios from 'axios';
import AdminProductUploadMulti from '../component/AdminProductUploadMulti.jsx';
import { useNavigate } from 'react-router-dom';

export default function AdminDesc() {
    const navigate = useNavigate();
    const [fnames, setFnames] = useState({});
    let [formData, setFormData] = useState({});
    const [preview, setPreview] = useState('');
    const productNameRef = useRef(null);
    const [previewList, setPreviewList] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({ ...formData, [name]: value });
    }

    const getFileName = (filesNames) => {
        setFnames(filesNames);
        setPreview(`http://localhost:9000/${filesNames.uploadFileName}`);
        setPreviewList(filesNames.uploadFileName);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (productNameRef.current.value === '') {
            alert('상품번호를 입력해주세요.');
            productNameRef.current.focus();
            return false;
        } else {
            formData = ({
                ...formData, 'upload_file': fnames.uploadFileName,
                'source_file': fnames.sourceFileName
            });

            axios.post('http://localhost:9000/uploads/dbDescUpload', formData)
                .then(res => {
                    if (res.data.result_rows === 1) {
                        alert('상품등록 완료');
                        navigate('/');
                    } else {
                        alert('상품등록 실패');
                    }
                    console.log('res===', res.data);
                })
                .catch(error => {
                    alert('상품등록 실패');
                    console.log(error);
                });
        }
    }

    return (
        <div className='admin-flex'>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <label>상품번호</label>
                            <input type="text" name='pid'
                                onChange={handleChange}
                                ref={productNameRef}
                            />
                        </li>
                        <li>
                            <label htmlFor="">이미지 업로드(멀티) </label>
                            <AdminProductUploadMulti getFileName={getFileName} />
                        </li>
                        {previewList && previewList.map((preview) =>
                            <img src={`http://localhost:9000/${preview}`} alt="미리보기" style={{ 'width': '200px' }} />
                        )}
                        <li>
                            <input type="hidden" name='uploadFile' value={fnames.uploadFileName} />
                            <input type="hidden" name='sourceFile' value={fnames.sourceFileName} />
                        </li>
                        <li>
                            <button type='submit'>상품등록</button>
                            <button type='reset'>취소</button>
                        </li>
                    </ul>
                </form>                
            </div>
    );
}

