import React from 'react';
import PetCard from '../components/PetCard';
import './Adoption.css';

const pets = [
  {
    id: 1,
    name: 'Fluffy',
    age: 2,
    breed: 'Labrador',
    description: 'A friendly and playful dog.',
    image: '/public/Pictures/1.png',
  },
  {
    id: 2,
    name: 'Whiskers',
    age: 3,
    breed: 'Siamese Cat',
    description: 'Loves to nap in the sun.',
    image: '/public/Pictures/vet.png',
  },
  {
    id: 3,
    name: 'Buddy',
    age: 1,
    breed: 'Golden Retriever',
    description: 'Full of energy and love.',
    image: '/public/Pictures/service1.png',
  },
];

const Adoption = () => {
  return (
    <div className="adoption-container">
      <h1>Pet Adoption</h1>
      <div className="pet-grid">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Adoption; 