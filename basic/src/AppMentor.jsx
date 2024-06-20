import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: 'inhwa',
    title: 'Developer',
    mentor: {
      name: 'bob',
      title: 'SeniorDeveloper',
    },
  });
  return (
    <div>
      <h1>
        {person.name}is {person.title}
      </h1>
      <p>
        {person.name}'s mentor is {person.mentor.name} ({person.mentor.title})
      </p>
      <button onClick={() => {
        const name = prompt(`what's your mentor's name?`)
        setPerson((person) => ({...person, mentor: {...person.mentor, name},}));
      }}>
        mentor's name change
      </button>
      <button onClick={() => {
        const title = prompt(`what's your mentor's title?`)
        setPerson((person) => ({...person, mentor: {...person.mentor, title},}));
      }}>
        mentor's title change
      </button>
    </div>
  )
}