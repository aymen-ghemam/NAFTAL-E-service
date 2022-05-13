import './App.css';
import MapView from './components/MapView';
import{Station} from './components/StationsList'; 
import StationsList from './components/StationsList';
function App() {



  return (
    <div className="App">
    <StationsList  stations={stationsList} />
     {/* <Station/> */}
     {/* <MapView /> */}
    </div>
  );
}
const stationsList = [ {
  id: 1,
  stationName: "station1", 
  time:11
},
{
  id: 2,
  stationName: "station2",  
  time:22
  }, 

  {
  id: 3,
  stationName: "station3",
  time:33},

]


export default App;
