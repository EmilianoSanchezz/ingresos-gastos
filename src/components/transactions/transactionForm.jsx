import React, { useState } from "react";
import { useGlobalState } from '../../context/GlobalState';

function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    
    addTransaction({
      id: window.crypto.randomUUID(),
      description, 
      amount: +amount,
    });
    
    // Reiniciar el formulario
    setDescription('');
    setAmount(0);
  };

  return (
    <div className="transactionForm">
      <form onSubmit={onSubmit}>
        <div className="input-group">

        <input 
          id="Descripcion" 
          type="text" 
          placeholder="Ingresa Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)} 
          />
        <input 
          type="number" 
          step="0.01" 
          placeholder="Ingresa Monto"
          value={amount}
          onChange={(e) => setAmount(e.target.value)} 
          />
        <button>Añadir Transacción</button>
          </div>
      </form>
    </div>
  );
}

export default TransactionForm;