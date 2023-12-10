import connection from './connection.ts';
import { Weight, newWeight } from '../../models/Weight.ts';


// Get the current weights in the database
export function getWeight(db = connection): Promise<Weight[]> {
  return db<Weight>('weight').select();
}


// Add a new weight to the database
export function addWeight(inputWeight: newWeight, db = connection): Promise<Weight> {
  return db<Weight>('weight').insert(inputWeight).returning('*');
}


// Delete an exisiting weight already in the database
export function deleteWeight(weightId: number, db = connection): Promise<void> {
  return db<Weight>('weight').where({ id: weightId }).del();
}
