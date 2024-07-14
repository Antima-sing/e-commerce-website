import React from "react";

function VenderHome(props)
{
    return(
        <div>
            <h3>Welcome Vender Homepage</h3>
            <h3>Welcome  {props.data.vname}</h3>
            {/* <h3>{"picname="+props.data.vpicname}</h3> */}
            <img src={("http://localhost:2021/vender/getimage/"+props.data.vpicname)}
            height="250" width="250"/>
        </div>
    );
}export default VenderHome;