import React, { useState } from 'react'
import Layout from './../../components/Layout/Layout'
const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    return (
        <Layout title={"Register - FoodPanda App"}>
            <div className="register">
                <h1> Register Page</h1>
                <form>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={name}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder='Enter Your Name' />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='Enter Your Password' />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder='Enter Your Email ID' />
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={phone}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='Enter Your Phone No.' />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={address}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder='Enter Your Address' />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div >
        </Layout >
    )
}

export default Register;
