import React, { useEffect } from "react";
import "./App.css";
import Login, { getTokenFromUrl } from "./pages/Login";
import Home from "./pages/Home";
import { useDataLayerValue } from "./DataLayer";
import Pages from "./pages";


function App() {
  
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const readToken = getTokenFromUrl();
    window.location.hash = "";
    if (readToken) {
      dispatch({
        type: "SET_TOKEN",
        token: readToken
      });
    }
  }, []);


  return (
    <div className="App">
      {token ? <Home token={token}/> : <Login />}
    </div>
  );
}

export default App;
