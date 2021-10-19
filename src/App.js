import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import PageNotFound from "./components/views/PageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <div>
        <hr />

        <Switch>
          {/* 경로상에 '/'가 존재하는 url들이 많으므로 정확하게 '/'만 있는 url을 구분지으려면 exact path를 사용해야 한다. */}
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          {/* 잘못된 URL경로로 접근했을 때 나타낼 페이지 */}
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
