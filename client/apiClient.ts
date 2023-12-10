import request from 'superagent';

const weightAPIUrl = '/api/v1/weight/';

// Get all the weights currently inputed in the database
export async function getWeights() {
  const dbWeights = await request.get(weightAPIUrl);
  return dbWeights.body;
}

// Add a new weight taking into the database
export async function addWeight(inputWeight) {
  const response = await request.post(weightAPIUrl).send(inputWeight);
  console.log('Successfully added new weight.')
}

// Delete an existing weight already in the database
export async function deleteWeight(weightId) {
  const response = await request.delete(`${weightAPIUrl}${weightId}`);
  console.log('Successfully deleted weight.');
}
