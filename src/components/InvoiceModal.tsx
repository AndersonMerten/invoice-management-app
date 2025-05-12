import React, { useState } from 'react';
import Modal from 'react-modal';

const InvoiceModal = ({ isOpen, onRequestClose, onSave }) => {
    const [clientName, setClientName] = useState('');
    const [invoiceValue, setInvoiceValue] = useState('');

    const handleSave = () => {
        const value = parseFloat(invoiceValue);
        if (!isNaN(value) && clientName) {
            onSave(clientName, value);
            setClientName('');
            setInvoiceValue('');
            onRequestClose();
        }
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>Lançar Nota Fiscal</h2>
            <div>
                <label>Nome do Cliente:</label>
                <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                />
            </div>
            <div>
                <label>Valor da Nota:</label>
                <input
                    type="number"
                    value={invoiceValue}
                    onChange={(e) => setInvoiceValue(e.target.value)}
                />
            </div>
            <div>
                <button onClick={onRequestClose}>Cancelar</button>
                <button onClick={handleSave}>Salvar</button>
            </div>
        </Modal>
    );
};

export default InvoiceModal;