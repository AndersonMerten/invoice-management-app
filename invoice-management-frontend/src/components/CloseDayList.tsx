import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

interface CloseDay {
  date: string;
  pix: number;
  card: number;
  others: number;
}

interface CloseDayListProps {
  closeDays: CloseDay[];
}

const CloseDayList: React.FC<CloseDayListProps> = ({ closeDays }) => {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Fechamentos do Dia
      </Typography>
      <List>
        {closeDays.map((closeDay, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText
                primary={closeDay.date}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      PIX: R$ {closeDay.pix.toFixed(2)} | Cartão: R${" "}
                      {closeDay.card.toFixed(2)} | Outros: R${" "}
                      {closeDay.others.toFixed(2)}
                    </Typography>
                    <Typography
                      component="div"
                      variant="body1"
                      color="secondary.light"
                    >
                      Total: R${" "}
                      {(closeDay.pix + closeDay.card + closeDay.others).toFixed(
                        2
                      )}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            {index < closeDays.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default CloseDayList;
