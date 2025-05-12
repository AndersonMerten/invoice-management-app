import React from 'react';

interface Invoice {
    id: number;
    clientName: string;
    value: number;
}

interface InvoiceListProps {
    invoices: Invoice[];
}

const InvoiceList: React.FC<InvoiceListProps> = ({ invoices }) => {
    return (
        <div>
            <h2>Notas Fiscais Lançadas</h2>
            <ul>
                {invoices.map(invoice => (
                    <li key={invoice.id}>
                        {invoice.clientName} - R$ {invoice.value.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InvoiceList;