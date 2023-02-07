import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap'


export class Contact extends Component {

  constructor(){
    super()
    this.state={
      firstName: "",
      lastName: "",
      email: "",
      mobile:"",
      agree:false,
      message:""
    }
  }

  handleInputChange= (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value

    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    console.log(this.state)
    event.preventDefault()

  }

  render() {
    document.title = "Contact Page"
    return (
      <div>
        <Fragment>
          <Container>
                <br/>
                <h1> Send us your FeedBack</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="firstName" 
                          placeholder="First name"
                          value={this.state.firstName}
                          onChange={this.handleInputChange}/>
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label>Fast Name</Form.Label>
                        <Form.Control 
                          type="text"
                          name="lastName" 
                          placeholder="Last name" 
                          value={this.state.lastName}
                          onChange={this.handleInputChange}/>
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group as={Col}>
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control 
                          type="number" 
                          name="mobile" 
                          placeholder="Enter your number"
                          value={this.state.mobile}
                          onChange={this.handleInputChange} />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                          type="email" 
                          name="email"
                          placeholder="Enter your Email"
                          value={this.state.email}
                          onChange={this.handleInputChange} />
                      </Form.Group>
                    </Row>

                    <Form.Label>Message</Form.Label>
                    <FloatingLabel
                      controlId="floatingTextarea"
                      label="Message"
                      className="mb-3"
                    >
                      <Form.Control 
                        as="textarea" 
                        name="message"
                        placeholder="Leave a Message here"
                        value={this.state.message}
                        onChange={this.handleInputChange} />
                    </FloatingLabel>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check 
                        type="checkbox" 
                        name="agree"
                        label="May we contact you?"
                        checked={this.state.agree}
                        onChange={this.handleInputChange} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
          </Form>
          </Container>
        </Fragment>
      </div>
    )
  }
}

export default Contact