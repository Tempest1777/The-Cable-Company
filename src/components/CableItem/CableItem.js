import { func } from "prop-types";
import React,{Component} from "react";

import styles from './CableItem.module.css';

function CableItem(props){
    return(
        <div className={styles.CableItem}>
            <p> id={styles["cableName"]}{props.cableName}</p>
            <p> id={styles["date"]}{props.date}</p>
        </div>
    );
}

export default CableItem;