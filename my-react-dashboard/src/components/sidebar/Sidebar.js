import "./Sidebar.css";
import logo from "../../assets/logo.png";
import { AiFillHome, AiTwotoneSetting } from 'react-icons/ai';
import { HiCurrencyDollar } from 'react-icons/hi';
import { BiMap, BiPencil, BiBarChartSquare, BiLogOut } from 'react-icons/bi'
import { RiArrowLeftRightLine } from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { MdOutlineDevicesOther } from 'react-icons/md'
import { BsReceipt } from 'react-icons/bs'
import { MdMessage, MdOutlineCreditCard } from 'react-icons/md'
import { IoBagHandleOutline } from 'react-icons/io5'


const Sidebar = ({ sidebarOpen, closeSidebar, onMouse, onMouseOut }) => {
    console.log("MMM", sidebarOpen);
    return (
        <div className={sidebarOpen ? "sidebar-show" : "sidebar-responsive"} id="sidebar" onMouseOver={onMouse} onMouseOut={onMouseOut}>
            {/* <div className={sidebarOpen ? "sidebar__title" : "sidebar__title__hide"}>
            
            <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <p>e</p>
                    <h5>eng-imdev-superuser</h5>

                </div>

                <i className="fa fa_times" id="sidebarIcon" onClick={() => closeSidebar()}></i>
            </div> */}
            <div className={sidebarOpen ? "sidebar__menu" : "sidebar__menu__hide"} >
                <div className="sidebar__link">
                    {/* <i className="fa fa-home"></i> */}
                    < AiFillHome color="white" />
                    <a href="/#">Home</a>
                </div>
                <div className="sidebar__link">
                    {/* <i className="fa fa-home"></i> */}
                    < AiTwotoneSetting color="white" />
                    <a href="/#">Configurations</a>
                </div>
                <div className="sidebar__link">
                    {/* <i className="fa fa-fw fa-home"></i> */}
                    < HiCurrencyDollar color="white" />
                    <a href="/#">Currencies</a>
                </div>
                <div className="sidebar__link">
                    {/* <i className="fa fa-user-secret"></i> */}
                    <MdOutlineCreditCard />
                    <a href="/#">Tenders</a>
                </div>
                <div className="sidebar__link">
                    {/* <i className="fa fa-user-secret"></i> */}
                    <MdMessage color="white" />
                    <a href="/#">Reason Codes</a>
                </div>

                <div className="sidebar__link">
                    {/* <i className="fa fa-user-secret"></i> */}
                    <BiMap color="white" />
                    <a href="/#">Locations</a>
                </div>
                <div className="sidebar__link">
                    {/* <i className="fa fa-user-secret"></i> */}
                    < BiBarChartSquare />
                    <a href="/#">Store Activity</a>
                </div>
                <div className="sidebar__link">
                    {/* <i className="fa fa-user-secret"></i> */}
                    <BsReceipt color="white" />
                    <a href="/#">Transaction</a>
                </div>
                <div className="sidebar__link">
                    {/* <i className="fa fa-user-secret"></i> */}
                    <IoBagHandleOutline />
                    <a href="/#">Products</a>
                </div>

                <div className="sidebar__link">
                    {/* <i className="fa fa-user-secret"></i> */}
                    <BiPencil color="white" />
                    <a href="/#">Resourse</a>
                </div>
                <div className="sidebar__link">
                    {/* <i className="fa fa-user-secret"></i> */}
                    <MdOutlineDevicesOther color="white" />
                    <a href="/#">Devices</a>
                </div>
                <div className="sidebar__link">
                    {/* <i className="fa fa-user-secret"></i> */}
                    <RiArrowLeftRightLine color="white" />
                    <a href="/#">Ownership</a>
                </div>

                <div className="sidebar__link">
                    {/* <i className="fa fa-user-secret"></i> */}
                    < FiUsers color="white" />

                    <a href="/#">Users</a>
                </div>
                <div className="sidebar__logout">
                    {/* <i className="fa fa-power-off"></i> */}
                    <BiLogOut />
                    <a href="/#">Log out</a>
                </div>
            </div>

        </div>
    );
};
export default Sidebar;