import React,{ Component } from "react";

import styles from '../ActionItem/ActionItem.module.css';

function ActionItem(props){
    return(
        <div className = {styles.actionitem}>
            <div className={styles.leftBox}>leftbox</div>
            <div className={styles.rightBox}>rightbox</div>
        </div>
    )
}

export default ActionItem;