import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <h1>Wafles</h1>
    <Link to={"/create-human"}>
    <button>Create your slave</button>
    </Link>
    <Link to={"/people"}>
    <button>People for sale</button>
    </Link>
    <Link to={"/create-wafles"}>
    <button>Create wafles</button>
    </Link>
    </>
  )
}
