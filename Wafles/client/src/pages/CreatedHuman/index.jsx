import React from 'react'
import { Link, useParams } from 'react-router-dom'


export default function CreatedHuman() {
  const { id } = useParams();

  return (
   <>
        <h1>Created Human</h1>
        <p>Your Human was created: <Link to={`/human/${id}`}>{id}</Link></p>
        <Link to={"/"}><button>Go home</button></Link>
   </>
  )
}
