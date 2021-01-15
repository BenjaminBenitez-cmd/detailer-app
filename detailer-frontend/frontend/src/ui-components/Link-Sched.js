import React from 'react';
import { Link } from 'react-router-dom';

function LinkSched(props) {
    return(
        <Link
        to={{
            pathname: "/schedule/car",
            state: {
                carType: props.car,
                name: props.brand
            }
        }}
        className="btn btn-primary"
        >Select</Link>
    )
}

export default LinkSched;