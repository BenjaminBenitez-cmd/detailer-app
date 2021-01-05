import React from 'react';
import Card from '../ui-components/Card';

function DetailerUser(){
    // const [content, setContent] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [successful, setSuccessful] = useState("");

    // useEffect(() => {
    //     setContent(FakeAPI.data);
    // }, []);

    return (
        <div className="container">
            <div className="row">
                <Card 
                    image={"https://images.unsplash.com/photo-1592365559101-19adfefdf294?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}
                    title={"Schedule a wash"}
                    paragraph={"Schedule wash for now or later."}
                    link={"schedule"}
                />
                <Card 
                    image={"https://images.unsplash.com/photo-1584299789116-c34af66e6046?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}
                    title={"View washes"}
                    paragraph={"Make payment view wash and view wash progress."}
                    link={"schedule"}

                />
                <Card 
                    image={"https://images.unsplash.com/photo-1605437211365-7257403ea287?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}
                    title={"Profile"}
                    paragraph={"Your profile settings"}
                    link={"schedule"}

                />
            </div>
        </div>
    )
}

export default DetailerUser;