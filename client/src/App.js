import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
      <switch>
          <Route component={Nav}/>
          <Route exact path='/' component={Books}/>
          <Route exact path='/books' component={Books}/>
          <Route exact path='/books/:id' component={Detail}/>
          <Route component={NoMatch} />
      </switch>
      </BrowserRouter>
  );
}

export default App;
