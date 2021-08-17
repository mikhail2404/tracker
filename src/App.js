import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import AddTraker from "./components/addTracker";
import Balance from "./components/balance";
import History from "./components/history";
import './styles/styles.scss'

function App() {
  const [income, setIncome]  = useState(0)
  const [exspense, setExpense]  = useState(0)
  const [balance, setBalance] = useState(0)
  const [num, setNum]  = useState(1)
  const [history, setHistory] = useState([{text: '', id: num, amount: 0}])

  useEffect(
    () => setBalance(income - exspense), [income, exspense]
  )
  const transiton =    (amount, text ) => {
    if(Number.isInteger(Number(amount))  && amount.includes('+')){
        setIncome(income + Number(amount))


    }
    else if(Number.isInteger(Number(amount)) && amount.includes('-')){
        setExpense(exspense - Number(amount))

    }
    else{
        alert('Enter a number')
    }
    setNum(n => n + 1)
    const newHistory = [...history, {text, amount , id: num}]
    if(text){

      setHistory(newHistory)
    }
    else{
      alert('Enter a text')
    }
  } 
  const deleteHandler  = (arr) => {
    setHistory([...arr])
  } 
  return (
    <div>
      <div className="trakcer-container">
        <h1>Expense Tracker</h1>
        <Balance balance={balance} income={income} exspense={exspense}/>
        <History history={history} deleteHandler={deleteHandler}/>
        <AddTraker 
          setIncome={setIncome} 
          setExpense={setExpense} 
          income={income} 
          exspense={exspense}
          setBalance={setBalance}
          balance={balance}
          transiton={transiton}
        />
      </div>
    </div>
  );
}

export default App;
