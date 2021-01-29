import { Route, useRouteMatch } from "react-router-dom"
import { Authenticate, Register, ResetPassword, ResetRequest, Signin } from "../../components/auth"
import Home from "../home/Home";


function Website() {
    let { path, url } = useRouteMatch();
    return (
        <>
            {/* <div className="inner-body">
                <Route exact path="/" component={Home}/>
                <Route exact path={`${path}/signin`} component={Signin}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/resetrequest" component={ResetRequest} />
                <Route exact path="/resetpassword/:token" component={ResetPassword} />
                <Route exact path="/authenticate/:token" component={Authenticate}/>
            </div> */}
        </>
    )
}

export default Website;
