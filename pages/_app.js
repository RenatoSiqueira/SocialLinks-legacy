import React from "react";
import "../css/styles.css";

const App = ({ Component, pageProps }) => (
  <div>
    <Component {...pageProps} />
  </div>
);

export default App;
