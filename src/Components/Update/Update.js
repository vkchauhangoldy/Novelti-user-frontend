import React, { useState, useEffect } from 'react'
import classes from '../Forms/User.module.css'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const params = useParams();
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    const getUserDetails = async () => {
        // console.log(params);
        await fetch(`https://novelti-backend.onrender.com/user/${params.id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => {
            return response.json()
        }).then(data => {
            if (data.status === "failed") {
                console.log(data.message);
            } else {
                setFirstName(data.getUser.firstName);
                setLastName(data.getUser.lastName);
                setEmail(data.getUser.email);
                setMobile(data.getUser.mobile);
                setAddress1(data.getUser.address1);
                setAddress2(data.getUser.adddress2);
                setCountry(data.getUser.country);
                setState(data.getUser.state);
                setZip(data.getUser.zip);
            }
        })
    }
    useEffect(() => {
        getUserDetails()
        // eslint-disable-next-line
    }, [])

    const updateDtails = async (e) => {
        await fetch(`https://novelti-backend.onrender.com/edit/${params.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstName, lastName, email, mobile, address1, address2, country, state, zip })
        }).then(response => {
            return response.json()
        }).then(data => {
            if (data.status === "failed") {
                console.log(data.message);
            } else {
                console.log(data);
                navigate('/main')
            }
        })
    }

    return (
        <div className={classes.container}>
            <div className={classes.form}>
                <div className={classes.heading}>
                    <h1>Update User Details </h1>
                </div>

                <div className={classes.input}>
                    <div className={classes["inputs-control"]}>
                        <label htmlFor='firstName'>First Name:</label>
                        <input type="text" name='firstName' placeholder='Enter First name' value={firstName} onChange={e => { setFirstName(e.target.value) }} />
                    </div>
                    <div className={classes["inputs-control"]}>
                        <label htmlFor='lastName'>Last Name:</label>
                        <input type="text" name='lastName' placeholder='Enter Last name' value={lastName} onChange={e => { setLastName(e.target.value) }} />
                    </div>
                </div>

                <div className={classes.input}>
                    <div className={classes["inputs-control"]}>
                        <label htmlFor='email'>Email:</label>
                        <input type="email" name='email' placeholder='Enter Email' value={email} onChange={e => { setEmail(e.target.value) }} />
                    </div>
                    <div className={classes["inputs-control"]}>
                        <label htmlFor='mobile'>Mobile:</label>
                        <input type="text" name='mobile' placeholder='Mobile Number' value={mobile} onChange={e => { setMobile(e.target.value) }} />
                    </div>
                </div>
                <div className={classes.input}>
                    <div className={classes["inputs-control"]}>
                        <label htmlFor='address1'>Address Line1:</label>
                        <input type="tex" name='address1' value={address1} onChange={e => { setAddress1(e.target.value) }} />
                    </div>
                    <div className={classes["inputs-control"]}>
                        <label htmlFor='address2'>Address Line2:</label>
                        <input type="text" name='address2' value={address2} onChange={e => { setAddress2(e.target.value) }} />
                    </div>
                </div>
                <div className={classes.input}>
                    <div className={classes["inputs-control"]}>
                        <label htmlFor='country'>Country</label>
                        <input type="text" name='country' value={country} onChange={e => { setCountry(e.target.value) }} />
                    </div>
                    <div className={classes["inputs-control"]}>
                        <label htmlFor='state'>State:</label>
                        <input type="text" name='state' value={state} onChange={e => { setState(e.target.value) }} />
                    </div>
                </div>
                <div className={classes.input}>
                    <div className={classes["inputs-control"]}>
                        <label htmlFor='zip'>Zip Code:</label>
                        <input type="number" name='zip' value={zip} onChange={e => { setZip(e.target.value) }} />
                    </div>
                </div>

                <div className={classes["actions-control"]}>
                    <button onClick={updateDtails}>Update Details</button>
                </div>
            </div>

        </div>
    )
}

export default Update;
