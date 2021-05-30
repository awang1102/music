import React, { useEffect } from "react";
import "./App.css";
import Login, { getTokenFromUrl } from "./pages/Login";
import { useDataLayerValue } from "./DataLayer";
import Pages from "./pages";


function App() {
  
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const readToken = getTokenFromUrl();
    window.location.hash = "";
    if (token == null) {
      dispatch({
        type: "SET_TOKEN",
        token: readToken
      });
    }
  }, []);


  return (
    <div className="App">
      {token ? <Pages /> : <Login />}
    </div>
  );
}

export default App;
