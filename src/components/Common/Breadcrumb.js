import React from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Row, Col, BreadcrumbItem, Card, CardHeader } from "reactstrap"

const Breadcrumb = ({ title, breadcrumbItems }) => {
  const lastCrumb = breadcrumbItems?.slice(-1)[0];
  return (

    <Card className="m-0" >
      <CardHeader className="py-0">
        <Row>
          <Col className="col-12">
            <div className="page-title-box d-flex align-items-start align-items-center justify-content-between">
              <h3 className="page-title mb-0">{title}</h3>

              <div className="page-title-right">
                {breadcrumbItems?.length > 0 &&
                  <ol className="breadcrumb m-0">
                    {breadcrumbItems?.map((breadcrumb, index) => (
                      <BreadcrumbItem key={index}>
                        <Link className={(breadcrumb === lastCrumb) ? "inactive" : ""} to={breadcrumb?.path || ""} >
                          <span className={(breadcrumb === lastCrumb) ? "active" : ""}>{breadcrumb?.heading}</span>
                        </Link>
                      </BreadcrumbItem>
                    ))}
                  </ol>
                }
              </div>

            </div>
          </Col>
        </Row>
      </CardHeader>
    </Card>
  )
}

Breadcrumb.propTypes = {
  breadcrumbItem: PropTypes.string,
  title: PropTypes.string
}

export default Breadcrumb
