import React, {useState, useEffect, useRef} from 'react'

const ImageCard = ({ image }) => {
  const [spans, setSpans] = useState(0);
  const description = image.description;
  const urls = image.urls;
  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.addEventListener('load', handleSpans)
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
          alt={description} 
          src={urls.regular} 
      /> 
    </div>
  )
}

export default ImageCard