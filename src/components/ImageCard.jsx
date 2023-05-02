import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { addFavorite, removeFavorite } from '../utils/localStorage';
import { getUserInfo } from '../api/getUserInfoApi';

const GalleryImageWrapper = styled.div`
  position: relative;
  grid-row-end: span ${(props) => props.spans};
`;

const Overlay = styled.div`
  position: absolute;
  top: 46%;
  left: 50%;
  width: 250px;
  height: ${(props) => props.height}px;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.hovered ? 'flex' : 'none')};
  background-color: rgba(128, 128, 128, 0.4);
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
`;

const ImageName = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const ImageOwner = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

const OverlayLine = styled.p`
  font-size: 12px;
  margin: 0;
  padding: 0;
`;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8rem;
  margin-top: 8px;
  cursor: pointer;
`;

const FavoritedButton = styled.button`
  background-color: white;
  border: 2px solid white;
  color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 8rem;
  margin-top: 8px;
  cursor: pointer;
`;

const ImageCard = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageOwner, setImageOwner] = useState('');
  const [height, setHeight] = useState();
  const [spans, setSpans] = useState(0);
  const imageRef = useRef();

  const [favorite, setFavorite] = useState(localStorage.getItem('APP_STATE'));

  useEffect(() => {
    const handleStorageChange = () => {
      setFavorite(localStorage.getItem('APP_STATE'));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [favorite]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const getImageOwner = () => {
      getUserInfo(image.owner)
        .then((response) => response.json())
        .then((data) => setImageOwner(data.person.username._content))
        .catch((error) => console.log(error));
    };
    imageRef.current.addEventListener('load', handleSpans);
    getImageOwner();
  }, [image.owner]);

  const handleSpans = () => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    setSpans(spans);
  };

  const handleFavorited = () => {
    if (!isFavorited()) {
      addFavorite(image);
      setFavorite(true);
    }
  };

  const handleUnFavorited = () => {
    if (isFavorited()) {
      removeFavorite(image);
    }
  };

  const isFavorited = () => {
    const appState = JSON.parse(localStorage.getItem('APP_STATE'));
    const userFavorites = appState.favorites;
    return userFavorites.find((favoritedImage) => {
      return favoritedImage.id === image.id;
    });
  };

  return (
    <GalleryImageWrapper
      hovered={isHovered}
      spans={spans}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imageRef}
        alt={image.title}
        loading='lazy'
        id={image.id}
        width="250"
        height={height}
        onError={(event) => event.target.style.display = 'none'}
        src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
        onLoad={() => setHeight(imageRef.current.clientHeight)}
      />
      {isHovered && (
        <Overlay hovered={isHovered} height={height}>
          <ImageName>{image.title}</ImageName>
          <OverlayLine>{'---------'}</OverlayLine>
          <ImageOwner>{imageOwner}</ImageOwner>
          {isFavorited() ? (
            <FavoritedButton onClick={() => handleUnFavorited()}>Favorited!</FavoritedButton>
          ) : (
            <Button onClick={() => handleFavorited()}>Favorite</Button>
          )}
        </Overlay>
      )}
    </GalleryImageWrapper>
  );
};

export default ImageCard;
