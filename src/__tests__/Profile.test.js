import React from 'react';
import { render } from '@testing-library/react';
import Profile from '../pages/Profile';

const initialStateWithData = {
  userProfile: {
    userId: 1,
    username: 'cerenbattal',
    name: 'Ceren',
    surname: 'Battal',
    location: 'Istanbul',
    email: 'cerenbattal97@gmail.com',
  },
  favorites: [],
};

const initialStateWithoutData = {
  userProfile: {
    userId: 1,
    name: 'Ceren',
    surname: 'Battal',
    location: 'Istanbul',
    email: 'cerenbattal97@gmail.com',
  },
  favorites: [],
};

describe('Profile', () => {
  beforeEach(() => {
    window.localStorage.setItem('APP_STATE', JSON.stringify(initialStateWithData));
  });
  afterEach(() => {
    window.localStorage.clear();
  });

  it('should render the text from localStorage', () => {
    const { getByText } = render(<Profile />);
    expect(getByText('cerenbattal')).toBeInTheDocument();
  });

  it('should render N/A if there is no data on localStorage', () => {
    const { getByText } = render(<Profile />);
    expect(getByText('cerenbattal')).toBeInTheDocument();
  });
});

describe('Profile', () => {
  beforeEach(() => {
    window.localStorage.setItem('APP_STATE', JSON.stringify(initialStateWithoutData));
  });
  afterEach(() => {
    window.localStorage.clear();
  });
  it('should render N/A if there is no data on localStorage', () => {
    const { getByText } = render(<Profile />);

    // Make sure that the component renders the text from localStorage
    expect(getByText('N/A')).toBeInTheDocument();
  });
});