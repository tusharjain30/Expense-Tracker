import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

let ExpenseItem = (props) => {

    return (
            <div className="expenseItem">
                <ExpenseDate date = {props.date}/>
                <div className="expense_title">
                    <h3>{ props.title }</h3>
                </div>
                <div className="expense_amount">
                    <h3>${ props.amount }</h3>
                </div>
            </div>
    );
}

export default ExpenseItem;