import React from 'react'
import { Link } from 'react-router-dom'

export default function WafleListCell(props) {
  return (
    <>
        <Link to={`/wafle/${props._id}`}>
            <p>{props.name}</p>
        </Link>
    </>
  )
}