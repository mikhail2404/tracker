import { useState } from 'react'
import AddTraker from "./components/addTracker";
import Balance from "./components/balance";
import History from "./components/history";
import './styles/styles.scss'

function App() {
  const [income, setIncome]  = useState(0)
  const [exspense, setExpense]  = useState(0)
  const [balance, setBalance] = useState(0)
  const [history, setHistory] = useState([{text: '', id: 0, amount: 0}])
  console.log(balance);
  return (
    <div>
      <div className="trakcer-container">
        <h1>Expense Tracker</h1>
        <Balance balance={balance} income={income} exspense={exspense}/>
        <History />
        <AddTraker 
          setIncome={setIncome} 
          setExpense={setExpense} 
          income={income} 
          exspense={exspense}
          setBalance={setBalance}
          balance={balance}
        />
      </div>
    </div>
  );
}

export default App;
