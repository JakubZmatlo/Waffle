import React from 'react'
import { Link, useParams } from 'react-router-dom'


export default function CreatedProgramator() {
  const { id } = useParams();

  return (
   <>
        <h1>Created Programator</h1>
        <p>Your Programator was created: <Link to={`/programator/${id}`}>{id}</Link></p>
        <Link to={"/"}><button>Go home</button></Link>
   </>
  )
}
