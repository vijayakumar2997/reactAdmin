import "./Navbar.css";
import avatar from "../../assets/avatar.svg";
import { FaBars } from 'react-icons/fa';
import {BsGrid3X3GapFill} from 'react-icons/bs'
const Navbar = (props)=>{
    return(
        <nav className={props.sidebarOpen ? "navbar-open" : "navbar"}>
            <div  className="nav_icon" onClick={()=> props.openSidebar()}>
                {/* <i className="fas fa-bars"></i> */}
                <FaBars color="#555555" />
                <a href="/#">
                    <img width="120" src={avatar} alt="avatar"/>
                </a>
            </div>
            
            {/* <div className="navbar__right">
                <a href="#">
                    <img width="120" src={avatar} alt="avatar"/>
                </a>
            </div> */}
            <div className="navbar__left">
                <BsGrid3X3GapFill color="#555555" />
            {/* <i className="fas fa-bars"></i> */}
              {/* <i class="bi bi-grid-3x3-gap-fill"></i> */}
            </div>
        </nav>
    )
}
export default Navbar;