import React, {useState} from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

let Dummy_Expenses = [
        {
            id : 'e1',
            date : new Date(2022,4,12),
            title : "Smart Watch",
            amount : 800,
        },

        {
            id : 'e2',
            date : new Date(2023,12,30),
            title : "Books",
            amount : 300,
        },

        {
            id : 'e3',
            date : new Date(2018,6,11),
            title : "Food",
            amount : 200,
        },

        {
            id : 'e4',
            date : new Date(2016,3,8),
            title : "School Fee",
            amount : 900,
        }
];

let App = () => {

  const [expenses, newExpenses] = useState(Dummy_Expenses);

  let newExpenseDataHandler = (data) => {
      let update_expenses = [data, ...expenses];
      newExpenses(update_expenses);
  }

  return (
    <div>
        <h2>React Expense Tracker</h2>
        <NewExpense newExpenseData = {newExpenseDataHandler}/>
        <Expenses item = {expenses} />
    </div>
   
  );
}

export default App;