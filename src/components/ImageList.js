import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {

    const {imgs} = props;

    const imgDisplay = imgs.map(img => (
            <ImageCard 
                key={img.id}
                url={img.urls.regular}
                description={img.description}
            />
        )
    );


  return (
    <div className="image-list">
        {imgDisplay}
    </div>
  )
}

export default ImageList;