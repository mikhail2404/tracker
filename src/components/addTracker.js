import { useState } from 'react'

const AddTraker = ({setExpense, setIncome, income, exspense, setBalance}) => {
    const [amount, setAmount] =  useState('') 
    const  selectAmount = (e) => {
        const newValue = e.target.value.trim()
        setAmount(newValue)

    }
     const transiton =  async () => {
        if(Number.isInteger(Number(amount))  && amount.includes('+')){
            setIncome(income + Number(amount))

        }
        else if(Number.isInteger(Number(amount)) && amount.includes('-')){
            setExpense(exspense - Number(amount))

        }
        else{
            alert('Enter a number')
        }
        await setBalance(income - exspense)
        setAmount('')


    }
    console.log(amount);
    return (
        <div className="new-tracker">
            <h3>AddTracker</h3>
            <hr />
            <div  className="input-container">
                <h4>Text</h4>
                <input type="text" placeholder="  Enter text..."/>
                <h4>Amount</h4>
                <span>(negative-expense, positive-income)</span>
                <input onChange={selectAmount} value={amount} type="text" placeholder="  Enter amount..."/>
            </div>
            <button onClick={transiton}>Add transition</button>
        </div>
    )
}

export default AddTraker;