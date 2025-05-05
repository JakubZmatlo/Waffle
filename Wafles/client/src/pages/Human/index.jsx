import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getHumanById, deleteHuman } from '../../models/people'

export default function Human() {
    const { id } = useParams();
    const [human, setHuman] = useState();
    const [isLoaded, setLoaded]= useState(false);
    const [info, setInfo] = useState();
    const [formData, setFormData] = useState();
    const navigate = useNavigate();

    const load = async () => {
        const data = await getHumanById(id);
        if (data.status === 500 || data.status === 404) return setLoaded(null);
        if(data.status === 200){
            setLoaded(true);
            setHuman(data.payload);

        }
    }

    useEffect(() => {
        load();
    }, []);


  return (
    <>
        <h1>Your Human</h1>
    </>
  )
}
