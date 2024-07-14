import React,{useState} from "react";
import axios from "axios";
import CustomerHome from "./CustomerHome";
import ReactDOM  from "react-dom/client";
function CustomerLogin()
{
    const[cuserid,setCUserId]=useState();
    const[cuserpass,setCUserpass]=useState();
    const handleCUserIdText=(evt)=>{
        setCUserId(evt.target.value);
    }
    const handleCUserPassText=(evt)=>{
        setCUserpass(evt.target.value);
    }
    const handleLoginButton=()=>{
        axios.get("http://localhost:2021/customer/login/"+cuserid+"/"+cuserpass).then((res)=>{
    //    alert("Welcome"+res.data.cname)
       var obj={
        cname:res.data.cname,
        cpicname:res.data.cpicname
       };
       const root = ReactDOM.createRoot(document.getElementById("root"));
       root.render(<CustomerHome data={obj}></CustomerHome>);
        }).catch((err)=>{
            
            alert(err);
        })
    }
    return(
        <div>
            <center>
                <h4 style={{backgroundColor:"green",color:"White"}}>Customer Login</h4>
                <table>
                    <tr>
                        <td><b>User Id</b></td>
                        <td>
                            <input type="text"placeholder="Enter User Id" onChange={handleCUserIdText} className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Password</b></td>
                        <td>
                            <input type="password" placeholder="Enter Password" onChange={handleCUserPassText} className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        
                        <td>
                            <button type="submit" onClick={handleLoginButton}  className="btn btn-success">Login</button>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    );
}export default CustomerLogin;