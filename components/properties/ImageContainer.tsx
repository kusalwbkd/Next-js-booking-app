import Image from 'next/image';
import React from 'react'

const ImageContainer = ({
    mainImage,
    name,
  }: {
    mainImage: string;
    name: string;
  }) => {
  return (
    <section className='h-[300px] md:h-[800px] relative mt-8'>
         <Image
        src={mainImage}
        fill
        sizes='100vw'
        alt={name}
        className='object-cover  rounded-md'
        priority
      />
    </section>
  )
}

export default ImageContainer