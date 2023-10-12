import ExpenseItem from './ExpenseItem';

let Expenses = (props) => {
    return (
        <div>
             <div className='expense'>

             {
                props.item.map(expense => (
                    <ExpenseItem 
                        date = {expense.date}
                        title = {expense.title}
                        amount = {expense.amount}/>
                ))
             }

            </div>  
        </div>
    );
};

export default Expenses;