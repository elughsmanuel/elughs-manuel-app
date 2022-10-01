import classes from './Projects.module.css';

const Projects = (props) => {
    return ( 
        <div className={classes['projects']}>
            <h3 className={classes['heading-secondary']}>Projects</h3>
            <div className={classes['projects-box']}>
                <div className={classes['projects-box-of-3']}>
                    <h4 className={classes['stack-tag']}>React JS AI</h4>
                    <h2 className={classes['project-title']}>Lawyer Up</h2>
                    <p className={classes['project-desc']}>Lawyer Up is a productivity app for lawyers to save hours of work, write distinctive, engaging and high-quality writing or content automatically.</p>
                    <div className={classes['project-links']}>
                        <div className={classes['project-links-of-2']}>
                            <a href='https://uselawyerup.live/'><i className="fa-solid fa-link"></i>Website</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes['projects-box']}>
                <div className={classes['projects-box-of-3']}>
                    <h4 className={classes['stack-tag']}>Webpack JS API</h4>
                    <h2 className={classes['project-title']}>Book App</h2>
                    <p className={classes['project-desc']}>Book App is a cataloging web application that allows individuals to search its database of IT, Programming and Computer Science books.</p>
                    <div className={classes['project-links']}>
                        <div className={classes['project-links-of-2']}>
                            <a href='https://thebookapp.netlify.app/'><i className="fa-solid fa-link"></i>Website</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes['projects-box']}>
                <div className={classes['projects-box-of-3']}>
                    <h4 className={classes['stack-tag']}>JS API</h4>
                    <h2 className={classes['project-title']}>iEXCHANGE</h2>
                    <p className={classes['project-desc']}>Calculate currency and foreign exchange rates with iEXCHANGE. Choose the currency and the amount to get the exchange rate.</p>
                    <div className={classes['project-links']}>
                        <div className={classes['project-links-of-2']}>
                            <a href='https://iexchange.netlify.app/'><i className="fa-solid fa-link"></i>Website</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Projects;