import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SignUp = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        userName: "",
        password: "",
        confirmPassword: ""
    })

    const onClickSignUp = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/api/customer/signUp", user)
            .then(res => {
                console.log(res);
                history.push("/");
            }).catch(err => {
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
        <Form>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    onChange={onChangeUser}
                    name="userName"
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={onChangeUser}
                    name="password"
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
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
    );
}

export default SignUp;