import React from 'react';

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-'
          name='Bob'
          size={200}
        />
        <p>안녕하세요!</p>
      </Navbar>
    </div>
  );
}

function Navbar( {children} ) {
  return <header style={{ backgroundColor: 'gold' }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        arc={image}
        alt={`${name}'`}
        width={size}
        height={size}
        style={{ borderRadius: '50%' }}
      />
    </div>
  )
}