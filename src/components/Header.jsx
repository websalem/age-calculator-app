import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Header = () => {
   
  return (
    <header>
        <div className="container">
        <div className="logo"><h2><Link to="/">Site Logo</Link></h2></div>
        <Navbar/>
        </div>
    </header>
  )
}
export default Header