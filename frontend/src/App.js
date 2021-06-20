import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Tyre from "./components/tyres";
import TyresList from "./components/tyres-list";
import Login from "./components/login";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }

  return (
    <div>
      <nav className="navbar navbar-expand justify-content-center navbar-dark bg-success">
        <a href="/tyres" className="navbar-brand mb-0 h1">
            TyreEasy
        </a> 
        <div className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to={"/tyres"} className="nav-link">
              All Tyres
            </Link>
          </li>
          <li className="nav-item" >
            { user ? (
              <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                Logout {user.name}
              </a>
            ) : (            
            <Link to={"/login"} className="nav-link">
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
          <ul class="pagination justify-content-center fixed-bottom">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item"><a class="page-link"  href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>    
    </div>   
  );
}

export default App;

