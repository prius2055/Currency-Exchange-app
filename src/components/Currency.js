import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getSingleCurrency } from '../store/currencySlice';

import './Currency.css';

const Currency = ({ currencyInfo }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(getSingleCurrency(currencyInfo.currency));
  };

  return (
    <NavLink to="/currency-detail" className="currency" onClick={clickHandler}>
      <div className="currency-name">
        <h3>{currencyInfo.name}</h3>
        <FontAwesomeIcon icon={faCircleArrowRight} className="icon" />
      </div>

      <div className="currency-detail">
        <p className="currency-symbol">{currencyInfo.symbol}</p>
        <p className="currency-currency">{currencyInfo.currency}</p>
      </div>
    </NavLink>
  );
};

export default Currency;

Currency.propTypes = {
  currencyInfo: propTypes.oneOfType([propTypes.object]).isRequired,
};
