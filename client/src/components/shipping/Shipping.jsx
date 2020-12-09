import React, {useState} from 'react';
import axios from 'axios';
import SelectUSState from 'react-select-us-states';


const Shipping = props =>{


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
        orderId: -1
    });

    const handleChange = ({ target: { name, value } }) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = event =>{
        event.preventDefault();
        console.log(formData);
        axios.post(`http://localhost:9000/api/shipping`, formData)
            .then(res =>{
                console.log(res);
                console.log(res.data)
            })
    }


    const changeShipState = event => {
        setFormData({
            ...formData,
            state: event
        })    
    }

    const handleShippingType = ({ target: { name, value } }) => {
        // if(value === "Ground"){
        //     setFormData({
        //         ...formData,
        //         [name]: value,
        //         shippingCost: 2.99
        //     })
        //     console.log(formData);   
        // }

        // if(value === "Priority"){
        //     setFormData({
        //         ...formData,
        //         [name]: value,
        //         shippingCost: 2.99
        //     })
        //     console.log(formData);   
        // }

        // if(value === "Ground"){
        //     setFormData({
        //         ...formData,
        //         [name]: value,
        //         shippingCost: 2.99
        //     })
        //     console.log(formData);   
        // }
        switch(value){
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

    return (
        <div className="container col-8">
            <h1>Shipping</h1>
            <form id="shipping-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="row">
                        <div className="col-5">
                            <label htmlFor="first-name">first name</label>
                            <input type="text"
                            className="form-control"
                            id="first-name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required/>
                        </div>
                        <div className="col-5">
                            <label htmlFor="lastName">last name</label>
                            <input type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required/>

                        </div>
                    </div>
                </div> 
                <div className="form-group">
                    <div className="row col-10">
                            <label htmlFor="address1">Address Line 1</label>
                            <input type="text"
                            className="form-control" 
                            id="address1" 
                            name="address1"
                            value={formData.address1}
                            onChange={handleChange}
                            required/>

                    </div>
                    <div className="row col-10">
                            <label htmlFor="address2">Address Line 2</label>
                            <input type="text"
                            className="form-control"
                            id="address2"
                            name="address2"
                            value={formData.address2}
                            onChange={handleChange}/>

                    </div>
                    <div className="row col-10">
                        <div className="col-3">
                            <label htmlFor="city">City</label>
                            <input type="text"
                            className="form-control"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required/>

                        </div>
                        <div className="col-3">
                        <label htmlFor="state">State</label>

                        <SelectUSState id="myId" 
                            className="form-control"
                            id="state"
                            name="state"
                            value={formData.state} 
                            onChange={changeShipState}
                            required/>

                        </div>
                        <div className="col-3">
                            <label htmlFor="postalCode">Postal Code</label>
                            <input type="text"
                            className="form-control"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            required/>

                        </div> 
                    </div>
                    <div className="form-group">
                        <div className="col-10">
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
                    <div className="col-10"> 
                            <legend class="col-form-label col-sm-2 pt-0">Shipping</legend>
                            <div class="col-sm-10" onChange={handleShippingType}>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="shippingType" id="gridRadios1" value="Ground" />
                                <label class="form-check-label" htmlFor="gridRadios1">
                                    Ground
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="shippingType" id="gridRadios2" value="Priority" />
                                <label class="form-check-label" htmlFor="gridRadios2">
                                    Priority
                                </label>
                                </div>
                                <div class="form-check disabled">
                                <input class="form-check-input" type="radio" name="shippingType" id="gridRadios3" value="Overnight" />
                                <label class="form-check-label" htmlFor="gridRadios3">
                                    Overnight
                                </label>
                                </div>
                            </div>
                        </div>
                </div>
                <button type="submit">Complete Order</button>
            </form>
        </div>
    )

}

export default Shipping;