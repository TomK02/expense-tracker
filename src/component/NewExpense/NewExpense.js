import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const [isActive, setIsActive] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 1000000000000).toString(),
    };
    console.log(expenseData);
    setIsActive(false);

    // onAddExpense is a function of the parent component
    props.onAddExpense(expenseData);
  }

  const cancelButton = () => {
    setIsActive(false);
  };

  return (
    <div className="new-expense">
      {isActive === true ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelButton}
        />
      ) : (
        <button
          onClick={() => {
            setIsActive(true);
          }}
        >
          Add New Expense
        </button>
      )}
    </div>
  );
}
export default NewExpense;
