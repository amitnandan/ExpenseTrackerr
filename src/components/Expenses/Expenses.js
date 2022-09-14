import './Expenses.css';
import Card from '../UI/Card';
import React ,{useState} from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpensesList';
import ExpenseChart from './ExpensesChart';

function Expenses(props)
{

    const [filteredYear , setFilteredYear ] = useState('2020');
    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
    }

const filteredExpenses = props.items.filter( expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
});

    return (
        <div>
    <Card className='expenses'>
            <ExpenseFilter selected ={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpenseList items = {filteredExpenses}/>
        </Card>
    </div>
    )
    }

export default Expenses;