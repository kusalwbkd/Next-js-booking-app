import React from 'react'
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';



type TextAreaInputProps = {
    name: string;
    labelText?: string;
    defaultValue?: string;
  };

  
const TextAreaInput = ({name,labelText,defaultValue}:TextAreaInputProps) => {
  return (
    <div className='mb-2'>
    <Label htmlFor={name} className='capitalize'>
      {labelText || name}
    </Label>
    <Textarea
      id={name}
      name={name}
      defaultValue={defaultValue || tempDefaultDescription}
      rows={5}
      required
      className='leading-loose'
    />
  </div>
  )
}
const tempDefaultDescription= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, consectetur perspiciatis praesentium commodi laboriosam animi facere alias suscipit ex voluptate aut quos eligendi quidem porro earum illo sit officia. Ipsam?'

export default TextAreaInput