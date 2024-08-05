'use server';

import Buttons from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createProfileAction } from '@/utils/actions';
import { profileSchema } from '@/utils/schemas';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const ProfilePage = async() => {

  const user=await currentUser()
  if (user?.privateMetadata?.hasProfile) redirect('/');

 
  return (
    <section>
    <h1 className='text-2xl font-semibold mb-8 capitalize'>new user</h1>
    <div className='border p-8 rounded-md max-w-lg'>
      <FormContainer action={createProfileAction}>
        <div className='grid gap-4 mt-4 '>
          <FormInput type='text' name='firstName' label='First Name' />
          <FormInput type='text' name='lastName' label='Last Name' />
          <FormInput type='text' name='username' label='Username' />
        </div>
        <Buttons text='Create Profile' className='mt-8' />
      </FormContainer>
    </div>
  </section>
  )
}

export default ProfilePage