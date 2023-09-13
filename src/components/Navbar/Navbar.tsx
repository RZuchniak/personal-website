import {Link} from "react-router-dom";
import './navbar.css'
function navbar() {
    return (
      <>
        <div id="links">
          <nav>
            <ul>
              <li id="link1">
                <Link className="text" to="/">Home</Link>
              </li>
              <li id="link2">
              <Link className="text" to="/projects">Projects</Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    )
  }
  
  export default navbar;