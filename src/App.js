import React, { useEffect } from "react";
import "./App.css";
import Login, { getTokenFromUrl } from "./pages/Login";
import { useDataLayerValue } from "./DataLayer";
import Pages from "./pages";


function App() {
  
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const readToken = getTokenFromUrl();
    console.log("Token: ", readToken);
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
      {token ? <Pages /> : <Login />}
    </div>
  );
}

export default App;
