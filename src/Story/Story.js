import Skills from './Skills';
import classes from './Story.module.css';

const Story = (props) => {
    return ( 
        <section className={classes['section-story']}>
            <h2 className={classes['heading-secondary']}>Story / Skills</h2>
            <div className={classes['box']}>
                <div className={classes['box-1-of-2']}>
                    <div className={classes['story-box']}>
                        <p className={classes['long-copy']}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam accusantium repudiandae autem voluptatem provident quos animi commodi quibusdam quidem consectetur facere nemo, vero dolorum sunt, maxime voluptates. Culpa a consectetur maxime natus libero vitae iusto architecto deserunt nam? Alias suscipit vitae ut, adipisci voluptates facilis voluptas atque laborum autem deleniti!    
                        </p>  
                        <p className={classes['long-copy']}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident perspiciatis voluptates autem vero atque eligendi exercitationem voluptas consectetur quos reprehenderit, rem unde ex obcaecati. Sed ullam laudantium natus adipisci. Consectetur, dolorem earum eligendi vero neque aliquid illum sunt atque similique magnam voluptate a temporibus consequatur quia dolor minima inventore totam dolores voluptas, voluptatibus harum esse! Libero totam voluptatibus, omnis dicta facere rerum doloremque ipsa illo numquam magni quas. 
                        </p> 
                    </div>
                </div>
                <div className={classes['box-1-of-2']}>
                    <Skills />
                </div>
            </div>
        </section>
     );
}
 
export default Story;