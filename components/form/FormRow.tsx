import { formatCurrency } from '@/utils/format';
import React from 'react'

const FormRow = ({ label, amount }: { label: string; amount: number }) => {
  return (
    <p className='flex justify-between text-sm mb-2'>
    <span>{label}</span>
    <span>{formatCurrency(amount)}</span>
  </p>
  )
}

export default FormRow