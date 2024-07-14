import React from "react";

function CustomerHome(props)
{
    return(
        <div>
            <h3>Welcome Customer Homepage</h3>
            <h3>Welcome  {props.data.cname}</h3>
            <img src={("http://localhost:2021/customer/getimage/"+props.data.cpicname)}
            height="200" width="200"/>
        </div>
    );
}export default CustomerHome;