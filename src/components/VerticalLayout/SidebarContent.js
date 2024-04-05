import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
  }

  return (
    <React.Fragment>
      <SimpleBar className="vertical-simplebar" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")} </li>
            <li>
              <Link to="/dashboard" className="waves-effect">
                <i className="mdi mdi-airplay"></i>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-inbox-full"></i>
                <span>{props.t("Master")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/holidays"><i className="mdi mdi-timer"></i> {props.t("Holiday")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-inbox-full"></i>
                <span>{props.t("Sales")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/applications"><i className="mdi mdi-timer"></i> {props.t("Application")}</Link>
                </li>
                <li>
                  <Link to="/inquiries"><i className="mdi mdi-sort-variant"></i> {props.t("Inquiry")}</Link>
                </li>
                <li>
                  <Link to="/customers"><i className="mdi mdi-account-box"></i> {props.t("Customer")} </Link>
                </li>
                <li>
                  <Link to="/apportunity"><i className="mdi mdi-chip"></i> {props.t("Apportunity")} </Link>
                </li>
                <li>
                  <Link to="/#"><i className="mdi mdi-account-circle"></i> {props.t("Accounts")} </Link>
                </li>
                <li>
                  <Link to="/#"><i className="mdi mdi-handshake"></i> {props.t("Deals")} </Link>
                </li>
                <li>
                  <Link to="/#"><i className="mdi mdi-police-badge"></i> {props.t("Activities")} </Link>
                </li>
                <li>
                  <Link to="/#"><i className="mdi mdi-format-quote-close"></i> {props.t("Quotes")} </Link>
                </li>
                <li>
                  <Link to="/#"><i className="mdi mdi-file-document"></i> {props.t("Invoice")} </Link>
                </li>
                <li>
                  <Link to="/#"><i className="mdi mdi-bank"></i> {props.t("Bank")} </Link>
                </li>
                <li>
                  <Link to="/#"><i className="mdi mdi-clipboard-text"></i> {props.t("Reports")} </Link>
                </li>
                <li>
                  <Link to="/#"><i className="mdi mdi-calendar-month-outline"></i> {props.t("Calendar")} </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/projects" className=" waves-effect">
                <i className="mdi mdi-check-network"></i>
                <span>{props.t("Project")}</span>
              </Link>
            </li>
            <li>
              <Link to="/tasks" className=" waves-effect">
                <i className="mdi mdi-clipboard-list-outline"></i>
                <span>{props.t("Task")}</span>
              </Link>
            </li>
            <li>
              <Link to="/#" className=" waves-effect">
                <i className="mdi mdi-tools"></i>
                <span>{props.t("Settings")}</span>
              </Link>
            </li>
            <li>
              <Link to="/doc" className="waves-effect">
                <i className="mdi mdi-check-decagram"></i>
                <span>{props.t("POC")}</span>
              </Link>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))