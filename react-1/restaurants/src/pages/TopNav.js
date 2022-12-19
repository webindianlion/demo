import React from "react"
import { Outlet, Link } from "react-router-dom";

const TopNav = function(){

    return <>
    <nav className="">
      <ul className="d-flex justify-content-center">
        <li className="p-2 m-2 border">
          <Link to="/">Count</Link>
        </li>
        <li className="p-2 m-2 border">
          <Link to="/reducer">Reducer</Link>
        </li>
        <li className="p-2 m-2 border">
          <Link to="/restaurant">Restaurant</Link>
        </li>
        <li className="p-2 m-2 border">
          <Link to="/usecallback">useCallback</Link>
        </li>
        <li className="p-2 m-2 border">
          <Link to="/useMemoComponent"> UseMemoComponent </Link>
        </li>
        <li className="p-2 m-2 border">
          <Link to="/userefcomponent">UseRefComponent</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
}

export default TopNav;
