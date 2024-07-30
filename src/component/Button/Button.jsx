import React from 'react';
import styles from './Button.module.css'
import { Link } from 'react-router-dom';
function Button({children}){
    return(
        <Link to='Hero'><button className={styles.btn}>{children}</button></Link>
    )
}
export default Button;