import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import classes from './Main.module.css'
import Header from '../Header/Header.js'
const Main = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState([]);

    const editHandler = (id) => {
        navigate(`/edit/${id}`)
    }

    const sendRequest = async () => {
        await fetch("https://novelti-backend.onrender.com/all", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then(response => {
                return response.json()
            }).then(data => {
                setUserData(data.allUsers);
            });
    }

    useEffect(() => {
        sendRequest();
    }, []);


    const deleteHandler = async (id) => {
        fetch(`https://novelti-backend.onrender.com/delete/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        }).then(response => {
            return response.json()
        }).then(data => {
            if (data.status === "success") {
                sendRequest();
            }
        }).catch(e => {
            console.log(e)
        })
    }

    // output in table form

    // return (

    //     <div className={classes.wrapper}>

    //         <Header />
    //         <div className={classes.container}>
    //             <table className={classes.table}>
    //                 <thead>
    //                     <tr>
    //                         <th>Sr.No.</th>
    //                         <th>First name</th>
    //                         <th>Last name</th>
    //                         <th>Email</th>
    //                         <th>Mobile</th>
    //                         <th>Adddress Line1</th>
    //                         <th>Adddress Line2</th>
    //                         <th>Country</th>
    //                         <th>State</th>
    //                         <th>Zip Code</th>
    //                         <th>Actions</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {
    //                         userData.map((data, i) => (
    //                             <tr key={i}>
    //                                 <td>{i + 1}</td>
    //                                 <td>{data.firstName}</td>
    //                                 <td>{data.lastName}</td>
    //                                 <td>{data.email}</td>
    //                                 <td>{data.mobile}</td>
    //                                 <td>{data.address1}</td>
    //                                 <td>{data.address2}</td>
    //                                 <td>{data.country}</td>
    //                                 <td>{data.state}</td>
    //                                 <td>{data.zip}</td>
    //                                 <td className={classes.actions}>
    //                                     <button onClick={() => editHandler(data._id)} className={classes.edit}>Edit</button>
    //                                     <button onClick={() => deleteHandler(data._id)} className={classes.delete}>Delete</button>
    //                                 </td>
    //                             </tr>
    //                         ))
    //                     }
    //                 </tbody>
    //             </table>
    //         </div>
    //     </div>
    // )

    // output in cards form
    return (

        <div className={classes.wrapper}>

            <Header />
            <div className={classes.container}>


                <div className={classes.data}>
                    {
                        userData.map((data, i) => (
                            <div key={i} className={classes.child}>
                                <p className={classes.childern}>
                                    {<h3>Sr.No:</h3>}<h3>{i + 1}</h3>
                                </p>
                                <p className={classes.childern}>
                                    {<h3>Frist name:</h3>}<p>{data.firstName}</p>
                                </p>
                                <p className={classes.childern}>
                                    {<h3>Last name:</h3>}<p>{data.lastName}</p>
                                </p>
                                <p className={classes.childern}>
                                    {<h3>Email-Id:</h3>}<p>{data.email}</p>
                                </p>
                                <p className={classes.childern}>
                                    {<h3>Mobile:</h3>}<p>{data.mobile}</p>
                                </p>
                                <p className={classes.childern}>
                                    {<h3>Adrress Line1:</h3>}<p>{data.address1}</p>
                                </p>
                                <p className={classes.childern}>
                                    {<h3>Adrress Line2:</h3>}<p>{data.address2}</p>
                                </p>
                                <p className={classes.childern}>
                                    {<h3>Country:</h3>}<p>{data.country}</p>
                                </p>
                                <p className={classes.childern}>
                                    {<h3>State:</h3>}<p>{data.state}</p>
                                </p>
                                <p className={classes.childern}>
                                    {<h3>Zip Code:</h3>}<p>{data.zip}</p>
                                </p>

                                <p className={classes.actions}>
                                    <button onClick={() => editHandler(data._id)} className={classes.edit}>Edit</button>
                                    <button onClick={() => deleteHandler(data._id)} className={classes.delete}>Delete</button>
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Main
