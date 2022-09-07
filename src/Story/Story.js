import Skills from './Skills';
import classes from './Story.module.css';

const Story = (props) => {
    return ( 
        <section className={classes['section-story']}>
            <div className={classes['box']}>
                <div className={classes['box-1-of-2']}>
                    <h2 className={classes['heading-secondary']}>Story</h2>
                    <div className={classes['story-box']}>
                        <p className={classes['long-copy']}>
                            I'm me! I'm a Software Developer that creates applications and I'm interested in client-side applications that leverage front-end technologies to create user interfaces. I use React JS as my main stack, and I'm high-spirited about JavaScript and its related technologies.
                        </p>  
                        <p className={classes['long-copy']}>
                            I have developed and tested numerous websites and web applications using a variety of programming languages and tools to suit the user and corporate needs. To increase the efficiency of the application software, I concentrate on web accessibility, progressive web applications, search engine/web optimization, and data security during the development process. I completed my first research on Secure Authentication in the Internet of Things and have a B.Sc. in computer science. I have theoretical expertise in algorithm design and object-oriented programming thanks to my background in computer science.
                        </p>
                    </div>
                </div>
                <div className={classes['box-1-of-2']}>
                    <h2 className={classes['heading-secondary']}>Skills</h2>
                    <Skills />
                </div>
            </div>
        </section>
     );
}
 
export default Story;