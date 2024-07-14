import React,{useState} from "react";
import axios from "axios";
import VenderHome from "./VenderHome";
import ReactDOM  from "react-dom/client";
function VenderLogin()
{
    const[vuserid,setVUserId]=useState();
    const[vuserpass,setVUserpass]=useState();
    const handleVUserIdText=(evt)=>{
        setVUserId(evt.target.value);
    }
    const handleVUserPassText=(evt)=>{
        setVUserpass(evt.target.value);
    }
    const handleLoginButton=()=>{
        axios.get("http://localhost:2021/vender/login/"+vuserid+"/"+vuserpass).then((res)=>{
    //    alert("Welcome"+res.data.vname+"pivname="+res.data.vpicname)
       var obj={
        vname:res.data.vname,
        vpicname:res.data.vpicname
       };
       const root = ReactDOM.createRoot(document.getElementById("root"));
       root.render(<VenderHome data={obj}></VenderHome>);
        }).catch((err)=>{
            alert(err);
        })
    }
    return(
        <div>
            <center>
                <h4 style={{backgroundColor:"green",color:"White"}}>Vender Login</h4>
                <table>
                    <tr>
                        <td><b>User Id</b></td>
                        <td>
                            <input type="text" placeholder="Enter User Id" onChange={handleVUserIdText} className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Password</b></td>
                        <td>
                            <input type="password" placeholder="Enter Password" onChange={handleVUserPassText} className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit" onClick={handleLoginButton} className="btn btn-success">Login</button>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    );
}export default VenderLogin;