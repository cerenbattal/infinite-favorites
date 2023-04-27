import React from 'react'
import ImageCard from "./ImageCard"
import './ImageList.css';

const ImageList = ({ images }) => {

  const populateImageList = () => {
    return images.map((image) => {
      return <ImageCard key={image.id} image={image} />
    });
  }

  return (
    <div className="image-list">{populateImageList()}</div>
  )
}

export default ImageListfc