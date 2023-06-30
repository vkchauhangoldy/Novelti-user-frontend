import React, { useState } from 'react'
import classes from './User.module.css'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const UserForm = () => {
    const navigate = useNavigate();
    const [err, setErr] = useState("")
    const [userDetails, setUserDetails] = useState({
        firstName: "", lastNmae: "", email: "", mobile: "", address1: "", address2: "",
        state: "", country: "", zip: ""
    });

    const changeHandler = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        await fetch("https://novelti-backend.onrender.com/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userDetails)
        }).then((response) => {
            return (response.json())
        }).then(data => {
            if (data.status === "failed") {
                setErr(data.message)
            } else {
                navigate('/main')
            }
        }).catch(err => {
            setErr(err);
        })
    }

    return (
        <div className={classes.wrapper}>
            <Header />
            <div className={classes.container}>

                <form onSubmit={submitHandler} className={classes.form}>
                    <div className={classes.heading}>
                        <h1>User Details Form</h1>
                    </div>

                    <div className={classes.input}>
                        <div className={classes["inputs-control"]}>
                            <label htmlFor='firstName'>First Name:</label>
                            <input type="text" name='firstName' placeholder='Enter First name' onChange={changeHandler} />
                        </div>
                        <div className={classes["inputs-control"]}>
                            <label htmlFor='lastName'>Last Name:</label>
                            <input type="text" name='lastName' placeholder='Enter Last name' onChange={changeHandler} />
                        </div>
                    </div>

                    <div className={classes.input}>
                        <div className={classes["inputs-control"]}>
                            <label htmlFor='email'>Email:</label>
                            <input type="email" name='email' placeholder='Enter Email' onChange={changeHandler} />
                        </div>
                        <div className={classes["inputs-control"]}>
                            <label htmlFor='mobile'>Mobile:</label>
                            <input type="text" name='mobile' placeholder='Mobile Number' onChange={changeHandler} />
                        </div>
                    </div>
                    <div className={classes.input}>
                        <div className={classes["inputs-control"]}>
                            <label htmlFor='address1'>Address Line1:</label>
                            <input type="tex" name='address1' onChange={changeHandler} />
                        </div>
                        <div className={classes["inputs-control"]}>
                            <label htmlFor='address2'>Address Line2:</label>
                            <input type="text" name='address2' onChange={changeHandler} />
                        </div>
                    </div>
                    <div className={classes.input}>
                        <div className={classes["inputs-control"]}>
                            <label htmlFor='country'>Country</label>
                            <input type="text" name='country' onChange={changeHandler} />
                        </div>
                        <div className={classes["inputs-control"]}>
                            <label htmlFor='state'>State:</label>
                            <input type="text" name='state' onChange={changeHandler} />
                        </div>
                    </div>
                    <div className={classes.input}>
                        <div className={classes["inputs-control"]}>
                            <label htmlFor='zip'>Zip Code:</label>
                            <input type="number" name='zip' onChange={changeHandler} />
                        </div>
                    </div>
                    <div className={classes.err}>{err}</div>
                    <div className={classes["actions-control"]}>
                        <button type='submit'>Add Details</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default UserForm;
