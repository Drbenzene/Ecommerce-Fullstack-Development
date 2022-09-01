import React from 'react'
import {Link} from 'react-router-dom'

function SideBar() {
  return (
    <div>
                    <div className="scrollbar-sidebar">
              <div className="app-sidebar__inner">
                <ul className="vertical-nav-menu">
                  <li className="app-sidebar__heading">My Account</li>
                  <li>
                    <Link to="/dashboard" className="mm-active">
                      <i className="metismenu-icon pe-7s-rocket" />
                      Home
                    </Link>
                  </li>
                  <li className="app-sidebar__heading">Orders</li>
                  <li>
                    <Link to="/">
                      <i className="metismenu-icon pe-7s-diamond" />
                      Orders
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
    </div>
  )
}

export default SideBar