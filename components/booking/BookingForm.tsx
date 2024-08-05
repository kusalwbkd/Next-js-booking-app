import { calculateTotals } from '@/utils/calculateTotals';
import { useProperty } from '@/utils/store';
import React from 'react'
import { Card, CardTitle } from '../ui/card';
import { Separator } from '@radix-ui/react-dropdown-menu';
import FormRow from '../form/FormRow';

const BookingForm = () => {
  const { range, price } = useProperty((state) => state);
  const checkIn = range?.from as Date;
  const checkOut = range?.to as Date;

  const { totalNights, subTotal, cleaning, service, tax, orderTotal } =
  calculateTotals({
    checkIn,
    checkOut,
    price,
  })
  return (
    <Card className='p-8 mb-4'>
    <CardTitle className='mb-8'>Summary </CardTitle>
    <FormRow label={`$${price} x ${totalNights} nights`} amount={subTotal} />
    <FormRow label='Cleaning Fee' amount={cleaning} />
    <FormRow label='Service Fee' amount={service} />
    <FormRow label='Tax' amount={tax} />
    <Separator className='mt-4' />
    <CardTitle className='mt-8'>
      <FormRow label='Booking Total' amount={orderTotal} />
    </CardTitle>
  </Card>
  )
}

export default BookingForm