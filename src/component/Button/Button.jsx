import React from 'react';
import styles from './Button.module.css'
import { Link } from 'react-router-dom';
function Button({children}){
    return(
        <button className={styles.btn}>{children}</button>
    )
}
export default Button;