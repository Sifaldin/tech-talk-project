import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import custom styles for our application
import "./App.css";

import Auth from "./services/Auth";
import Navbar from "./components/layout/Navbar";

// Import pages
import LoginPage from "./components/auth/LoginPage";
import HomePage from "./components/home/HomePage";
import Posts from "./components/posts/Posts";
import ChatPage from "./components/chat/ChatPage";
import Comments from "./components/comments/Comments";

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());

  // update login, Auth service set logged in status
  Auth.bindLoggedInStateSetter(setLoggedIn);

  const loggedInRouter = (
    <Router>
      <Navbar onLogout={() => Auth.logout()} />

      <div>
        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>

          <Route path="/comments">
            <Comments />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );

  // return depends on login status, if not logged in, return loginPage
  return loggedIn ? loggedInRouter : <LoginPage />;
}

export default App;
