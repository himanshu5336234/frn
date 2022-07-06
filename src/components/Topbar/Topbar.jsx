import { Link, useNavigate} from "react-router-dom";
import React from "react";
import "./Topbar.css";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { isLoggedIn } from "../../utils";

const Topbar = () => {
  const nav =useNavigate()
  const [searchData, setSearchData] = React.useState("");
  const dispatch = useDispatch();

  const searchHandleChange = () => {
    dispatch({ type: "SEARCH_PRODUCT", payload: searchData });
  };

  const logout = () => {
    localStorage.removeItem("Token");
window.location ="/"
  };

  return (
    <div className="nav-bar">
      <header>
        <div id="logo">
          <h1>
            <Link to="/">
              <span className="blue-text">BOOK</span>LANE
            </Link>
          </h1>
        </div>
        <nav>
   
        </nav>
      

        <div id="link">
       {isLoggedIn()?<><div onClick={() => logout()}>
            <h4>logout</h4>
          </div></>:<>
          <Link to="/signin">
          Sign In</Link>
          </>}
          
        </div>
      </header>
    </div>
  );
};

export default Topbar;
