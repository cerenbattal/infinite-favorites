import React, {useState, useEffect, useRef} from 'react'

const ImageCard = ({ image }) => {
  const [spans, setSpans] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.addEventListener('load', handleSpans);
  }, []);

  const handleSpans = () => {
    const height = imageRef.current.clientHeight
    const spans = Math.ceil(height / 10 + 1)
    setSpans(spans);
  };

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img
        ref={imageRef}
        alt={image.title}
        loading="lazy"
        src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
      />
    </div>
  )
}

export default ImageCard