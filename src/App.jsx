import React from 'react';
import OrderForm from './components/OrderForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Sistema de Gestión de Pedidos de Velas
        </h1>
        <OrderForm />
      </div>
    </div>
  );
}

export default App;