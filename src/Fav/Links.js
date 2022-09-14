import classes from './Links.module.css';

const Links = (props) => {
    return ( 
        <div className={classes['links-box']}>
            <ul>
                <li><i className="fa-solid fa-circle"></i><a href="https://twitter.com/ElughsM/status/1569054456725078023">Read this: JavaScript is JavaScript</a></li>
                <li><i className="fa-solid fa-circle"></i><a href="https://github.com/elughsmanuel/elughsmanuel">Read my GitHub Profile: README.md</a></li>
                <li><i className="fa-solid fa-circle"></i><a href="mailto:elugbajuemmanueltobi@gmail.com">Send me a Message</a></li>
            </ul>
        </div>

     );
}
 
export default Links;