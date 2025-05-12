import React, { useState } from 'react';
import Header from './components/Header';
import InvoiceModal from './components/InvoiceModal';
import CloseDayModal from './components/CloseDayModal';
import InvoiceList from './components/InvoiceList';
import CloseDayList from './components/CloseDayList';
import './styles/App.css';

const App = () => {
    const [saldo, setSaldo] = useState(0);
    const [invoices, setInvoices] = useState([]);
    const [closeDays, setCloseDays] = useState([]);
    const [isInvoiceModalOpen, setInvoiceModalOpen] = useState(false);
    const [isCloseDayModalOpen, setCloseDayModalOpen] = useState(false);

    const handleAddInvoice = (clientName, invoiceValue) => {
        setInvoices([...invoices, { clientName, invoiceValue }]);
        setSaldo(saldo + invoiceValue);
        setInvoiceModalOpen(false);
    };

    const handleCloseDay = (pix, card, others) => {
        const totalClose = pix + card + others;
        setCloseDays([...closeDays, { date: new Date().toLocaleDateString(), totalClose }]);
        setSaldo(saldo - totalClose);
        setCloseDayModalOpen(false);
    };

    return (
        <div className="App">
            <Header saldo={saldo} />
            <div className="button-container">
                <button onClick={() => setInvoiceModalOpen(true)}>Lançar Nota Fiscal</button>
                <button onClick={() => setCloseDayModalOpen(true)}>Fechar o Dia</button>
            </div>
            <InvoiceList invoices={invoices} />
            <CloseDayList closeDays={closeDays} />
            {isInvoiceModalOpen && (
                <InvoiceModal 
                    onClose={() => setInvoiceModalOpen(false)} 
                    onSave={handleAddInvoice} 
                />
            )}
            {isCloseDayModalOpen && (
                <CloseDayModal 
                    onClose={() => setCloseDayModalOpen(false)} 
                    onSave={handleCloseDay} 
                />
            )}
        </div>
    );
};

export default App;