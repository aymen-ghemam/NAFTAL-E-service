import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Map from "./pages/Map";

function App() {

  return (
    <div className="App">
      <Map/>
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
