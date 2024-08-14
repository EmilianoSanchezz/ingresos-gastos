import { GlobalProvider } from "./context/GlobalState"
import Header from "./components/header"
import Balance from "./components/balance"
import TransactionForm from "./components/transactions/transactionForm"
import TransactionList from "./components/transactions/TransactionsList"


function App() {

  return (
    <GlobalProvider>
      
      <Balance/>
      <TransactionForm/>
      <TransactionList/>
     
    </GlobalProvider>
  )
}

export default App
