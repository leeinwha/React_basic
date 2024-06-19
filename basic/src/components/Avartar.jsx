import React from 'react';

export default function Avartar({ image, isNew }) {
  return(
    <div>
      <img className='photo' src={image} alt='avarat'/>
      {isNew && <span className='new'>New</span>}
    </div>
  )
}