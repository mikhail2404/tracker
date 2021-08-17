import { useState} from 'react'

const AddTraker = ({transiton}) => {
    const [amount, setAmount] =  useState('')
    const [text, setText] = useState('')
    const   handleSubmit = (e) => {
        e.preventDefault()
        transiton(amount, text)
        setAmount('')
        setText('')
    }

    return (
        <div className="new-tracker">
            <h3>AddTracker</h3>
            <hr />
            <form className="form-container" onSubmit={handleSubmit}>
                <label>Text</label>
                <input 
                    type="text" 
                    placeholder="  Enter text..."
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)} 
                    />
                <label>Amount</label>
                <span>(negative-expense, positive-income)</span>
                <input  
                    type="text" 
                    placeholder="  Enter amount..."
                    id="amount"
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)}
                    />

                <button  type="submit">Add transition</button>
            </form>
        </div>
    )
}

export default AddTraker;