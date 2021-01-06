import React, { useEffect } from "react";
import {popularGameUrl} from "./api";

function App() {

  useEffect(() => {
    getDate()
  }, [])

  const getDate = async () => {
    const fetchData = await fetch(popularGameUrl())
    const data = await fetchData.json()
    console.log(data);
  }

  return (
    <div className="App">
      <h1>Hello jii</h1>
    </div>
  );
}

export default App;
