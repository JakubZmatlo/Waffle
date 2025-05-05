import React from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createProgramator } from '../../models/programators';

export default function CreateProgramator() {
    const [formData, setFormData] = useState();
    const navigate = useNavigate();

    const postForm = async () => {
        const data = await createProgramator(formData);
        if (data.status === 201) return navigate(`/created-programator/${data.payload._id}`);
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
        <h1>Create your programator</h1>
        <form>
            <input type="text" name="name" placeholder="Enter name" onChange={handleInput} />
            <input type="text" name="surname" placeholder="Enter surname" onChange={handleInput}/>
            <input type="text" name="language" placeholder="Enter programming language" onChange={handleInput}/>
            <input type="number" name="pay" placeholder="Enter pay" onChange={handleInput}/>
            <button onClick={handleButton}>
                Create programator
            </button>
        </form>
    </>
  )
}
