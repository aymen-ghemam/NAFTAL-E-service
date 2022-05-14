import { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Map from "./pages/Map";

function App() {

  const [page, setPage] = useState(2);

  return (
    <div className="App">
      {page === 2 && <Map />}
      {page === 3 && <Store />}
      <NavigationBar page={page} setPage={setPage} />
    </div>
  );
}


export default App;
