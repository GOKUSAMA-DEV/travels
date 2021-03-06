import React, { useState, createContext } from 'react';
import "../Booking/Booking.css";
// import { Info } from '../Booking/Info';


export const valueContext = createContext();

export const Booking = () => {



    const [inputField, setInputField] = useState({
        name: "",
        age: "",
        option:""
    })

    const [item, setItem] = useState([]);
    
    const { name, age, option } = inputField;
    const onChange = (e) => {
        setInputField({ ...inputField, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!name.length > 0 && !age.length > 0) {
            alert("dont't be blank");
        }
        else {
            setItem((oldItems) => {
                return [...oldItems, inputField]
            })

            setInputField({
                name: "",
                age: "",
                option: ""
            })
        }

    }
        return (
            <>
                <div className="parent_booking">
                <h1>Booking Details</h1>
                <div className="con">
                    <div className="details">
                        <div className="passengers">
                            <form onSubmit={onSubmit}>
                                <h2>Family Information </h2>
                                <div className="peoples_info">
                                    <div className="name">
                                        <label>
                                            <span>Name : </span>
                                            <input type="text" name="name" onChange={onChange} value={name} />
                                        </label>
                                    </div>
                                    
                                    <div className="age">
                                        <label>
                                            <span>Age : </span>
                                            <input type="number" name="age" onChange={onChange} value={age} />
                                        </label>
                                    </div>

                                </div>
                                <div className="packages_trip">
                                    <label >Choose a Place : </label>
                                    <select className="select_value" name="option" onChange={onChange} value={option}>
                                        <option value=""></option>
                                        <option value="Amritsar">Amritsar</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Rajesthan">Rajesthan</option>
                                        <option value="Goa">Goa</option>
                                    </select>
                                </div>
                                <button className="add_sign" type="submit">+</button>
                            </form>
                        </div>
                    </div>
                    <div className="total_bill">
                        <h2>Total Amount</h2>
                        <div className="no_peoples">
                            {
                                item.map((itemval, ind) => {
                                    return (
                                        <>
                                            <div className="alignment" key={ind}>
                                                <div>
                                                    <li>{itemval.name}</li>
                                                </div>
                                                <div>
                                                    <li>{itemval.age}</li>
                                                </div>
                                                <div>
                                                    <li>{itemval.option}</li>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>

                        <div className="amount">
                            <button>Booking</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )

}
