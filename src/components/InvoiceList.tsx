import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

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
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Notas Fiscais Lançadas
      </Typography>
      <List>
        {invoices.map((invoice, index) => (
          <React.Fragment key={invoice.id}>
            <ListItem>
              <ListItemText
                primary={invoice.clientName}
                secondary={`R$ ${invoice.value.toFixed(2)}`}
                primaryTypographyProps={{ color: "primary.light" }}
                secondaryTypographyProps={{ color: "text.secondary" }}
              />
            </ListItem>
            {index < invoices.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default InvoiceList;
