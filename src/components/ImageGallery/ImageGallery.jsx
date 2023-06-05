import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
export const ImageGallery = ({images})=> {
    return <ul className={css.ImageGallery}>
        {images.map( image  => {
            return (  <ImageGalleryItem
                key={image.id}
                image={image} />
    )
        })}    
        </ul>

}

ImageGallery.protoTypes = {
    images: PropTypes.array.isRequired,
}
