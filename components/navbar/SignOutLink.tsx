'use client'

import React from 'react'
import { useToast } from '../ui/use-toast';
import { SignOutButton } from '@clerk/nextjs';

const SignOutLink = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: 'You have been signed out.' });
  };
  return (
    <SignOutButton redirectUrl='/'>
    <button className='w-full text-left' onClick={handleLogout}>
      Logout
    </button>
  </SignOutButton>
  )
}

export default SignOutLink