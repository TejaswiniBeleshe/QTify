import React,{useState} from "react";
import {Box} from '@mui/material';
import Section from "../Section/Section";
function New(){
    let [check,setCheck] = useState(false);
    return(
        <Section l="New Albums" r="collapse" url="https://qtify-backend-labs.crio.do/albums/new" setCheck={setCheck} check={check}/>
    )

}
export default New