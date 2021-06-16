import React, { useState } from 'react';
import "../Booking/Booking.css";


export const Booking = () => {

    const [inputList, setInputList] = useState("");
    // const [inputListAge, setinputListAges] = useState([]);
    const [item, setItems] = useState([]);
    // const [age, setAges] = useState([]);

    const itemEvent = (e) => {
        setInputList(e.target.value);
    }

    const addComment = (e) => {
        e.preventDefault();
        if (!inputList) {
            alert("entery your thoughts");
            console.log("entery your thoughts");
        }
        else {
            setItems((oldItems) => {
                return [...oldItems, inputList];
            })
        }

    }

    return (
        <>
            <div className="parent_booking">
                <h1>Booking Details</h1>
                <div className="con">

                    <form class="form" onSubmit={addComment}>
                        <div className="details">
                            <div className="passengers">
                                <h2>Family Information</h2>
                                <div className="peoples_info">
                                    <div className="name">
                                        <label>
                                            <span>Name : </span>
                                            <input type="text" name="name" onChange={itemEvent} />
                                        </label>
                                    </div>
                                    <div className="age">
                                        <label>
                                            <span>Age : </span>
                                            <input type="number" name="age" />
                                        </label>
                                    </div>
                                </div>
                                <button className="add_sign" type="submit">+</button>
                            </div>
                        </div>
                        <div className="total_bill">
                            <h2>Total Amount</h2>
                            <div className="no_peoples">
                                {
                                    item.map((itemval) => {
                                        return (
                                        <>
                                        <div className="alignment">
                                            <div>
                                                <li>Name</li>
                                            </div>
                                            <div>
                                                <li>36</li>
                                            </div>
                                            </div>
                                        </>
                                        )
                                    })
                                }
                            </div>

                            <div className="amount">
                                <div>
                                    <li>Amount</li>
                                </div>
                                <div>
                                    <li>&#8377;2000</li>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
