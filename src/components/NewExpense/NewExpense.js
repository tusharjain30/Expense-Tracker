import Form from './Form';

let NewExpense = (props) => {

    let expense_data_handler = (data) => {
        NewExpense = {
            ...data,
            id : Math.random().toString(),
        }
        props.newExpenseData(NewExpense);
    }

    return (
        <div className = "new_expense">
            <Form onSaveDataHandler = {expense_data_handler}/>
        </div>
    );
};

export default NewExpense;