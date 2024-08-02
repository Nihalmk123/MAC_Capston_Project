import React, { useState } from 'react'
import Layout from '../Layout/Layout'

const Signin = () => {

    return (
        <Layout>
            <h1 className='text-center mt-3'>Login</h1>
            <div className="container w-25 rouded-5 p-2">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">User Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </Layout>
    )
}

export default Signin