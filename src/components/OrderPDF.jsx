import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  list: {
    marginLeft: 20,
  },
});

export default function OrderPDF({ order }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Resumen del Pedido</Text>
          
          <Text style={styles.subtitle}>Información General</Text>
          <Text style={styles.text}>Número de Pedido: {order.orderId}</Text>
          <Text style={styles.text}>Cliente: {order.customerName}</Text>
          <Text style={styles.text}>Cantidad: {order.quantity}</Text>
          <Text style={styles.text}>Método de Pago: {order.paymentMethod}</Text>
          
          <Text style={styles.subtitle}>Velas Seleccionadas</Text>
          {order.selectedCandles.map((candle, index) => (
            <Text key={index} style={[styles.text, styles.list]}>• {candle}</Text>
          ))}
          
          <Text style={styles.subtitle}>Palabras Seleccionadas</Text>
          {order.selectedWords.map((word, index) => (
            <Text key={index} style={[styles.text, styles.list]}>• {word}</Text>
          ))}
          
          <Text style={styles.subtitle}>Figura Religiosa</Text>
          <Text style={styles.text}>{order.religiousFigure}</Text>
        </View>
      </Page>
    </Document>
  );
}