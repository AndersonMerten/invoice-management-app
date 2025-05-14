import {
  Button,
  Container,
  CssBaseline,
  Paper,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import CloseDayList from "./components/CloseDayList";
import CloseDayModal from "./components/CloseDayModal";
import Header from "./components/Header";
import InvoiceList from "./components/InvoiceList";
import InvoiceModal from "./components/InvoiceModal";
import "./styles/App.css";
import { theme } from "./theme";

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Header saldo={saldo} />
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setInvoiceModalOpen(true)}
            >
              Lançar Nota Fiscal
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setCloseDayModalOpen(true)}
            >
              Fechar o Dias
            </Button>
          </Stack>
        </Paper>

        <Stack spacing={3}>
          <InvoiceList invoices={invoices} />
          <CloseDayList closeDays={closeDays} />
        </Stack>

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
    </ThemeProvider>
  );
};

export default App;
