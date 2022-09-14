import classes from './Header.module.css';
import Projects from './Projects/Projects';

const Header = (props) => {
    return ( 
        <header className={classes.header}>
            <div className={classes.box}>
                <div className={classes['box-1-of-2']}>
                    <div className={classes['header-description']}>
                        <h1 className={classes['heading-main']}>Hello, I'm <br /> Emmanuel <span>Elugbaju</span></h1>
                        <h2 className={classes['heading-sub']}>
                            Software <span>Developer</span>
                            <i className="fa-solid fa-code"></i>
                        </h2>
                        <p className={classes['long-copy']}>All the gods, all the heavens, all the hells are within you. - Joseph Campbell</p>
                        <div className={classes['header-link']}>
                            <a href="mailto:elugbajuemmanueltobi@gmail.com">Send a message<i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className={classes['box-1-of-2']}>
                    <Projects />
                </div>
            </div>
        </header>
     );
}
 
export default Header;