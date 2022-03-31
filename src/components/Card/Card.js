import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../Card/CardModule.css'
import CableItem from '../CableItem/CableItem';
import ActionItem from '../ActionItem/ActionItem';


export default class Card extends Component{
  constructor(props){
    super(props);
  };

  ConditionalRender(props){

    switch(props.props.title){
      case "Action Items":
        return(
          <>
          <ActionItem/>
          <ActionItem/>
          </>
        );
        case "Upload":
          return(
            <div className='style.upload'>
            <img src={'../../upload.png'} alt="cloud"></img>
            <small>Drop files here or click to upload</small>
            </div>
          )
          case "Cable Listing":
            return(
              <CableItem cableName="Cable #7497" date="1/10/22"/>
            )
          default:
            return(
              <p>Nothing here yet</p>
            );
    }

  }

  render(){
    return(
      <div className={'styles.card'}>
        <div className={styles.title}>{this.props.title}</div>
        <div className={styles.tag}>{this.props.title}</div>
        <this.ConditionalRender props={this.props}/>
      </div>
    )
  }
  
}


