'use client';
import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { usePathname, useSearchParams,useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
const NavSearch = () => {
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get('search')?.toString() || ''
  );

  const handleSearch=useDebouncedCallback((value: string)=>{
const params=new URLSearchParams(searchParams)


if (value) {
  params.set('search', value);
} else {
  params.delete('search');
}
replace(`${pathname}?${params.toString()}`);
}, 300);
useEffect(() => {
if (!searchParams.get('search')) {
  setSearch('');
}
}, [searchParams.get('search')]);
 
  return (
    <Input
    type='search'
    placeholder='find a property...'
    className='max-w-xs dark:bg-muted '
    onChange={(e) => {
      setSearch(e.target.value);
      handleSearch(e.target.value);
    }}
  />
  )
}

export default NavSearch