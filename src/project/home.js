import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";


export default function Home() {

    const mystate = useSelector(state=>state.logged)
    return (
        <div>            
            <ul className="nav navbar">
             { /* <li className="nav-item">
                    <Link to="history" className="nav-link">Home</Link>
                </li>*/}
                <li className="nav-item">
                    <Link to="logout" className="nav-link">LOGOUT</Link>
                </li>
                <li className='nav-item' style={{ marginLeft:"10px"}}>
                    <Link to="/updatePass">Update Password</Link>
                    </li>
            </ul>
            <h1>Welcome TO Building Material Management Software</h1>
            <h4>Presented By: </h4>
            <h6>Dhiraj Nagargoje - Prn 27</h6>
            <h6>Gajanan Shinde - Prn 30</h6>
            <h6>Rushikesh Nikam - Prn 61</h6>
            <h6>Suyash Bhonde - Prn 98</h6>
        <Outlet />
        </div>
    )

}