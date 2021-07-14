import React from "react";
import { Switch, Route, Link } from "react-router-dom"; // differnt url routes
import 'bootstrap/dist/css/bootstrap.min.css'; // app styled with bootstrap

import Tyre from "./components/tyres";
import TyresList from "./components/tyres-list";
import Login from "./components/login";

const App = () => { 

  const [user, setUser] = React.useState(null);
  // user state variable created with react hooks
  async function login(user = null) {
    setUser(user); // function with user passed it with default null. If a user is passed in to function it will set user
  }

  async function logout() { // when logged out user returns to null (login)
    setUser(null)
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <span className="navbar-brand justify-content-center" href="#">       
          <img src="assets/images/logo.png" width="50em" height="50em" className="d-inline-block" alt=""/>
          <h1 className="d-inline-block align-middle text-warning">&nbsp;EasyTyres</h1>    
        </span>
        <div className="navbar-nav ms-auto">
          {/* <li className="nav-item">                           // Not using this function at the moment
            <Link to={"/tyres"} className="nav-link text-warning">
              All Tyres
            </Link>
          </li>          */}
          <li className="nav-item" > 
            { user ? ( // ternary statement to change login/logout if user exists. First statement after ? for when it's true that a user exists...
              <a onClick={logout} className="nav-link text-info" style={{cursor:'pointer'}}>
                {user.name}  
              </a> // name appears in blue when logged in
            ) : (// second statement: if no user exists returns to this url...
            <Link to={"/login"} className="nav-link text-white">
              Login
            </Link>
            )}
          </li>
        </div>     
      </nav>

      <div className="container mt-3">
        <Switch> 
          <Route exact path={["/", "/tyres"]} component={TyresList} /> 
          <Route 
            path="/tyres"
            render={(props) => (
              <Tyre {...props} />
            )}
          />
          <Route 
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />
            )}
          />    
        </Switch>
      </div>
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination pagination-sm justify-content-end fixed-bottom">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li className="page-item"><a className="page-link"  href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>    
    </div>   
  );
}

export default App;

