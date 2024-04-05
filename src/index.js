import React from "react"
import ReactDOM from "react-dom/client";
import App from "./App"
// import * as serviceWorker from "./serviceWorker"
import { BrowserRouter as Router, HashRouter } from "react-router-dom"
import { Provider } from "react-redux"

import store from "./store"

const root = ReactDOM.createRoot(document.getElementById("root"));

// const basename = process.env.NODE_ENV === 'production' ? '/index.html' : "."
// const basename = process.env.NODE_ENV === 'production' ? '/js/easycollab' : "."

// console.log('basename =>', basename)

root.render(
  <Provider store={store}>
    {/* <HashRouter> */}
    <Router>
      <App />
    </Router>
    {/* </HashRouter> */}
  </Provider>
)

