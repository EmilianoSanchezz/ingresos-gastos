import { useGlobalState } from "../../context/GlobalState"

function IncomeExpenses() {
    
   const {transactions} = useGlobalState()

    const amounts = transactions.map((transaction) => transaction.amount)

    const income = amounts
    .filter((item) => item > 0)
    .reduce ((acc, item) => (acc += item), 0)
    
    const expense = amounts
    .filter((item) => item < 0)
    .reduce ((acc, item) => (acc += item), 0) * -1

    return (
        <div className="incomeExpense">

        
            <div>
                <h4>Ingresos</h4>
                <p className="positive">${income}</p>
            </div>
            <div>
                <h4>Gastos</h4>
                <p id="gastos">${expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses