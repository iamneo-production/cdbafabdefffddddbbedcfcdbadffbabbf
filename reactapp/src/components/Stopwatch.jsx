import React ,{useState , useEffect} from React;
import './Stopwatch.css';
const Stopwatch = () =>{
    const[disable, setDisable] = useState(true);
    const[visible, setVisible] = useState(true);
    const removeVisible = () =>{
        setVisible((prev)=>!prev);
    }
    const removeDisable= () =>{
        setDisable(false);
    }
     const[time, setTime]= useState(0);
     const[isRunning, setIsRunning] = useState(false);

     
}