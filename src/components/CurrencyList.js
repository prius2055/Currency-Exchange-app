import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Currency from './Currency';
import { getCurrencies } from '../store/currencySlice';

const CurrencyList = () => {
  const { items, loadingCurrencies, loadingError } = useSelector(
    (state) => state.currency
  );

  console.log(items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencies());
  }, []);

  // useEffect(() => {
  //   getCurrencies();
  // }, []);

  if (loadingCurrencies) {
    <div>Loading</div>;
  }

  if (loadingError) {
    <div>Error</div>;
  }

  // if (items.length !== 0) {
  //   console.log(items);
  // }

  return (
    <div>
      {items.map((item) => (
        <Currency key={item.id} currencyInfo={item} />
      ))}
    </div>
  );
};

export default CurrencyList;
