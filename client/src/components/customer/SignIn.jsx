import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, Alert, Row } from 'react-bootstrap';
import './Login.css';

const SignIn = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [visibleAlert, setVisibleAlert] = useState(false);
    const [user, setUser] = useState({
        userName: "",
        password: ""
    })

    const triggerQtyWarning = () => {
        setVisibleAlert(true)
        setTimeout(() => {
            setVisibleAlert(false)
        }, 2000);
    }

    const onClickSignIn = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/api/customer/signIn", user)
            .then(res => {
                console.log("user: " + res.data);
                dispatch({ type: 'SIGNIN', payload: res.data })
                history.push("/");
            }).catch(err => {
                triggerQtyWarning();
                console.log(err);
            })
    }

    const onChangeUser = ({ target: { name, value } }) => {
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div className="login-box">
            <Alert show={visibleAlert} variant='danger'>
                Invalid Password or Username
            </Alert>
            <Form>
                <Form.Group controlId="signInUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        onChange={onChangeUser}
                        name="userName"
                    />
                </Form.Group>
                <Form.Group controlId="signInPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={onChangeUser}
                        name="password"
                    />
                </Form.Group>
                <label>Don't have a account? <Link to="/signUp">SignUp</Link></label>
                <Row>
                    <a onClick={onClickSignIn} className="main-btn" id="login-btn">
                        Submit
                        </a>
                </Row>
           
            </Form>


        </div>


    );
}

export default SignIn;