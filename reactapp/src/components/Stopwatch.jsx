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
     };

     const handleResume = () => {
        setIsRunning(true);
     };
      const handleReset = () =>{
        setTime(0);
        removeVisible();
        setIsRunning(false);
      };

      const formattedTime = () =>{
        const hours = Math.floor(time/3600);
        const minutes = Math.floor((time%3600)/60);
        const seconds = time%60;

        return `${hours.toString().padStart(2, "0")}:${minutes.toString().pad}`

      }
}