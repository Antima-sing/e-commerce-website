import React,{useEffect, useState} from "react";
import axios from "axios";

function VenderReg()
{
    const[vid,setVId]=useState();
    const[vname,setVName]=useState();
    const[vcontact,setVContact]=useState();
    const[vemail,setVEmail]=useState();
    const[vaddress,setVAddress]=useState();
    
    const[vpicname,setVPicname]=useState();
    const[vuserid,setVUserId]=useState();
    const[vuserpass,setVUserPass]=useState();
    
    const[image,setImage]=useState({preview:'',data:''})
    const[status,setStatus]=useState('')

    const handleVidText=(evt)=>{
        setVId(evt.target.value);
    }
    const handleVNameText=(evt)=>{
        setVName(evt.target.value);
    }
    const handleVContactText=(evt)=>{
        setVContact(evt.target.value);
    }
    const handleVEmailText=(evt)=>{
        setVEmail(evt.target.value);
    }
    const handleVAddressText=(evt)=>{
        setVAddress(evt.target.value);
    }
    const handleVUserIdText=(evt)=>{
        setVUserId(evt.target.value);
    }
    const handleVUserPassText=(evt)=>{
        setVUserPass(evt.target.value);
    }
    
    const handleSubmit=async(evt)=>{
        evt.preventDefault()
        let formData = new FormData()
        formData.append('file',image.data);
        const response = await fetch("http://localhost:2021/savevenderimage",{
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
        setVPicname(evt.target.files[0].name);
    }
    const handleRegisterButton=()=>{
        var obj={
            vid:vid,
            vname:vname,
            vcontact:vcontact,
            vemail:vemail,
            vaddress:vaddress,
            vpicname:vpicname,
            vuserid:vuserid,
            vuserpass:vuserpass
        };
        axios.post("http://localhost:2021/vender/register",obj).then((res)=>{
            alert("Registration Successfully");
        }).catch((err)=>{
            alert(err);
        })
    }
        return(
        <div>
            <center>
                <h4 style={{backgroundColor:"green",color:"white"}}><b>
                    Vender Registration</b></h4>
                    <table>
                        <tr>
                            <td><b>Vender ID</b></td>
                            <td>
                                <input type="number" onChange={handleVidText} className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Vender Name</b></td>
                            <td>
                                <input type="text" onChange={handleVNameText} className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Contact</b></td>
                            <td>
                                <input type="number" maxLength="10" minLength="10"
                                onChange={handleVContactText} className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Email</b></td>
                            <td>
                                <input type="email" onChange={handleVEmailText} className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Address</b></td>
                            <td>
                                <input type="text"  onChange={handleVAddressText} className="form-control"/>
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
                                <input type="text" onChange={handleVUserIdText} className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Password</b></td>
                            <td>
                                <input type="password" onChange={handleVUserPassText} className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit" onClick={handleRegisterButton} 
                                className="btn btn-success">Register</button>
                            </td>
                        </tr>
                    </table>
            </center>
        </div>
    );
}export default VenderReg;