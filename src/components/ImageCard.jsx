import React, {useState, useEffect, useRef} from 'react';
import styled from "styled-components";

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
  const [isHovered, setIsHovered] = useState(true);
  const [spans, setSpans] = useState(0);
  const imageRef = useRef();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  useEffect(() => {
    imageRef.current.addEventListener('load', handleSpans);
  }, []);

  const handleSpans = () => {
    const height = imageRef.current.clientHeight
    const spans = Math.ceil(height / 10 + 1)
    setSpans(spans);
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
        loading="lazy"
        src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
      />
      {isHovered && (
        <Overlay hovered={isHovered}>
          <Caption>{image.title}</Caption>
          <FavoritedButton>Favorited!</FavoritedButton>
        </Overlay>
      )}
    </GalleryImageWrapper>
  )
}

export default ImageCard