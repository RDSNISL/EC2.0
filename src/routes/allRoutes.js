import React from "react"
import { Redirect } from "react-router-dom"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import Projects from "../pages/Projects"

//Sales
import Applications from "../pages/Sales/Applications"
import Inquiry from "../pages/Sales/Inquiries"
import Customers from "../pages/Sales/Customers"

import Tasks from "../pages/Tasks"
import Apportunity from "../pages/Apportunity"
import Holiday from "../pages/Holiday"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import Documentation from "pages/Doc/Documentation"
import WizardExample from "pages/Doc/WizardExample/WizardExample"
import Example from "pages/Doc/DynamicForm/Example"
import SchemaBuilder from "components/FormBuilder/SchemaBuilder"

const userRoutes = [
  // Dashboard
  { path: "/dashboard", component: Dashboard },

  // Master
  { path: "/designations", component: Dashboard },
  { path: "/holidays", component: Holiday },
  { path: "/sources", component: Dashboard },
  { path: "/business_sources", component: Dashboard },
  { path: "/companies", component: Dashboard },
  { path: "/technologies", component: Dashboard },
  { path: "/TechFrameworks", component: Dashboard },
  { path: "/jobtypes", component: Dashboard },
  { path: "/weightages", component: Dashboard },
  { path: "/marketingstatuses", component: Dashboard },
  { path: "/countries", component: Dashboard },
  { path: "/cities", component: Dashboard },
  { path: "/trackerlogins", component: Dashboard },
  { path: "/skills", component: Dashboard },
  { path: "/domains", component: Dashboard },
  { path: "/subdomains", component: Dashboard },
  { path: "/customernatures", component: Dashboard },
  { path: "/customerimportances", component: Dashboard },
  { path: "/currencies", component: Dashboard },
  { path: "/headlines", component: Dashboard },
  { path: "/feedbacks", component: Dashboard },
  { path: "/itemsinventories", component: Dashboard },
  { path: "/snackitems", component: Dashboard },
  { path: "/tags", component: Dashboard },
  { path: "/elibraries", component: Dashboard },
  { path: "/elibrary_donates", component: Dashboard },
  { path: "/elibrarycategories", component: Dashboard },
  { path: "/support_types", component: Dashboard },
  { path: "/inquiry_default_docs", component: Dashboard },
  { path: "/team_masters", component: Dashboard },
  { path: "/inquiries_reject_reason", component: Dashboard },

  /*Sales */
  { path: "/applications", component: Applications },
  { path: "/inquiries", component: Inquiry },
  { path: "/customers", component: Customers },
  { path: "/projects", component: Projects },
  { path: "/tasks", component: Tasks },
  { path: "/apportunity", component: Apportunity },

  /** POC Routes */
  { path: "/doc", component: Documentation },
  { path: "/doc/wizard", component: WizardExample },
  { path: "/doc/form/example", component: Example },
  { path: "/doc/form/builder", component: SchemaBuilder },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [

  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },

]

export { userRoutes, authRoutes }