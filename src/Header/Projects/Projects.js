import classes from './Projects.module.css';

const Projects = (props) => {
    return ( 
        <div className={classes['projects']}>
            <h3 className={classes['heading-secondary']}>Projects</h3>
            <div className={classes['projects-box']}>
                <div className={classes['projects-box-of-3']}>
                    <h4 className={classes['stack-tag']}>Webpack JS API</h4>
                    <h2 className={classes['project-title']}>Book App</h2>
                    <p className={classes['project-desc']}>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
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
                    <p className={classes['project-desc']}>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
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
                    <p className={classes['project-desc']}>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
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