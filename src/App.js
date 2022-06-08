import ExpenseItem from './component/ExpenseItem';

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
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
