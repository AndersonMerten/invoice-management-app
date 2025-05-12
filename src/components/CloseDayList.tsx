import React from 'react';

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
        <div>
            <h2>Fechamentos do Dia</h2>
            <ul>
                {closeDays.map((closeDay, index) => (
                    <li key={index}>
                        <strong>{closeDay.date}</strong>: PIX: {closeDay.pix}, Cartão: {closeDay.card}, Outros: {closeDay.others}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CloseDayList;