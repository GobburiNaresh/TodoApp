import todoImage from '../../public/images/todoImage.jpg';
import classes from './Homepage.module.css';

const HomepageImage = () => {
    return (
        <div className={classes.image}>
            <img 
                src={todoImage.src}
                alt="Todo Image" 
            />
        </div>
    );
}

export default HomepageImage;
