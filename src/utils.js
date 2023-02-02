import uniqid from 'uniqid';

export const Players = {
  array: [
    { firstName: 'Damian', lastName: 'Lillard', selected: false, id: uniqid() },
    {
      firstName: 'Donovan',
      lastName: 'Mitchell',
      selected: false,
      id: uniqid(),
    },
    {
      firstName: 'Giannis',
      lastName: 'Antetokounmpo',
      selected: false,
      id: uniqid(),
    },
    { firstName: 'Ja', lastName: 'Morant', selected: false, id: uniqid() },
    { firstName: 'Jayson', lastName: 'Tatum', selected: false, id: uniqid() },
    { firstName: 'Jimmy', lastName: 'Butler', selected: false, id: uniqid() },
    { firstName: 'Joel', lastName: 'Embiid', selected: false, id: uniqid() },
    { firstName: 'Kevin', lastName: 'Durant', selected: false, id: uniqid() },
    { firstName: 'Kyrie', lastName: 'Irving', selected: false, id: uniqid() },
    { firstName: 'Lebron', lastName: 'James', selected: false, id: uniqid() },
    { firstName: 'Luka', lastName: 'Doncic', selected: false, id: uniqid() },
    { firstName: 'Nikola', lastName: 'Jokic', selected: false, id: uniqid() },
  ],
};

export const Score = {
  currentScore: 0,
  bestScore: 0,
};
