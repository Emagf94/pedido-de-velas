import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import OrderPDF from './OrderPDF';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import CheckboxGroup from './CheckboxGroup';
import { WORDS, CANDLE_TYPES, RELIGIOUS_FIGURES, PAYMENT_METHODS } from '../constants/orderConstants';

export default function OrderForm() {
  const [order, setOrder] = useState({
    orderId: uuidv4(),
    customerName: '',
    selectedCandles: [],
    selectedWords: [],
    religiousFigure: '',
    quantity: 1,
    paymentMethod: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Generate PDF
      const blob = await pdf(<OrderPDF order={order} />).toBlob();
      // Download PDF
      saveAs(blob, `pedido-${order.orderId}.pdf`);
      
      console.log('Orden enviada:', order);
      alert('Pedido registrado con éxito!');
      
      // Reset form
      setOrder({
        orderId: uuidv4(),
        customerName: '',
        selectedCandles: [],
        selectedWords: [],
        religiousFigure: '',
        quantity: 1,
        paymentMethod: '',
      });
    } catch (error) {
      console.error('Error al generar el PDF:', error);
      alert('Error al generar el PDF del pedido');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Nuevo Pedido de Velas</h2>
      
      <FormInput
        label="Número de Pedido"
        value={order.orderId}
        readOnly={true}
      />

      <FormInput
        label="Nombre del Cliente"
        value={order.customerName}
        onChange={(e) => setOrder({...order, customerName: e.target.value})}
        required={true}
      />

      <CheckboxGroup
        label="Seleccionar Velas"
        options={CANDLE_TYPES}
        selectedValues={order.selectedCandles}
        onChange={(newCandles) => setOrder({...order, selectedCandles: newCandles})}
        columns={2}
      />

      <CheckboxGroup
        label="Seleccionar Palabras (máximo 12)"
        options={WORDS}
        selectedValues={order.selectedWords}
        onChange={(newWords) => setOrder({...order, selectedWords: newWords})}
        columns={3}
      />

      <FormSelect
        label="Figura Religiosa"
        value={order.religiousFigure}
        onChange={(e) => setOrder({...order, religiousFigure: e.target.value})}
        options={RELIGIOUS_FIGURES}
        required={true}
      />

      <FormInput
        label="Cantidad"
        type="number"
        value={order.quantity}
        onChange={(e) => setOrder({...order, quantity: parseInt(e.target.value)})}
        min={1}
        required={true}
      />

      <FormSelect
        label="Método de Pago"
        value={order.paymentMethod}
        onChange={(e) => setOrder({...order, paymentMethod: e.target.value})}
        options={PAYMENT_METHODS}
        required={true}
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Registrar Pedido
      </button>
    </form>
  );
}