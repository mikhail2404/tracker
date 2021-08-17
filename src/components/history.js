import Transition from "./transition";

const History = ({history, deleteHandler }) => {
    return (
        <>
            <h3>History</h3>
            <hr />
            {history.map((transaction) => {
                return ( 

                    <Transition 
                        transaction={transaction} 
                        key={transaction.id}
                        history={history}
                        deleteHandler={deleteHandler}
                    /> 
                )
            }
            )}
        </>
        
    )
}

export default History;