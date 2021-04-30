import React from 'react';
import { useParams } from 'react-router-dom';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: [-73.9878584, 40.7484405],
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: [-73.9878584, 40.7484405],
    creator: 'u2'
  }
];

const UpdatePlace = props => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  if(!identifiedPlace) {
    return <h2>Could not find place</h2>
  }
  return <h2>UpdatePlace</h2>
}

export default UpdatePlace;
