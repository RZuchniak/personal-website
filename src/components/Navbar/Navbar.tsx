import {Link} from "react-router-dom";
import './Navbar.css'
function navbar() {
    return (
      <>
        <div id="links">
          <nav>
            <ul>
              
                <li id="link1">
                  <h2>
                  <Link className="text" to="/">Home</Link>
                  </h2>
                </li>
              
                <li id="link2">

                <h2>
                <Link className="text" to="/projects">Projects</Link>

                </h2>
                </li>
            </ul>
          </nav>
        </div>
      </>
    )
  }
  
  export default navbar;