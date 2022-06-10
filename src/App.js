import React, { useState } from 'react';

import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'exp1',
    title: 'Desktop',
    amount: 175000,
    date: new Date(2019, 1, 23),
  },
  {
    id: 'exp2',
    title: ' LCD TV',
    amount: 135000,
    date: new Date(2020, 3, 25),
  },
  {
    id: 'exp3',
    title: 'Car',
    amount: 2450000,
    date: new Date(2021, 1, 27),
  },
  {
    id: 'exp4',
    title: ' Refrigerator',
    amount: 85000,
    date: new Date(2021, 5, 22),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
