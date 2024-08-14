import React from "react";
import { useGlobalState } from "../../context/GlobalState";


function TransactionList(){
    const {transactions, deleteTransaction} = useGlobalState()
    
    return(
        <div className="transactionsList"> {
            transactions.map(transaction =>(
                
                <div className="contenedorInfo" key= {transaction.id}>
                    <div className="contenedorImg">

                    <span className={transaction.amount < 0 ? 'negativeCon' : 'positiveCon'}>$</span>
                    </div>
                    <p>{transaction.description}</p>
                    <span className={transaction.amount < 0 ? 'negative' : 'positive'}>
                    {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}
                    </span>

                    <button onClick={() =>{
                        deleteTransaction(transaction.id)

                    }}> X</button>

                    <div className="linea"></div>
                </div>
            ))}

        </div>
    )
}

export default TransactionList