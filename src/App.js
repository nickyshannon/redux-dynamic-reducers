import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

// lazy loaded routes
const Home = lazy(() => import("./routes/home"));
const Map = lazy(() => import("./routes/map"));
const Form = lazy(() => import("./routes/form"));

const App = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </nav>

    <Suspense fallback="<div>Loading...</div>">
      <Route exact path="/" component={Home} />
      <Route exact path="/map" component={Map} />
      <Route exact path="/form" component={Form} />
    </Suspense>
  </Router>
);

export default connect()(App);
