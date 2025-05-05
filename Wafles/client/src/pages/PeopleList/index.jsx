import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllPeople } from '../../models/people'
import PeopleListCell from './PeopleListCell'

export default function PeopleList() {
    const [people, setPeople] = useState();
    const [isLoaded, setLoaded] = useState(false);

    const load = async () => {
        const data = await getAllPeople();
        if (data.status === 500 || data.status === 404) return setLoaded(null);
        if (data.status === 200) {
            setLoaded(true);
            setPeople(data.payload);
        }
    }

    useEffect(() => {
        load();
    }, []);

    if (isLoaded === null) {
        return (
            <>
                <p>People not found</p>
            </>
        )
    }

    if (!isLoaded) {
        return (
            <>
                <p>People are loading...</p>
            </>
        )
    }

  return (
    <>
        <h1>People for sale</h1>
        {
            people.map((human, index) => (
                <PeopleListCell key={index} {...human} />
            ))
        }
        <Link to={"/"}>
        <button>Go home</button>
        </Link>
    </>
  )
}
