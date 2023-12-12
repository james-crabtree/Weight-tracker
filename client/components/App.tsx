import { useState, useEffect } from 'react';
import { getWeights, deleteWeight } from '../apiClient';
import { NewWeightForm } from './NewWeightForm';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import WeightComponent from './Weight';

function App() {
  const {
    data: weights,
    error,
    isLoading,
  } = useQuery({ queryKey: ['weights'], queryFn: getWeights })

  if (error) {
    return <p>There was an error loading your weights! Maybe you're to fat bro?</p>
  }

  if (!weights || isLoading) {
    return <p>Loading your weights :D</p>
  }

  return (
    <div>
      <h1>James Crabtree weights</h1>

      {weights.map((weightData) => (
        <WeightComponent weightData={weightData}/> 
      ))}

      <NewWeightForm />
    </div>
  );
}

export default App;
