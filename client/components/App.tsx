import { useState, useEffect } from 'react';
import { getWeights, deleteWeight } from '../apiClient';
import { NewWeightForm } from './NewWeightForm';

function App() {
  const [weights, setWeights] = useState([] as Weight[]);

  useEffect(() => {
    // Fetch weights when the component mounts
    callGetWeights();
  }, []); // Empty dependency array ensures the effect runs only once (on mount)

  async function callGetWeights() {
    try {
      const dbWeights = await getWeights();
      setWeights(dbWeights);
    } catch (error) {
      console.error('Failed to load list of weights');
    }
  }

  async function handleDelete(weightId: string) {
    try {
      await deleteWeight(weightId);
      // Reload the weights after the delete
      callGetWeights();
    } catch (error) {
      console.error('Failed to delete weight');
    }
  }

  return (
    <div>
      <h1>James Crabtree weights</h1>

      {weights.map((weightData) => (
        <div key={weightData.id}>
          <h2>{weightData.date}</h2>
          <ul>
            <li>
              <strong>Recorded weight: </strong>
              {weightData.weight}
            </li>
            <li>
              <strong>Change: </strong>
              {weightData.change}
            </li>
          </ul>
          <button onClick={() => handleDelete(weightData.id)}>Delete</button>
          <hr />
        </div>
      ))}

      <NewWeightForm />
    </div>
  );
}

export default App;
