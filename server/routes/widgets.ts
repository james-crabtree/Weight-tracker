// Helped with ChatGPT at times when I got stuck.

import express from 'express';
import { getWeight, addWeight, deleteWeight } from '../db/db.ts';

const router = express.Router();

// Default 
// Gets the list of all existing weights in the database
router.get('/', async (req, res) => {
  try {
    const widgets = await getWeight();
    res.json(widgets);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error getting the list of weights.');
      }
});

// POST new weight reading
// Adds a new weight to the database
router.post('/', async (req, res) => {
  const inputWeight = req.body;
    try {
      const newWeight = await addWeight(inputWeight);
      res.status(201).json(newWeight);
        } catch (error) {
          console.error(error);
          res.status(500).send('Error adding weight to database');
        }
});


// DELETE existing weight reading
// Delete an already exisiting weight reading in the database
router.delete('/:id', async (req, res) => {
  const weightId = Number(req.params.id);

  try {
    await deleteWeight(weightId);
    res.status(204).send(); // 204 No Content for a successful delete
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting weight from the database');
  }
});


export default router;
