import { Button, Container, Stack } from "@mui/material";
import { useState } from "react";
import CloseDayList from "./components/CloseDayList";
import CloseDayModal from "./components/CloseDayModal";
import Header from "./components/Header";
import InvoiceList from "./components/InvoiceList";
import InvoiceModal from "./components/InvoiceModal";
import "./styles/App.css";

interface Invoice {
  id: number;
  clientName: string;
  value: number;
}

interface CloseDay {
  date: string;
  pix: number;
  card: number;
  others: number;
}

const App = () => {
  const [saldo, setSaldo] = useState(0);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [closeDays, setCloseDays] = useState<CloseDay[]>([]);
  const [isInvoiceModalOpen, setInvoiceModalOpen] = useState(false);
  const [isCloseDayModalOpen, setCloseDayModalOpen] = useState(false);

  const handleAddInvoice = (clientName: string, value: number) => {
    const newInvoice: Invoice = {
      id: Date.now(),
      clientName,
      value,
    };
    setInvoices((prevInvoices) => [...prevInvoices, newInvoice]);
    setSaldo((prevSaldo) => prevSaldo + value);
    setInvoiceModalOpen(false);
  };

  const handleCloseDay = (pix: number, card: number, others: number) => {
    const newCloseDay: CloseDay = {
      date: new Date().toLocaleDateString(),
      pix,
      card,
      others,
    };
    setCloseDays((prevCloseDays) => [...prevCloseDays, newCloseDay]);
    setSaldo((prevSaldo) => prevSaldo - (pix + card + others));
    setCloseDayModalOpen(false);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Header saldo={saldo} />
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <Button variant="contained" onClick={() => setInvoiceModalOpen(true)}>
          Lançar Nota Fiscal
        </Button>
        <Button variant="contained" onClick={() => setCloseDayModalOpen(true)}>
          Fechar o Dia
        </Button>
      </Stack>
      <InvoiceList invoices={invoices} />
      <CloseDayList closeDays={closeDays} />
      <InvoiceModal
        isOpen={isInvoiceModalOpen}
        onClose={() => setInvoiceModalOpen(false)}
        onSave={handleAddInvoice}
      />
      <CloseDayModal
        isOpen={isCloseDayModalOpen}
        onRequestClose={() => setCloseDayModalOpen(false)}
        onSave={handleCloseDay}
      />
    </Container>
  );
};

export default App;
