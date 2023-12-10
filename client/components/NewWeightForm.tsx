import React, { useState, ChangeEvent, FormEvent } from 'react';
import * as models from '../../models/Weight';
import { addWeight } from '../apiClient';

interface NewWeightFormProps {
  onAddWeight: (newWeight: models.Weight) => void;
}

const weightTemplate: models.newWeight = {
  date: '',
  weight: '',
  change: 0,
};

export function NewWeightForm({ onAddWeight }: NewWeightFormProps) {
  const [form, setForm] = useState(weightTemplate);

  function handleForm(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      // Add the new weight to the database
      const newWeight = await addWeight(form);

      // Update the form state
      setForm(weightTemplate);

      // Notify the parent component about the new weight
      if (onAddWeight) {
        onAddWeight(newWeight);
      }
    } catch (error) {
      console.error('Failed to add weight');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <h2>What is the date? (dd.mm.yy format)</h2>
          <input type="text" value={form.date} onChange={handleForm} name="date" />
        </label>

        <label>
          <h2>What is your weight?</h2>
          <input type="text" value={form.weight} onChange={handleForm} name="weight" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
