import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ImageCard from '../components/ImageCard';

const mockImage = {
  id: '12345',
  title: 'Test Image',
  owner: 'test_owner',
  farm: 1,
  server: 'test_server',
  secret: 'test_secret',
};

describe('ImageCard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the image', () => {
    render(<ImageCard image={mockImage} />);
    const img = screen.getByAltText(mockImage.title);
    expect(img).toBeInTheDocument();
    expect(img.getAttribute('src')).toEqual(`https://farm${mockImage.farm}.staticflickr.com/${mockImage.server}/${mockImage.id}_${mockImage.secret}.jpg`);
  });

  it('displays the image title and owner name on hover', async () => {
    const mockUsername = 'Test Image';
    jest.spyOn(window, 'fetch').mockResolvedValueOnce({
      json: () => Promise.resolve({ person: { username: { _content: mockUsername } } }),
    });
    localStorage.setItem('APP_STATE', JSON.stringify({ favorites: [mockImage] }));
    render(<ImageCard image={mockImage} />);
    const img = screen.getByAltText(mockImage.title);
    fireEvent.mouseEnter(img);
    const title = await screen.findByText(mockImage.title);
    expect(title).toBeInTheDocument();
    expect(screen.getByText('---------')).toBeInTheDocument();
    expect(screen.getByText(mockUsername)).toBeInTheDocument();
  });

  it('adds image to favorites on click', () => {
    localStorage.setItem('APP_STATE', JSON.stringify({ favorites: [] }));
    render(<ImageCard image={mockImage} />);
    const img = screen.getByAltText(mockImage.title);
    fireEvent.mouseEnter(img);
    const favButton = screen.getByText('Favorite');
    fireEvent.click(favButton);
    const appState = JSON.parse(localStorage.getItem('APP_STATE'));
    expect(appState.favorites).toContainEqual(mockImage);
  });

  it('removes image from favorites on click if already favorited', () => {
    localStorage.setItem('APP_STATE', JSON.stringify({ favorites: [mockImage] }));
    render(<ImageCard image={mockImage} />);
    const img = screen.getByAltText(mockImage.title);
    fireEvent.mouseEnter(img);
    const favButton = screen.getByText('Favorited!');
    fireEvent.click(favButton);
    const appState = JSON.parse(localStorage.getItem('APP_STATE'));
    expect(appState.favorites).not.toContainEqual(mockImage);
  });
});