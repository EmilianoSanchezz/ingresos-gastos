import React from 'react';
import { useGlobalState } from '../context/GlobalState';
import Header from './Header'; 
import IncomeExpenses from './transactions/IncomeExpenses'; // Verifica que la ruta y el nombre del archivo sean correctos


function Balance() {
    const { transactions } = useGlobalState();

   
    const amounts = transactions.map(transaction => transaction.amount || 0);
    const total = amounts.reduce((acc, item) => acc + item, 0);

    return (
        <div className="balance">
            <Header />
            <div className="balanceHijo">
                <h3>Balance</h3>
                <h1>${total.toFixed(2)}</h1>
                <IncomeExpenses />
            </div>
        </div>
    );
}

export default Balance;
