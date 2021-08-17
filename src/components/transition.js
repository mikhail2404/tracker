 
const Transition = ({transaction, history, deleteHandler}) => {

    return (
        <>
            {transaction.amount !== 0 &&
                <div  className="history-container">
                    <button onClick={() => deleteHandler(history.filter((selectedTransaction) => selectedTransaction.id !== transaction.id ))} className="delete">x</button>
                    <div className={`history ${transaction.amount > 0 ? 'income' : 'exspense'}`}>
                        <span>{transaction.text}</span>
                        <span>{transaction.amount}</span>
                    </div>
            </div>
            }
    </>
    )
}

export default Transition