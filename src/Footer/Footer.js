import classes from './Footer.module.css';

const Footer = (props) => {
    return ( 
        <div className={classes['footer']}>
            <div className={classes['footer-box']}>
                <div className={classes['footer-box-1-of-2']}>
                    <a href='https://www.linkedin.com/in/emmanuel-elugbaju'><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
                    <a href='https://github.com/elughsmanuel'><i className="fa-brands fa-github"></i>GitHub</a>
                    <a href='https://twitter.com/elughsm'><i className="fa-brands fa-twitter"></i>Twitter</a>
                </div>  
                <div className={classes['footer-box-1-of-2']}>
                    <p>Lagos, Nigeria</p>
                </div> 
            </div>
        </div>
     );
}
 
export default Footer;
