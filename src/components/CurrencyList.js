import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Currency from './Currency';
import { getCurrencies } from '../store/currencySlice';

const CurrencyList = () => {
  const currencies = useSelector((state) => state.currency);

  console.log(currencies.item);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrencies());
  }, []);

  return (
    <div>
      <Currency />
    </div>
  );
};

export default CurrencyList;
