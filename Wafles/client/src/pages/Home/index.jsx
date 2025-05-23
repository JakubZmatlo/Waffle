import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

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
    <Button>Button</Button>
    </Link>
    </>
  )
}
