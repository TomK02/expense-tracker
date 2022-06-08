import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2022, 6, 8);

  return (
    <div className="expense-item">
      <div>June 8th 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">₱ 1500.00</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
