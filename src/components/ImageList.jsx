import React from 'react'
import ImageCard from './ImageCard'
import './ImageList.css';

const ImageList = ({ images }) => {

  const populateImageList = () => {
    return images.map((image, index) => {
      return <ImageCard key={`${index}_${image.id}`} image={image} />
    });
  };

  return (
    <div className='image-list'>{images && populateImageList()}</div>
  )
}

export default ImageList;
