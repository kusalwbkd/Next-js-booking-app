'use client'

import React, { useState } from 'react'
import { Card } from '../ui/card';
import FormContainer from '../form/FormContainer';
import { createReviewAction } from '@/utils/actions';
import TextAreaInput from '../form/TextAreaInput';
import RatingInput from '../form/RatingInput';
import Buttons from '../form/Buttons';
import { Button } from '../ui/button';

const SubmitReview = ({ propertyId }: { propertyId: string }) => {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);

 
  return (
    <div className='mt-8'>
      <Button onClick={() => setIsReviewFormVisible((prev) => !prev)}>
        Leave a Review
      </Button>
      {isReviewFormVisible && (
        <Card className='p-8 mt-8'>
          <FormContainer action={createReviewAction}>
            <input type='hidden' name='propertyId' value={propertyId} />
            <RatingInput name='rating' />
            <TextAreaInput
              name='comment'
              labelText='your thoughts on this property'
              defaultValue='Amazing place !!!'
            />
            <Buttons text='Submit' className='mt-4' />
          </FormContainer>
        </Card>
      )}
    </div>
  );
  
}

export default SubmitReview