import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllwafle } from '../../models/wafle'
import WafleListCell from './WafleListCell'

export default function wafleList() {
    const [wafle, setwafle] = useState();
    const [isLoaded, setLoaded] = useState(false);

    const load = async () => {
        const data = await getAllwafle();
        if (data.status === 500 || data.status === 404) return setLoaded(null);
        if (data.status === 200) {
            setLoaded(true);
            setwafle(data.payload);
        }
    }

    useEffect(() => {
        load();
    }, []);

    if (isLoaded === null) {
        return (
            <>
                <p>wafle not found</p>
            </>
        )
    }

    if (!isLoaded) {
        return (
            <>
                <p>wafle are loading...</p>
            </>
        )
    }

  return (
    <>
        <h1>wafle for sale</h1>
        {
            wafle.map((human, index) => (
                <wafleListCell key={index} {...human} />
            ))
        }
        <Link to={"/"}>
        <button>Go home</button>
        </Link>
    </>
  )
}