import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm(props) {
  // Multi-State Approach
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // Single-State Approach
  /*   const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  }); */

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    /*     setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    }); */
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    /*     setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    }); */
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    /*     setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    }); */
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
            required
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" onClick={props.onAddExpense}>
          Add Expense
        </button>
      </div>
      <div className="new-expense__actions"></div>
    </form>
  );
}

export default ExpenseForm;
