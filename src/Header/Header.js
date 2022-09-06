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
                            Front-End <span>Developer</span>
                            <i className="fa-solid fa-code"></i>
                        </h2>
                        <p className={classes['long-copy']}>All the gods, all the heavens, all the hells are within you. - Joseph Campbell</p>
                        <div className={classes['header-social-links']}>
                            <div className={classes['hsl-box-1-of-2']}>
                                <a href='https://www.linkedin.com/in/emmanuel-elugbaju'>
                                    <i className="fa-brands fa-linkedin-in"></i>LinkedIn
                                </a>
                            </div>
                            <div className={classes['hsl-box-1-of-2']}>
                                <a href='https://github.com/elughsmanuel'>
                                    <i className="fa-brands fa-github"></i>GitHub
                                </a>
                            </div>
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