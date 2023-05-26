import { useDispatch } from 'react-redux';
import { filterCurrency, getCurrencies } from '../store/currencySlice';
import './Filter.css';

const staticArrayOfCurrencies = [
  {
    currency: 'EUR', id: 'Ce22bjgzOEFOfqdTlgrE4', name: 'Euro', symbol: '€',
  },

  {
    currency: 'USD',
    id: '5huQS4WmwqTVujSnaQDax',
    name: 'US Dollar',
    symbol: '$',
  },

  {
    currency: 'JPY',
    id: '5sXlpIrHP3OGeX6lLpstP',
    name: 'Japanese Yen',
    symbol: '¥',
  },

  {
    currency: 'BGN',
    id: 'IjPeMOcj_4UyWY92XWh6f',
    name: 'Bulgarian Lev',
    symbol: 'BGN',
  },

  {
    currency: 'CZK',
    id: 'oFzf9lVvYL84L0gMGEJyd',
    name: 'Czech Koruna',
    symbol: 'CZK',
  },

  {
    currency: 'DKK',
    id: 'FRaQbI8LZByzymZurNzl0',
    name: 'Danish Krone',
    symbol: 'DKK',
  },

  {
    currency: 'GBP',
    id: 'C2FodKkP3LC0vv6hF3IOD',
    name: 'British Pound',
    symbol: '£',
  },

  {
    currency: 'HUF',
    id: 'P29nhwSrstSZclECCT7OD',
    name: 'Hungarian Forint',
    symbol: 'HUF',
  },

  {
    currency: 'PLN',
    id: 'GP86fZLtFj4j81xul6zwJ',
    name: 'Polish Zloty',
    symbol: 'PLN',
  },

  {
    currency: 'RON',
    id: 'J140Bq4-d-y9bxTGv8-qi',
    name: 'Romanian Leu',
    symbol: 'RON',
  },

  {
    currency: 'SEK',
    id: '09Rj6wOM3GcuaeIIhCnsq',
    name: 'Swedish Krona',
    symbol: 'SEK',
  },

  {
    currency: 'CHF',
    id: 'DG8N0toSKeZnb-22-iHxu',
    name: 'Swiss Franc',
    symbol: 'CHF',
  },

  {
    currency: 'ISK',
    id: 'jaah4FSIkeQ-3YTi4lQoL',
    name: 'Icelandic Króna',
    symbol: 'ISK',
  },

  {
    currency: 'NOK',
    id: '-y9IBCs2kTu6sCBpFijoe',
    name: 'Norwegian Krone',
    symbol: 'NOK',
  },

  {
    currency: 'HRK',
    id: 'U808t0Z-7feu_GNX0fCqs',
    name: 'Croatian Kuna',
    symbol: 'HRK',
  },

  {
    currency: 'RUB',
    id: 'M4lYu6RBi0-Tw-hEvDEsF',
    name: 'Russian Ruble',
    symbol: 'RUB',
  },

  {
    currency: 'TRY',
    id: '8jFi7Bwk2U-Tb_PwiurcY',
    name: 'Turkish Lira',
    symbol: 'TRY',
  },

  {
    currency: 'AUD',
    id: '7hd3wPSghxn2vsqF3aHbJ',
    name: 'Australian Dollar',
    symbol: 'A$',
  },

  {
    currency: 'BRL',
    id: 'oyj-yky7jnbqB3eyyOgEa',
    name: 'Brazilian Real',
    symbol: 'R$',
  },

  {
    currency: 'CAD',
    id: 'HIEfyBb7aR2XkOD6nPXMv',
    name: 'Canadian Dollar',
    symbol: 'CA$',
  },

  {
    currency: 'CNY',
    id: 'ZhiJKP25Z9tobYbe-35Wo',
    name: 'Chinese Yuan',
    symbol: 'CN¥',
  },

  {
    currency: 'HKD',
    id: 'GOI1k0YcmsgNe7lz83aaY',
    name: 'Hong Kong Dollar',
    symbol: 'HK$',
  },

  {
    currency: 'IDR',
    id: '2ZLrifZaiYcS3nNSEeph0',
    name: 'Indonesian Rupiah',
    symbol: 'IDR',
  },

  {
    currency: 'ILS',
    id: '8d3kIrNHOkuoXG794OB4i',
    name: 'Israeli New Shekel',
    symbol: '₪',
  },

  {
    currency: 'INR',
    id: '3A4xMy34VGS9brO1MoWLB',
    name: 'Indian Rupee',
    symbol: '₹',
  },

  {
    currency: 'KRW',
    id: 'Ini3BVFUnmftITvrzbLKY',
    name: 'South Korean Won',
    symbol: '₩',
  },

  {
    currency: 'MXN',
    id: 'UeAojMhmYp3GagfhJrp-h',
    name: 'Mexican Peso',
    symbol: 'MX$',
  },

  {
    currency: 'MYR',
    id: '5LVAg0npXKHEtY_AGXVqJ',
    name: 'Malaysian Ringgit',
    symbol: 'MYR',
  },

  {
    currency: 'NZD',
    id: 'DkOJjzAZrOQ-GHS3XAVid',
    name: 'New Zealand Dollar',
    symbol: 'NZ$',
  },

  {
    currency: 'PHP',
    id: 'FnqqUs9hrSR691qQyEEQ4',
    name: 'Philippine Peso',
    symbol: '₱',
  },

  {
    currency: 'SGD',
    id: 'BrRFcfOxcTYqq2a4P3nAC',
    name: 'Singapore Dollar',
    symbol: 'SGD',
  },

  {
    currency: 'THB',
    id: 'JqjJlTO9fNakz9I4dorS8',
    name: 'Thai Baht',
    symbol: 'THB',
  },

  {
    currency: 'ZAR',
    id: 'jnrpk0xklR3_X7J3mNwRy',
    name: 'South African Rand',
    symbol: 'ZAR',
  },
];

const Filter = () => {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(getCurrencies());

    setTimeout(() => {
      const currencyName = e.target.value;
      dispatch(filterCurrency(currencyName));
    }, 5);
  };

  return (
    <select className="filter-currency" onChange={clickHandler}>
      <option>Filter by currency</option>
      {staticArrayOfCurrencies.map((item) => (
        <option key={item.id}>{item.name}</option>
      ))}
    </select>
  );
};

export default Filter;
