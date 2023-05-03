import React from 'react';
import { render } from '@testing-library/react';
import Profile from '../pages/Profile';

const initialStateWithData = {
  userProfile: {
    userId: 1,
    username: 'janedoe',
    name: 'Jane',
    surname: 'Doe',
    location: 'World',
    email: 'janedoe@mail.com',
  },
  favorites: [],
};

const initialStateWithoutData = {
  userProfile: {
    userId: 1,
    name: 'Jane',
    surname: 'Doe',
    location: 'World',
    email: 'janedoe@mail.com',
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
    expect(getByText('janedoe')).toBeInTheDocument();
  });

  it('should render N/A if there is no data on localStorage', () => {
    const { getByText } = render(<Profile />);
    expect(getByText('janedoe')).toBeInTheDocument();
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

    expect(getByText('N/A')).toBeInTheDocument();
  });
});