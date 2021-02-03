import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
    return (
        <div className="center_space d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-4">404</h1>
            <p>Nothing here, return <Link to="/dashboard">home</Link></p>
        </div>
    )
}

export default Notfound
