import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './CurrencyDetail.css';
import { NavLink } from 'react-router-dom';

const CurrencyDetail = () => {
  const {
    items, info, loadingCurrencies, loadingError,
  } = useSelector(
    (state) => state.currency,
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

  return (
    <div className="detail">
      <div className="detail-info">
        <NavLink to="/">
          <FontAwesomeIcon icon={faCircleArrowLeft} className="icon" />
        </NavLink>
        <p>{info.date}</p>
      </div>

      <div className="detail-hero">
        <h3>Base currency</h3>
        <h4>
          {info.base}
        </h4>
        <p>The base currency compared to other currencies</p>
      </div>
      {items.map((item) => (
        <div className="detail-item" key={item.id}>
          <p>{item.name}</p>
          <p>{item.rate}</p>
        </div>
      ))}
    </div>
  );
};

export default CurrencyDetail;
