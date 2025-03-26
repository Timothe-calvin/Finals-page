import {useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";

const Details = () => {
    const Navigate = useNavigate();
        return(
    <>
    <button onClick={() => {Navigate(-1)}}>Back</button>
    </>
    )
}
 export default Details 