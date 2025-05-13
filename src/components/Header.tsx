interface HeaderProps {
  saldo: number;
}

const Header = ({ saldo }: HeaderProps) => {
  const saldoColor = saldo >= 0 ? "green" : "red";

  return (
    <header className="header">
      <div className="logo">Your Logo Here</div>
      <div className="saldo" style={{ color: saldoColor }}>
        SALDO: {saldo.toFixed(2)}
      </div>
    </header>
  );
};

export default Header;
