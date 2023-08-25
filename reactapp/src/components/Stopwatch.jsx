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

     useEffect(() => {
        let interval = null;
        if(isRunning){
            interval=setInterval(()=>{
                setTime((time) => time + 1);
            },1000);
        }else if(!isRunning && time !==0){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
     },[isRunning,time]);

     const handleStart = () => {
        removeDisable();
        removeVisible();
        setIsRunning(true);
     };

     const handlePause = () => {
        setIsRunning(false);
     }

     const handleResume = () => {
        setIsRunning
     }
}