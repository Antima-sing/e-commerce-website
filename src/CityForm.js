import React,{useEffect, useState} from "react";
import axios from "axios";

function CityForm()
{
    const [ctid,setCtId]=useState();
    const [ctname,setCtName]=useState();
    const [stid,setStId]=useState();
    const [ctlist,setCtList]=useState([]);
    const [stlist,setStList]=useState([]);

    const handleCtIdText=(evt)=>{
        setCtId(evt.target.value);
    }
    const handleCtNameText=(evt)=>{
        setCtName(evt.target.value);
    }
    const handleStateSelect=(evt)=>{
        setStId(evt.target.value);
    }
    useEffect(()=>{
        axios.get("http://localhost:2021/state/showstate").then((res)=>{
            setStList(res.data);
        }).catch((err)=>{
            alert(err);
        });
    })
    const handleSaveButton=()=>{
        var obj={
            ctid:ctid,
            ctname:ctname,
            stid:stid
        };
        axios.post("http://localhost:2021/city/savecity",obj).then((res)=>{
            alert("city saved");
        }).catch((err)=>{
            alert(err);
        })
    }
    const handleShowButton=()=>{
        axios.get("http://localhost:2021/city/showcity").then((res)=>{
            setCtList(res.data);
        }).catch((err)=>{
            alert(err);
        });
    }
    return(
        <div>
            <center>
                <h4 style={{backgroundColor:"green",color:"white"}}>City Details</h4>
                <table>
                    <tr>
                        <td>City Id</td>
                        <td>
                            <input type="number" onChange={handleCtIdText} className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <td>City Name</td>
                        <td>
                            <input type="text" onChange={handleCtNameText} className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <td>State</td>
                        <td>
                            <select onClick={handleStateSelect}>
                                {
                                    stlist.map((item)=>(
                                        <option value={item.stid}>{item.stname}</option>
                                    ))
                                }
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" onClick={handleSaveButton} className="btn btn-primary">Save</button>
                        </td>
                        <td>
                            <button type="submit" onClick={handleShowButton} className="btn btn-success">Show</button>
                        </td>
                    </tr>
                </table>
                <h4 style={{backgroundColor:"green",color:"white"}}>City List</h4>
                <table>
                    <tr>
                        <th>City Id</th>
                        <th>City Name</th>
                        <th>State Id</th>
                    </tr>
                    {
                        ctlist.map((item)=>(
                            <tr>
                                <td>{item.ctid}</td>
                                <td>{item.ctname}</td>
                                <td>{item.stid}</td>
                            </tr>
                        ))
                    }
                </table>
            </center>
        </div>
    );
}export default CityForm;