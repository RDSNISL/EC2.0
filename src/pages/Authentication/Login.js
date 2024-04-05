import PropTypes from 'prop-types'
import React, { useEffect } from "react"

import { Row, Col, Alert, Container, Form, Input } from "reactstrap"

// Redux
import { connect } from "react-redux"
import { withRouter, Link, useHistory } from "react-router-dom"

// availity-reactstrap-validation
// import { AvForm, AvField } from "availity-reactstrap-validation"

// actions
import { loginUser, apiError, socialLogin } from "../../store/actions"

// import images
import logo from "../../assets/images/logo-sm-dark.png"
import FormGenerater from 'components/FormBuilder/FormGenerater'
import { Fields } from 'constant/JsonSchema/Auth/Login'
import RHFButton from 'components/FormControls/RHFButton'

const Login = (props) => {

  const history = useHistory();

  useEffect(() => {
    document.body.className = "authentication-bg";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  });

  const onSubmit = () => {
    const token = { username: 'Dipesh Mali' }
    localStorage.setItem('authUser', JSON.stringify(token))
    history.push('/dashboard')
  }

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <div className="card overflow-hidden">
                <div className="bg-login text-center">
                  <div className="bg-login-overlay"></div>
                  <div className="position-relative">
                    <h5 className="text-white font-size-20">Welcome Back !</h5>
                    <p className="text-white-50 mb-0">Sign in to continue to Easycollab.</p>
                    <Link to="/" className="logo logo-admin mt-4">
                      <img src={logo} alt="" height="30" />
                    </Link>
                  </div>
                </div>
                <div className="card-body pt-5">
                  <div className="p-2">
                    <FormGenerater
                      formFields={Fields}
                      onSubmit={(values) => onSubmit(values)}
                      allowResetForm={false}
                      actions={
                        <div>
                          <RHFButton className="w-100 waves-effect waves-light" btnName="Login" type="submit" />
                        </div>
                      }
                    />

                    <div className="mt-4 text-center">
                      <Link to="/forgot-password" className="text-muted"><i
                        className="mdi mdi-lock me-1"></i> Forgot your password?</Link>
                    </div>

                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p>Don't have an account ? <Link to="/register"
                  className="fw-medium text-primary"> Signup now </Link> </p>
                <p>© {new Date().getFullYear()} Qovex. Crafted with <i
                  className="mdi mdi-heart text-danger"></i> by Themesbrand
                </p>
              </div>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  const { error } = state.Login
  return { error }
}

export default withRouter(
  connect(mapStateToProps, { loginUser, apiError, socialLogin })(Login)
)

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
  socialLogin: PropTypes.func
}