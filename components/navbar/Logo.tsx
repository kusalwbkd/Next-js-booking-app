import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FaHouseFlag } from "react-icons/fa6";
const Logo = () => {
  return (
    <Button size='icon' asChild>
    <Link href='/'>
    <FaHouseFlag className='w-6 h-6' />
    </Link>
  </Button>
  )
}

export default Logo