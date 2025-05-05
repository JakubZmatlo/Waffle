import React from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createHuman } from '../../models/people';

export default function CreateHuman() {
    const [formData, setFormData] = useState();
    const navigate = useNavigate();

    const postForm = async () => {
        const data = await createHuman(formData);
        if (data.status === 201) return navigate(`/created-human/${data.payload._id}`);
    }

    const handleInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleButton = (e) => {
        e.preventDefault();
        postForm();
    }

  return (
    <>
        <h1>Create your slave</h1>
        <form>
            <input type="text" name="name" placeholder="Enter name" onChange={handleInput} />
            <input type="text" name="address" placeholder="Enter address" onChange={handleInput}/>
            <input type="number" name="age" placeholder="Enter age" onChange={handleInput}/>
            <button onClick={handleButton}>
                Create Wafle
            </button>
        </form>
    </>
  )
}
