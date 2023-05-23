import { useSelector } from 'react-redux';

const CurrencyDetail = () => {
  const { items, loadingCurrencies, loadingError } = useSelector(
    (state) => state.currency
  );

  if (loadingCurrencies) {
    <div>
      <p>Loading</p>
    </div>;
  }

  if (loadingError) {
    <div>
      <p>
        The page failed to load. Please check your network connection and try
        again
      </p>
    </div>;
  }

  const flatArrayOfCurrencies = Object.entries(items.rates).flatMap(
    ([key, value]) => ({
      name: key,
      rate: value,
    })
  );

  return (
    <div className="currency-detail">
      <h2>{items.date}</h2>
      <h2>Base currency: {items.base}</h2>
      {flatArrayOfCurrencies.map((item) => (
        <ul>
          <li>{item.name}</li>
          <li>{item.rate}</li>
        </ul>
      ))}
    </div>
  );
};

export default CurrencyDetail;
