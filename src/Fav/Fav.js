import Links from './Links';
import classes from './Fav.module.css';

const Fav = (props) => {
    return ( 
        <section className={classes['section-fav']}>
            <div className={classes['box']}>
                <div className={classes['box-1-of-2']}>
                    <h2 className={classes['heading-secondary']}>Others</h2>
                    <div className={classes['fav-content-box']}>
                        <h3>Top reads ...</h3>
                        <ul>
                            <li><span>Ake: The Years of Childhood</span> - Wole Soyinka</li>
                            <li><span>A Promise Land</span> - Barack Obama</li>
                            <li><span>Games People Play</span> - Eric Berne</li>
                            <li><span>Predictably Irrational</span> - Dan Ariely</li>
                        </ul>
                    </div>
                </div>
                <div className={classes['box-1-of-2']}>
                    <h2 className={classes['heading-secondary']}>Links</h2>
                    <Links />
                </div>
            </div>
        </section>
     );
}
 
export default Fav;