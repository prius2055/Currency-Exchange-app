import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Currency from '../components/Currency';

const mockStore = configureStore([]);

describe('Currency component', () => {
  const currencyInfo = {
    id: 1,
    name: 'US Dollar',
    symbol: '$',
    currency: 'USD',
  };

  test('Currency component renders correctly', () => {
    const store = mockStore({});
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Currency currencyInfo={currencyInfo} />
        </MemoryRouter>
      </Provider>,
    );
    const name = getByText(currencyInfo.name);
    const symbol = getByText(currencyInfo.symbol);
    const currency = getByText(currencyInfo.currency);

    expect(name).toBeInTheDocument();
    expect(symbol).toBeInTheDocument();
    expect(currency).toBeInTheDocument();
  });

  test('should render currency details on to the screen', () => {
    const newState = {
      rocket: {
        rockets: [
          {
            id: 1,
            name: 'US Dollar',
            symbol: '$',
            currency: 'USD',
          },
        ],
      },
    };
    const store = mockStore(newState);
    store.dispatch({
      type: 'get/currencies',
      payload: newState,
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Currency currencyInfo={currencyInfo} />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByText('US Dollar')).toBeInTheDocument();
  });
});
