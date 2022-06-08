import React from 'react';

import Expenses from './component/Expenses/Expenses';

function App() {
  const expenses = [
    {
      id: 'exp1',
      title: 'CPU',
      amount: 75000,
      date: new Date(2022, 1, 23),
    },
    {
      id: 'exp2',
      title: ' Monitor',
      amount: 35000,
      date: new Date(2022, 1, 25),
    },
    {
      id: 'exp3',
      title: 'Computer Peripherals',
      amount: 14500,
      date: new Date(2022, 1, 27),
    },
    {
      id: 'exp4',
      title: ' Computer Desk',
      amount: 7000,
      date: new Date(2022, 1, 28),
    },
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
