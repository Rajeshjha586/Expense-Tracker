import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const DUMY_EXPENSES = [
  {
    id: 1,
    title: "Samsung A21",
    amount: "15000",
    date: new Date(2021, 2, 18),
  },
  {
    id: 2,
    title: "Oppo Reno5",
    amount: "18999",
    date: new Date(2021, 2, 18),
  },
  {
    id: 3,
    title: "Realme 5g Pro",
    amount: "14500",
    date: new Date(2021, 3, 15),
  },
  {
    id: 4,
    title: "Redme Note 10pro",
    amount: "18999",
    date: new Date(2021, 8, 18),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
