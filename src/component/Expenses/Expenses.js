import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2022');

  function expenseFilterHandler(selectedYear) {
    console.log('expense.js');
    console.log(selectedYear);
    setFilterYear(selectedYear);
  }

  const expenseFilteredByYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={filterYear}
        onChangeFilter={expenseFilterHandler}
      />
      <ExpensesChart expenses={expenseFilteredByYear} />
      <ExpensesList items={expenseFilteredByYear} />
    </Card>
  );
}

export default Expenses;
