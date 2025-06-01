import { useEffect, useState } from 'react'
import './Stopwatch.css'

 const Stopwatch = () => {
    // whenever rerenders or refresh its called useEffect 
    //useEffect is nothing jst the effect mtln action or fucntion in react 
    useEffect( ()=>{
        // alert("re render ")
    })


    const [isRunning ,setIsRunning]= useState(false);
    const [elaspedTime , setElaspedTime] = useState(0);
    const intervalIdRef =

    



    function start(){

    }

    function stop(){

    }

    function formatTime(){

    }
    function reset(){

    }

    return  (
        <>
       <h1> stopwatch </h1>
        </>
    )
 }

 export default Stopwatch