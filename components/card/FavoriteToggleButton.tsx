import React from 'react'
import { Button } from '../ui/button'
import { FaHeart } from 'react-icons/fa6'
import { auth } from '@clerk/nextjs/server'
import { CardSignInButton } from '../form/Buttons'
import { fetchFavoriteId } from '@/utils/actions'
import FavoriteToggleForm from './FavoriteToggleForm'

export const FavoriteToggleButton =async({ propertyId }: { propertyId: string }) => {
  const{userId}=auth()

  if (!userId) return <CardSignInButton/>;
  const favoriteId = await fetchFavoriteId({ propertyId });
  return (
    <FavoriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />
  )
}
