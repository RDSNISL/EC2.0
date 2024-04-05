import React, { useEffect } from "react"
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from "react-redux"
import { withRouter, useLocation } from "react-router-dom"
import {
  changeLayout,
  changeSidebarTheme,
  changeSidebarType,
  changeTopbarTheme,
  changeLayoutWidth,
} from "../../store/actions"

import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Rightbar from "../CommonForBoth/Rightbar"

const Layout = (props) => {

  const dispatch = useDispatch();
  const layout = useSelector(state => state?.Layout);
  const location = useLocation();

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const capitalizeFirstLetter = string => {
    return string.charAt(1).toUpperCase() + string.slice(2)
  }

  useEffect(() => {

    if (layout.isPreloader === true) {
      document.getElementById("preloader").style.display = "block"
      document.getElementById("status").style.display = "block"

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none"
        document.getElementById("status").style.display = "none"
      }, 2500)
    } else {
      document.getElementById("preloader").style.display = "none"
      document.getElementById("status").style.display = "none"
    }

    // Scroll Top to 0
    window.scrollTo(0, 0)
    let currentage = capitalizeFirstLetter(location.pathname)

    document.title =
      currentage + " | Qovex - Responsive Bootstrap 5 Admin Dashboard"
    if (layout.leftSideBarTheme) {
      dispatch(changeSidebarTheme(layout.leftSideBarTheme))
    }

    dispatch(changeLayout("detached"))

    if (layout.layoutWidth) {
      dispatch(changeLayoutWidth(layout.layoutWidth))
    }

    if (layout.leftSideBarType) {
      dispatch(changeSidebarType(layout.leftSideBarType))
    }
    if (layout.topbarTheme) {
      dispatch(changeTopbarTheme(layout.topbarTheme))
    }

  }, [])

  const toggleMenuCallback = () => {
    if (layout.leftSideBarType === "default") {
      dispatch(changeSidebarType("condensed", isMobile))
    } else if (layout.leftSideBarType === "condensed") {
      dispatch(changeSidebarType("default", isMobile))
    }
  }


  return (
    <React.Fragment>
      <div id="preloader">
        <div id="status">
          <div className="spinner-chase">
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div id="layout-wrapper">
          <Header toggleMenuCallback={() => toggleMenuCallback()} />
          <Sidebar
            theme={layout.leftSideBarTheme}
            type={layout.leftSideBarType}
            isMobile={isMobile}
          />
          <div className="main-content">
            {props.children}
            <Footer />
          </div>
        </div>
      </div>
      {layout.showRightSidebar ? <Rightbar /> : null}
    </React.Fragment>
  )

}

Layout.propTypes = {
  changeLayoutWidth: PropTypes.func,
  changeSidebarTheme: PropTypes.func,
  changeSidebarType: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  children: PropTypes.object,
  isPreloader: PropTypes.any,
  layoutWidth: PropTypes.any,
  leftSideBarTheme: PropTypes.any,
  leftSideBarType: PropTypes.any,
  location: PropTypes.object,
  showRightSidebar: PropTypes.any,
  topbarTheme: PropTypes.any
}

export default withRouter(Layout);