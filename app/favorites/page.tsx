import EmptyList from '@/components/home/EmptyList';
import PropertiesList from '@/components/home/PropertiesList';
import { fetchFavorites } from '@/utils/actions';
import React from 'react'

const Favoritespage = async() => {
  const favorites = await fetchFavorites();
  if (favorites.length === 0) {
    return <EmptyList />;
  }
  return <PropertiesList properties={favorites} />;
}

export default Favoritespage