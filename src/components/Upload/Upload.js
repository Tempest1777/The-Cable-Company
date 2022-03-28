import React, {CSSProperties,useState,useEffect} from "react";
import {useCSVReader,usePapaParse} from "react-papaparse"
import Papa from 'papaparse';
import { parse } from "papaparse";
import CAPTAR from "../../testData/captar"
import UpdateCaptar from "../../pages/UpdateCaptar/UpdateCaptar";
export default function Upload() {
  const [captar, setCaptar] = useState(CAPTAR);
  
  function UpdateCaptar(x){
    var captarTemp = captar;
    captarTemp[x].CableNumber = "Yeet";
    console.log(captarTemp[x])
    setCaptar(captarTemp);
  }
  return (
    <div>
      <ul>
        {captar.map((item,index) => {
          return(
          <button key={index} onClick={() => UpdateCaptar(index)}> 
          <li>
            <strong>{item.CableNumber}</strong>
          </li>
         </button>
          )
})}
      </ul>
    </div>
  );
}