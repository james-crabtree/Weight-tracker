import { getWeights, deleteWeight } from '../apiClient';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function WeightComponent(weightDataProps) {
  const {weightData} = weightDataProps

  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: deleteWeight,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['weights'],
      })
    },
  })

  async function handleDelete(weightId: string) {
    await deleteMutation.mutate(weightId);
  }

return (
  <div key={weightData.id}>
<h2>{weightData.date}</h2>
<ul>
  <li>
    <strong>Recorded weight: </strong>
    {weightData.weight}
  </li>
</ul>
<button onClick={() => handleDelete(weightData.id)}>Delete</button>
<hr />
</div>
)}