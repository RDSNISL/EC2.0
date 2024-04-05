import PropTypes from 'prop-types'
import React, { useState, useEffect } from "react"
import {
  Row,
  Col,
  Card,
  Alert,
  CardBody,
  Media,
  Button,
  Form, Input
} from "reactstrap"

// availity-reactstrap-validation
// import { AvForm, AvField } from "availity-reactstrap-validation"

// Redux
import { useSelector, useDispatch } from "react-redux"
import { withRouter } from "react-router-dom"

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb"

import avatar from "../../assets/images/users/avatar-1.jpg"
// actions
import { editProfile, resetProfileFlag } from "../../store/actions"

const UserProfile = props => {
  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [idx, setidx] = useState(1)

  const { error, success } = useSelector(state => state?.Profile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"))
      if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
        setname(obj.displayName)
        setemail(obj.email)
        setidx(obj.uid)
      } else if (
        process.env.REACT_APP_DEFAULTAUTH === "fake" ||
        process.env.REACT_APP_DEFAULTAUTH === "jwt"
      ) {
        setname(obj.username)
        setemail(obj.email)
        setidx(obj.uid)
      }
      setTimeout(() => {
        dispatch(resetProfileFlag());
      }, 3000);
    }
  }, [success])

  function handleValidSubmit(event, values) {
    dispatch(editProfile(values));
  }

  return (
    <React.Fragment>
      <div className="page-content">

        {/* Render Breadcrumb */}
        <Breadcrumb title="Qovex" breadcrumbItems="Profile" />

        <Row>
          <Col lg="12">
            {error && error ? (
              <Alert color="danger">{error}</Alert>
            ) : null}
            {success && success ? (
              <Alert color="success">{success}</Alert>
            ) : null}

            <Card>
              <CardBody>
                <Media>
                  <div className="ms-3">
                    <img
                      src={avatar}
                      alt=""
                      className="avatar-md rounded-circle img-thumbnail"
                    />
                  </div>
                  <Media body className="align-self-center">
                    <div className="text-muted">
                      <h5>{name}</h5>
                      <p className="mb-1">{email}</p>
                      <p className="mb-0">Id no: #{idx}</p>
                    </div>
                  </Media>
                </Media>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <h4 className="card-title mb-4">Change User Name</h4>

        <Card>
          <CardBody>
            <Form
              className="form-horizontal"
              onSubmit={(e, v) => {
                handleValidSubmit(e, v)
              }}
            >
              <div className="form-group">
                <Input
                  name="username"
                  label="User Name"
                  value={name}
                  className="form-control"
                  placeholder="Enter User Name"
                  type="text"
                  required
                />
                <Input name="idx" value={idx} type="hidden" />
              </div>
              <div className="text-center mt-4">
                <Button type="submit" color="danger">
                  Edit User Name
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  )
}

UserProfile.propTypes = {
  editProfile: PropTypes.func,
  error: PropTypes.any,
  success: PropTypes.any
}

export default withRouter(UserProfile)
