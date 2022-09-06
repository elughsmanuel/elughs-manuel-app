import classes from './Skills.module.css';
const Skills = (props) => {
    return ( 
        <div className={classes['skills-box']}>
            <div className={classes['skill-item']}>
                <h3>React | Redux | Next JS</h3>
            </div>
            <div className={classes['skill-item']}>
                <h3>JavaScript | TypeScript</h3>
            </div>
            <div className={classes['skill-item']}>
                <h3>MongoDB | Express | Node JS</h3>
            </div>
            <div className={classes['skill-item']}>
                <h3>React Native | Gatsby | Jest</h3>
            </div>
            <div className={classes['skill-item']}>
                <h3>Firebase | Webpack | Electron</h3>
            </div>
            <div className={classes['skill-item']}>
                <h3>Material UI | Chakra UI</h3>
            </div>
            <div className={classes['skill-item']}>
                <h3>Netlify | Vercel | Heroku</h3>
            </div>
            <div className={classes['skill-item']}>
                <h3>PHP | Laravel | MySQL</h3>
            </div>
            <div className={classes['skill-item']}>
                <h3>CMS: WordPress | Shopify</h3>
            </div>
            <div className={classes['skill-item']}>
                <h3>HTML5 | CSS3</h3>
            </div>
            <div className={classes['skill-item']}>
                <h3>SASS | SCSS | LESS</h3>
            </div>
            <div className={classes['skill-item']}>
                <h3>Bootstrap | Tailwind CSS</h3>
            </div>
            <div className={classes['skill-item']}>
                <h3>Git | GitHub</h3>
            </div>
            <div className={classes['skill-item']}>
                <h3>UX | UI Design</h3>
            </div>
        </div>
     );
}
 
export default Skills;