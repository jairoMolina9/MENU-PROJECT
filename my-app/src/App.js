import Event from "./EventMain";
import './App.css';
import { useSearchParams } from "react-router-dom";

function Display() {
  const [searchParams] = useSearchParams();
  const eventiD = searchParams.get('eventid');
  
  if(eventiD) {
    return <Event eventid={eventiD}> </Event>
  } else {
    return <h1>SCAN A QR CODE</h1>
  }

}

function App() {


  return (
    <div className="App">
      {Display()}
    </div>
  );
}

export default App;
