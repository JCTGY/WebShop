import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SignUp = () => {

    const baseUrl = "http://localhost:9000/api/";
    const history = useHistory();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        userName: "",
        password: "",
        confirmPassword: ""
    })

    const onClickSignUp = (e) => {
        e.preventDefault();
        axios.post(`${baseUrl}cart/v1/cart/create/cart`, {}).then(result => {
            axios.post(`${baseUrl}customer/signUp`, {
                ...user,
                cartId: result.data.cartId
            }).then(res => {
                console.log(res);
                dispatch({ type: 'SIGNUP', payload: res.data })
                history.push("/");
            }).catch(err => {
                if (err.response.status === 409) {
                    console.log("user exist");
                }
                console.log(err);
            })
        })
    }

    const onChangeUser = ({ target: { name, value } }) => {
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div className="container">
            <Form>
                <Form.Group controlId="signUpUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        onChange={onChangeUser}
                        name="userName"
                    />
                </Form.Group>
                <Form.Group controlId="signUpPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={onChangeUser}
                        name="password"
                    />
                </Form.Group>
                <Form.Group controlId="signUpConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="ConfirmPassword"
                        onChange={onChangeUser}
                        name="confirmPassword"
                    />
                </Form.Group>
                <Button onClick={onClickSignUp} variant="primary" type="submit">
                    Submit
            </Button>
            </Form>
        </div>
    );
}

export default SignUp;