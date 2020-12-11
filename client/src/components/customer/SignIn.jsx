import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const SignIn = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        userName: "",
        password: ""
    })

    const onClickSignIn = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/api/customer/signIn", user)
            .then(res => {
                console.log(res);
                dispatch({type: 'SIGNIN', payload: res.data})
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
        <div className="container">
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
                    <label>Don't have a account? <Link to="/signUp">SignUp</Link></label>
                    <Button onClick={onClickSignIn} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>


        </div>

 
    );
}

export default SignIn;