import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Currency from './Currency';
import { getCurrencies } from '../store/currencySlice';

import './CurrencyList.css';

const CurrencyList = () => {
  const { items, loadingCurrencies, loadingError } = useSelector(
    (state) => state.currency
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencies());
  }, []);

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

  return (
    <div className="list-container">
      <div className="container-info">
        <div className="container-hero">
          <h2>World Currencies</h2>
        </div>

        <p>All currencies</p>
      </div>

      <div className="currency-list">
        {items.map((item) => (
          <ul className="item" key={item.id}>
            <Currency currencyInfo={item} />
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CurrencyList;
