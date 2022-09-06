import classes from './Projects.module.css';

const Projects = (props) => {
    return ( 
        <div className={classes['projects']}>
            <h3 className={classes['heading-secondary']}>Projects</h3>
            <div className={classes['projects-box']}>
                <div className={classes['projects-box-of-3']}>
                    <h4 className={classes['stack-tag']}>Webpack JS API</h4>
                    <h2 className={classes['project-title']}>Book App</h2>
                    <p className={classes['project-desc']}>Book App is a cataloging web application that allows individuals to search its database of IT, Programming and Computer Science books.</p>
                    <div className={classes['project-links']}>
                        <div className={classes['project-links-of-2']}>
                            <a href='https://thebookapp.netlify.app/'><i className="fa-solid fa-desktop"></i>Live Demo</a>
                        </div>
                        <div className={classes['project-links-of-2']}>
                            <a href='https://github.com/elughsmanuel/book-app'><i className="fa-brands fa-github"></i>Source Code</a>
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
                            <a href='https://iexchange.netlify.app/'><i className="fa-solid fa-desktop"></i>Live Demo</a>
                        </div>
                        <div className={classes['project-links-of-2']}>
                            <a href='https://github.com/elughsmanuel/iexchange'><i className="fa-brands fa-github"></i>Source Code</a>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className={classes['projects-box']}>
                <div className={classes['projects-box-of-3']}>
                    <h4 className={classes['stack-tag']}>Laravel PHP MySQL</h4>
                    <h2 className={classes['project-title']}>iSUBMIT</h2>
                    <p className={classes['project-desc']}>An assignment manager app where students can submit assignments and instructor can review the submitted assignments.</p>
                    <div className={classes['project-links']}>
                        <div className={classes['project-links-of-2']}>
                            <a href='https://github.com/elughsmanuel/isubmit'><i className="fa-solid fa-desktop"></i>Live Demo</a>
                        </div>
                        <div className={classes['project-links-of-2']}>
                            <a href='https://github.com/elughsmanuel/isubmit'><i className="fa-brands fa-github"></i>Source Code</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default Projects;