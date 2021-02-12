import React, { useState,useContext } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import {CustomerDataContext} from '../Context/CustomerDataProvider';
import {useHistory} from "react-router-dom";

const CustomerData = () => {
    const history=useHistory();
    const [email,setEmail]=useState("");
    const [address1,setAddress1]=useState("");
    const [address2,setAddress2]=useState("");
    const [city,setCity]=useState("");
    const [name,setName]=useState("");
    const {setCustomerData}=useContext(CustomerDataContext)
    //const [state,setState]=useState("");
    const [zipcode,setZipcode]=useState("");
    const handleSubmit=e=>{
        setCustomerData({
            email,
            address1,
            address2,
            city,
            zipcode,
            name
        })
        history.push("/checkout")
        e.preventDefault()
    }
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
            <Form onSubmit={handleSubmit} style={{maxWidth:"700px"}}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={email} onChange={e=>setEmail(e.target.value)} required type="email" placeholder="Enter email" />
                    </Form.Group>

                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={e=>setName(e.target.value)} required placeholder="Jenny Rose" />
                </Form.Group>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control value={address1} onChange={e=>setAddress1(e.target.value)} required placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control value={address2} onChange={e=>setAddress2(e.target.value)} required placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control value={city} onChange={e=>setCity(e.target.value)} required/>
                    </Form.Group>

                    {/* <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control required as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group> */}

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control value={zipcode} onChange={e=>setZipcode(e.target.value)} required/>
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit" block>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CustomerData;
