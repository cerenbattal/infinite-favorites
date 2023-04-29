import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from "styled-components";
import { Context } from "../context/GlobalContext";

const GalleryImageWrapper = styled.div`
  position: relative;
  grid-row-end: span ${(props) => (props.spans)};
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.hovered ? "flex" : "none")};
  background-color: rgba(128,128,128,0.75);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
`;

const Caption = styled.p`
  font-size: 16px;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8rem;
  cursor: pointer;
`;

const FavoritedButton = styled.button`
  background-color: white;
  border: 2px solid white;
  color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 8rem;
  cursor: pointer;
`;

const ImageCard = ({ image }) => {
  const { state, addFavorite, removeFavorite } = useContext(Context);
  const [isHovered, setIsHovered] = useState(false);
  const [spans, setSpans] = useState(0);
  const imageRef = useRef();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    imageRef.current.addEventListener('load', handleSpans);
  }, []);

  const handleSpans = () => {
    const height = imageRef.current.clientHeight
    const spans = Math.ceil(height / 10 + 1)
    setSpans(spans);
  };

  const handleFavorited = () => {
    if (!isFavorited()) {
      addFavorite(image);
    }
  };

  const handleUnFavorited = () => {
    if (isFavorited()) {
      removeFavorite(image);
    }
  };

  const isFavorited = () => {
    return state.userProfile.favorites.find((favoritedImage) => {
      return favoritedImage.id === image.id;
    });
  }

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
        loading="lazy"
        id={image.id}
        src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
      />
      {isHovered && (
        <Overlay hovered={isHovered}>
          <Caption>{image.title}</Caption>
          {isFavorited() ? <FavoritedButton onClick={() => handleUnFavorited()} >Favorited!</FavoritedButton> : <Button onClick={() => handleFavorited()} >Favorite</Button>}
        </Overlay>
      )}
    </GalleryImageWrapper>
  )
}

export default ImageCard