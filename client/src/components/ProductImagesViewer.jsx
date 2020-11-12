import React from 'react';

const ProductImagesViewer = ({productData}) => {
  const { images } = productData;
  return (
    <div className="productImagesViewer">
      <div className="productImagesViewer--thumbnails">
        {images.map(imageURL => {
          return <img src={imageURL} />
        })}
      </div>
      <div className="productImagesViewer--mainImage">
        {/* <img></img> */}
      </div>
    </div>
  );
}

export default ProductImagesViewer;