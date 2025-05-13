import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface CloseDayModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSave: (pix: number, card: number, others: number) => void;
}

const CloseDayModal: React.FC<CloseDayModalProps> = ({
  isOpen,
  onRequestClose,
  onSave,
}) => {
  const [pix, setPix] = useState<number>(0);
  const [card, setCard] = useState<number>(0);
  const [other, setOther] = useState<number>(0);

  const handleSave = () => {
    onSave(pix, card, other);
    setPix(0);
    setCard(0);
    setOther(0);
  };

  return (
    <Modal
      open={isOpen}
      onClose={onRequestClose}
      aria-labelledby="close-day-modal-title"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          id="close-day-modal-title"
          variant="h6"
          component="h2"
          gutterBottom
        >
          Fechar o dia
        </Typography>
        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Recebimento via PIX"
            type="number"
            value={pix}
            onChange={(e) => setPix(Number(e.target.value))}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Recebimento via cartão"
            type="number"
            value={card}
            onChange={(e) => setCard(Number(e.target.value))}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Outros recebimentos"
            type="number"
            value={other}
            onChange={(e) => setOther(Number(e.target.value))}
            variant="outlined"
          />
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button variant="outlined" onClick={onRequestClose}>
              Cancelar
            </Button>
            <Button variant="contained" color="secondary" onClick={handleSave}>
              Salvar fechamento
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default CloseDayModal;
