import React from 'react';

import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense';

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

  function addExpenseHandler(expense) {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
