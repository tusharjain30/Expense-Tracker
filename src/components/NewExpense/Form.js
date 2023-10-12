import React, {useState} from 'react';
import './Form.css';

let Form = (props) => {

    const [title, newTitle] = useState('');
    const [amount, newAmount] = useState('');
    const [date, newDate] = useState('');

    const titleInput = (event) => {
        newTitle(event.target.value);
    }

    const amountInput = (event) => {
        newAmount(event.target.value);
    }

    const dateInput = (event) => {
        newDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        let newExpense = {
                title : title,
                amount : amount,
                date : new Date(date),
            }

        props.onSaveDataHandler(newExpense);    

            newTitle('');
            newAmount('');
            newDate('');

        }

    return (
        <div>
            <form onSubmit = {submitHandler}>
               <div className = "myForm">
                    <div className="expense_row"> 
                        <div className = "expense_item">
                            <label>Title :</label>
                            <input type = "text" className='inputType' onChange = {titleInput} value = {title}/>
                        </div>
                        <div className = "expense_item">
                            <label>Amount :</label>
                            <input type = "number" className='inputType'  min = "1" step = "1" onChange = {amountInput} value = {amount}/>
                        </div>
                    </div>
                    <div className="expense_row">
                        <div className = "expense_item">
                            <label>Date :</label>
                            <input type = "date" className='inputType' onChange = {dateInput} value = {date}/>
                        </div>
                    </div>
               </div>
               <div className = "Expense_btn">
                    <input type = "submit" value = "Add Expense"/>
                </div>
            </form>
        </div>
    );
};

export default Form;