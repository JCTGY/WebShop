import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import axios from 'axios';
import SelectUSState from 'react-select-us-states';
import { Redirect } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import './Shipping.css';

const Shipping = props => {

    const user = useSelector(state => state.userState.user);
    const checkOutList = useSelector(state => state.checkOut.checkOutList);
    const dispatch = useDispatch();
    const shippingInfo = user.shippingInfo;
    const [visibleAlert, setVisibleAlert] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        postalCode: "",
        specialInstructions: "",
        shippingType: "",
        shippingCost: 0,
        customerId: user.customerId,
    });

    const [formSaved, setFormSaved] = useState(false);

    const handleChange = ({ target: { name, value } }) => {
        setIsUpdate(true);
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const triggerCartEmptyWarning = () => {
        setVisibleAlert(true)
        setTimeout(() => {
            setVisibleAlert(false)
        }, 2000);
    }

    useEffect(() => {
        if (user && user.shippingInfo !== undefined 
            && user.shippingInfo !== null && user.shippingInfo.firstName !== undefined) {
            setFormData({
                ...formData,
                firstName: user.shippingInfo['firstName'],
                lastName: user.shippingInfo['lastName'],
                address1: user.shippingInfo['address1'],
                address2: user.shippingInfo['address2'],
                city: user.shippingInfo['city'],
                state: user.shippingInfo['state'],
                postalCode: user.shippingInfo['postalCode'],
                specialInstructions: user.shippingInfo['specialInstructions'],
                shippingType: user.shippingInfo['shippingType'],
                shippingCost: 0,
                customerId: user.customerId,
            })
        }
    }, [shippingInfo]);

    const handleSubmit = event => {
        event.preventDefault();
        if (checkOutList.length <= 0) {
            triggerCartEmptyWarning();
            return ;
        }
        if (isUpdate) {
            axios.post(`http://localhost:9000/api/shipping`, formData)
                .then(res => {
                    console.log(res);
                    console.log(res.data)
                    dispatch({ type: 'UPDATE_SHIPPINGINFO', payload: res.data })
                }).then(
                    setFormSaved(true));
        } else {
            setFormSaved(true)
        }
    }

    const changeShipState = event => {
        setFormData({
            ...formData,
            state: event
        })
    }

    const handleShippingType = ({ target: { name, value } }) => {

        switch (value) {
            case "Ground":
                setFormData({
                    ...formData,
                    [name]: value,
                    shippingCost: 2.99
                })
                console.log(formData);
                break;
            case "Priority":
                setFormData({
                    ...formData,
                    [name]: value,
                    shippingCost: 10.99
                })
                console.log(formData);
                break;
            case "Overnight":
                setFormData({
                    ...formData,
                    [name]: value,
                    shippingCost: 24.99
                })
                console.log(formData);
                break;

            default:
                break;

        }

    }

    if (formSaved === true) {
        return (
            <Redirect to={`order/${1}`} />
        )



    } else {
        return (

            <div className="shadowed-box">
                <h1>Shipping</h1>
                <Alert show={visibleAlert} variant='danger'>
                        Your Cart is empty
                    </Alert>
                <form id="shipping-form"  onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="row col-12">
                            <div className="col-6">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text"
                                    className="form-control"
                                    id="first-name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="col-6">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required />

                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row col-12">
                            <label htmlFor="address1">Address Line 1</label>
                            <input type="text"
                                className="form-control"
                                id="address1"
                                name="address1"
                                value={formData.address1}
                                onChange={handleChange}
                                required />

                        </div>
                        <div className="row col-12">
                            <label htmlFor="address2">Address Line 2</label>
                            <input type="text"
                                className="form-control"
                                id="address2"
                                name="address2"
                                value={formData.address2}
                                onChange={handleChange} />

                        </div>
                        <div className="row col-12">
                            <div className="col-4">
                                <label htmlFor="city">City</label>
                                <input type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required />

                            </div>
                            <div className="col-4">
                                <label htmlFor="state">State</label>

                                <SelectUSState id="myId"
                                    className="form-control"
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={changeShipState}
                                    required />

                            </div>
                            <div className="col-4">
                                <label htmlFor="postalCode">Postal Code</label>
                                <input type="text"
                                    className="form-control"
                                    id="postalCode"
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    required />

                            </div>
                        </div>
                        <hr/>
                        <div className="form-group">
                            <div className="col-12">
                                <label htmlFor="specialInstructions">Special Instructions</label>
                                <textarea
                                    className="form-control"
                                    id="specialInstructions"
                                    rows="3"
                                    name="specialInstructions"
                                    value={formData.specialInstructions}
                                    onChange={handleChange}>
                                </textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <label>Shipping</label>
                            <div className="col-sm-12" onChange={handleShippingType}>
                                <div className="row col-12">
                                    <div className="form-check col-4">
                                        <input className="form-check-input" type="radio" name="shippingType" id="gridRadios1" value="Ground" />
                                        <label className="form-check-label" htmlFor="gridRadios1">
                                            Ground
                                        </label>
                                    </div>
                                    <div className="form-check col-4">
                                        <input className="form-check-input" type="radio" name="shippingType" id="gridRadios2" value="Priority" />
                                        <label className="form-check-label" htmlFor="gridRadios2">
                                            Priority
                                        </label>
                                    </div>
                                    <div className="form-check col-4">
                                        <input className="form-check-input" type="radio" name="shippingType" id="gridRadios3" value="Overnight" />
                                        <label className="form-check-label" htmlFor="gridRadios3">
                                            Overnight
                                        </label>
                                    </div>
                                </div>
              
                            </div>
                        </div>
                    </div>
                    <button className="main-btn">Complete Order</button>
                </form>
            </div>
        )
    }



}

export default Shipping;