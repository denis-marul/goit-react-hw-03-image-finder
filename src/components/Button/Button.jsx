import PropTypes from 'prop-types';
import css from './Button.module.css';
export const Button = ({ click, photos }) => {
    
    return <>{ photos.length > 0 && <button className={css.Button} onClick={click} type="button">Load more</button>}</>
    
}

Button.protoTypes = {
    click: PropTypes.func.isRequired,
    photos: PropTypes.array.isRequired,
}