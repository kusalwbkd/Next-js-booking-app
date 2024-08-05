'use client'

import { Calendar } from '@/components/ui/calendar';
import React, { useEffect, useState } from 'react'
import { DateRange } from 'react-day-picker';

import {
  generateDisabledDates,
  generateDateRange,
  defaultSelected,
  generateBlockedPeriods,
} from '@/utils/calendar';
import { useProperty } from '@/utils/store';
import { useToast } from '../ui/use-toast';

const BookingCalendar = () => {
  const currentDate = new Date();

  const bookings = useProperty((state) => state.bookings);
  const blockedPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  });
  
  const { toast } = useToast();
  const unavailableDates = generateDisabledDates(blockedPeriods);
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
 
  useEffect(() => {
    const selectedRange = generateDateRange(range);
    const isDisabledDateIncluded =selectedRange.some((date)=>{
      if (unavailableDates[date]) {
        setRange(defaultSelected);
        toast({
          description: 'Some dates are booked. Please select again.',
        });
        return true;
      }
      return false;
    })
    useProperty.setState({ range });
  }, [range]);

  return (
    <Calendar
      id='test'
      mode='range'
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      disabled={blockedPeriods}
    />
  );
}

export default BookingCalendar