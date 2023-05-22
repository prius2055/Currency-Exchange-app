const Currency = ({ currencyInfo }) => {
  console.log(currencyInfo);
  return (
    <main>
      <h3>{currencyInfo.name}</h3>
      <h3>{currencyInfo.symbol}</h3>
      <h3>{currencyInfo.currency}</h3>
    </main>
  );
};

export default Currency;
