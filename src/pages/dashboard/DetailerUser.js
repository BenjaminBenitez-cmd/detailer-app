import React from 'react';

import Card from '../../components/ui-components/Card';
import'./style.css';


function DetailerUser({ notification }){
    return (
        <div className="add_margin">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <Card 
                        image={"https://images.unsplash.com/photo-1592365559101-19adfefdf294?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}
                        title={"Schedule a wash"}
                        paragraph={"Schedule wash for now or later."}
                        link={"schedule"}
                    />
                </div>
                <div className="col-md-4">
                    <Card 
                        image={"https://images.unsplash.com/photo-1584299789116-c34af66e6046?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}
                        title={"View washes"}
                        paragraph={"Make payment and view progress"}
                        link={"washes"}
                        notification={notification}
                    />
                </div>
                <div className="col-md-4">
                    <Card 
                        image={"https://images.unsplash.com/photo-1605437211365-7257403ea287?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}
                        title={"Profile"}
                        paragraph={"Your profile settings"}
                        link={"profile"}
                    />
                </div>
            </div>
        </div>
        </div>
    )
}

export default DetailerUser;