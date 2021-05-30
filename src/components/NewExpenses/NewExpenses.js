import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpenses.css";

const NewExpenses = (props) => {
  const [active, setActive] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setActive(false);
  };

  const startEditingHandler = () => {
    setActive(true);
  };

  const stopEditingHandler = () => {
    setActive(false);
  };

  return (
    <div className="new-expense">
      {!active && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {active && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
