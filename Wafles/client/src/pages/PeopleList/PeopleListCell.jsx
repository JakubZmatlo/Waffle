import React from 'react'
import { Link } from 'react-router-dom'

export default function PeopleListCell(props) {
  return (
    <>
        <Link to={`/human/${props._id}`}>
            <p>{props.name}</p>
        </Link>
    </>
  )
}
