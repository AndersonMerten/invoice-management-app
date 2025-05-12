import React, { useState } from 'react';
import Modal from 'react-modal';

const CloseDayModal = ({ isOpen, onRequestClose, onSave }) => {
    const [pix, setPix] = useState(0);
    const [card, setCard] = useState(0);
    const [other, setOther] = useState(0);

    const handleSave = () => {
        const totalReceipts = pix + card + other;
        onSave(-totalReceipts);
        onRequestClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>Fechar o dia</h2>
            <div>
                <label>
                    Recebimento via PIX:
                    <input
                        type="number"
                        value={pix}
                        onChange={(e) => setPix(Number(e.target.value))}
                    />
                </label>
            </div>
            <div>
                <label>
                    Recebimento via cartão:
                    <input
                        type="number"
                        value={card}
                        onChange={(e) => setCard(Number(e.target.value))}
                    />
                </label>
            </div>
            <div>
                <label>
                    Outros recebimentos:
                    <input
                        type="number"
                        value={other}
                        onChange={(e) => setOther(Number(e.target.value))}
                    />
                </label>
            </div>
            <div>
                <button onClick={onRequestClose}>Cancelar</button>
                <button onClick={handleSave}>Salvar fechamento</button>
            </div>
        </Modal>
    );
};

export default CloseDayModal;