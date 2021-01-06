import React, { useEffect } from "react";
import {popularGameUrl} from "./api";
import axios from "axios";

function App() {

  useEffect(() => {
    getDate()
  }, [])

  const getDate = async () => {
    const fetchData = await axios.get(popularGameUrl())
    // const data = await fetchData.json()
    console.log(fetchData);
  }

  return (
    <div className="App">
      <h1>Hello jii</h1>
    </div>
  );
}

export default App;
