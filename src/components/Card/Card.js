import React, { Component } from "react";
import styles from "../Card/Card.module.css";
import CableItem from "../CableItem/CableItem";
import ActionItem from "../ActionItem/ActionItem";
import upload from './upload.png';

export default class Card extends Component {
  ConditionalRender(props) {
    switch (props.props.title) {
      case "Action Items":
        return (
          <>
            <ActionItem />
            <ActionItem />
          </>
        );
      case "Upload":
        return (
          <div className={styles.upload}>
            <img className={styles.uploadImg} src={upload} alt="cloud"></img>
            <small>Drop files here or click to upload</small>
          </div>
        );
      case "Cable Listing":
        return <CableItem cableName="Cable #7497" date="1/10/22" />; 
      default:
        return <p>Nothing here yet</p>;
    }
  }

  render() {
    return (
      <div className={styles.card}>
        <div className={styles.headers}>
          <span className={styles.title}>{this.props.title}</span>
          <span className={styles.tag}>{this.props.tag}</span>
        </div>
        <this.ConditionalRender props={this.props} />
      </div>
    );
  }
}
