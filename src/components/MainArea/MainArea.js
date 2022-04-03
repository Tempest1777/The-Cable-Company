import React,{Component} from "react";
import Card from "../Card/Card";
import styles from "../MainArea/MainArea.module.css";

class MainArea extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }
    
    render(){
        return(
            <div className= {styles.mainArea}>
               <div className= {styles.largecardcontainer}>
                   <Card title = "Action Items" tag="Approvers"/>
                   <Card title = "Activity Feeds" tag="View All"/>
               </div>
               <div className= {styles.smallcardcontainer}>
                   <Card title = "Cable Listing" tag="Modified"/>
                   <Card title = "Upload" tag=""/>
               </div>
            </div>
        )
    }
}

export default MainArea;