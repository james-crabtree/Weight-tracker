
export async function seed(knex) {
  await knex('weight').del()
  await knex('weight').insert([
    {id: 1, date: '21.11.23', weight: '80.8kg' , change: 0},
    {id: 2, date: '22.11.23', weight: '80.7kg', change: 0.1},
    {id: 3, date: '24.11.23', weight: '80.8kg' , change: 0.1},
    {id: 4, date: '26.11.23', weight: '79.6kg' , change: 1.2},
    {id: 5, date: '27.11.23', weight: '79.1kg' , change: 0.5},
    {id: 6, date: '29.11.23', weight: '80.5kg' , change: 1.4},
    {id: 7, date: '01.12.23', weight: '80.4kg' , change: 0.1},
    {id: 8, date: '02.12.23', weight: '78.1kg' , change: 1.3},
    {id: 9, date: '05.12.23', weight: '78.5kg' , change: 0.4},
  ]);
};
