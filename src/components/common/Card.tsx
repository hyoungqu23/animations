import Image from 'next/image';
import React, { ComponentProps } from 'react';

interface ICardProps extends ComponentProps<'div'> {
  title: string;
  image?: { src: string; alt: string };
}

const Card = ({ title, image }: ICardProps) => {
  return (
    <div className='relative w-[400px] rounded-2xl overflow-hidden h-[300px] flex items-center justify-center border-8 border-black'>
      {image ? (
        <Image src={image.src} alt={image.alt} fill className='object-cover' />
      ) : null}
      <h2 className='text-3xl font-bold'>{title}</h2>
    </div>
  );
};

export default Card;
