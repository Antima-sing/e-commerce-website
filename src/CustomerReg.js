import React,{useEffect, useState} from "react";
import axios from "axios";

function CustomerReg()
{
    const[cid,setCId]=useState();
    const[cname,setCName]=useState();
    const[ccontact,setCContact]=useState();
    const[cemail,setCEmail]=useState();
    const[caddress,setCAddress]=useState();
    const[cpincode,setCPincode]=useState();
    const[cpicname,setCPicname]=useState();
    const[cuserid,setCUserId]=useState();
    const[cuserpass,setCUserPass]=useState();
    const[stid,setStId]=useState();
    const[ctid,setCtId]=useState();
    const[stlist,setStList]=useState([]);
    const[ctlist,setCtList]=useState([]);
    const[image,setImage]=useState({preview:'',data:''})
    const[status,setStatus]=useState('')

    const handleCidText=(evt)=>{
        setCId(evt.target.value);
    }
    const handleCNameText=(evt)=>{
        setCName(evt.target.value);
    }
    const handleCContactText=(evt)=>{
        setCContact(evt.target.value);
    }
    const handleCEmailText=(evt)=>{
        setCEmail(evt.target.value);
    }
    const handleCAddressText=(evt)=>{
        setCAddress(evt.target.value);
    }
    const handleCPincodeText=(evt)=>{
        setCPincode(evt.target.value);
    }
    const handleCUserIdText=(evt)=>{
        setCUserId(evt.target.value);
    }
    const handleCUserPassText=(evt)=>{
        setCUserPass(evt.target.value);
    }
    const handleStateIdSelect=(evt)=>{
        setStId(evt.target.value);
        axios.get("http://localhost:2021/city/showcitybystate/"+evt.target.value).then((res)=>{
            setCtList(res.data);
        }).catch((err)=>{
            alert(err);
        })
    }
    const handleCityIdSelect=(evt)=>{
        setCtId(evt.target.value);
    }
    const handleSubmit=async(evt)=>{
        evt.preventDefault()
        let formData = new FormData()
        formData.append('file',image.data);
        const response = await fetch("http://localhost:2021/savecustomerimage",{
            method:'POST',
            body:formData,
        })
        if(response) {setStatus(response.statusText)}
    }
    const handleFileChange=(evt)=>{
        const img={
            preview:URL.createObjectURL(evt.target.files[0]),
            data:evt.target.files[0]
        }
        setImage(img)
        setCPicname(evt.target.files[0].name);
    }
    const handleRegisterButton=()=>{
        var obj={
            cid:cid,
            cname:cname,
            ccontact:ccontact,
            cemail:cemail,
            caddress:caddress,
            cpincode,cpincode,
            cpicname:cpicname,
            cuserid:cuserid,
            cuserpass:cuserpass,
            stid:stid,
            ctid:ctid
        };
        axios.post("http://localhost:2021/customer/register",obj).then((res)=>{
            alert("Registration Successfully");
        }).catch((err)=>{
            alert(err);
        })
    }
    useEffect(()=>{
        axios.get("http://localhost:2021/state/showstate").then((res)=>{
            setStList(res.data);
        }).catch((err)=>{
            alert(err);
        });
    })
    return(
        <div style={{backgroundColor:"whitesmoke"}}>
            <center>
                <h4 style={{backgroundColor:"green",color:"white"}}><b>
                    Customer Registration</b></h4>
                    <table>
                        <tr>
                            <td><b>Cutomer ID</b></td>
                            <td>
                                <input type="number" placeholder="Enter Id" className="form-control" onChange={handleCidText} />
                            </td>
                        </tr>
                        <tr>
                            <td><b>Customer Name</b></td>
                            <td>
                                <input type="text" placeholder="Enter Name" className="form-control" onChange={handleCNameText}/>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Contact</b></td>
                            <td>
                                <input type="number" maxLength="10" minLength="10" className="form-control" placeholder="Enter Contact"
                                onChange={handleCContactText} />
                            </td>
                        </tr>
                        <tr>
                            <td><b>Email</b></td>
                            <td>
                                <input type="email" placeholder="Enter Email Id" className="form-control" onChange={handleCEmailText} />
                            </td>
                        </tr>
                        <tr>
                            <td><b>PinCode</b></td>
                            <td>
                                <input type="number" maxLength="6"minLength="6" className="form-control" placeholder="Enter Pincode"
                                onChange={handleCPincodeText} />
                            </td>
                        </tr>
                        <tr>
                            <td><b>State</b></td>
                            <td>
                                <select onClick={handleStateIdSelect}>
                                    {
                                        stlist.map((item)=>(
                                    <option value={item.stid}>{item.stname}</option>
                                        ))
                                    }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><b>City</b></td>
                            <td>
                                <select onClick={handleCityIdSelect} >
                                    {
                                        ctlist.map((item)=>(
                                         <option value={item.ctid}>{item.ctname}</option>   
                                        ))
                                    }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Photo</b></td>
                            <td>
                                {<img src={image.preview} width='100' height='100'/>}
                                <hr></hr>
                                <form onSubmit={handleSubmit} >
                                    <input type="file" name="file" onChange={handleFileChange}>
                                    </input>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                                <h4>photo upload{status}</h4>
                            </td>
                        </tr>
                        <tr>
                            <td><b>User Id</b></td>
                            <td>
                                <input type="text"  placeholder="Make User Id" className="form-control" onChange={handleCUserIdText}/>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Password</b></td>
                            <td>
                                <input type="password"  placeholder="Make Password" className="form-control"onChange={handleCUserPassText}/>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit" onClick={handleRegisterButton} 
                                className="btn btn-success" >Register</button>
                            </td>
                        </tr>
                    </table>
            </center>
        </div>
    );
}export default CustomerReg;