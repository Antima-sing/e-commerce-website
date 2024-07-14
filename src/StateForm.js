import React,{useState} from "react";
import axios from "axios";

function StateForm()
{
    const [stid,setStId]=useState();
    const [stname,setStName]= useState();
    const [stlist,setStList]=useState([]);
    
    const handleStIdText=(evt)=>{
        setStId(evt.target.value);
    }
    const handleStNameText=(evt)=>{
        setStName(evt.target.value);
    }
    const handleSaveButton=()=>{
        var obj={
            stid:stid,
            stname:stname
        };
        axios.post("http://localhost:2021/state/savestate",obj).then((res)=>{
            alert("state saved");
        }).catch((err)=>{
            alert(err);
        })
    }
    const handleShowButton=()=>{
        axios.get("http://localhost:2021/state/showstate").then((res)=>{
            setStList(res.data);
        }).catch((err)=>{
            alert(err);
        })
    }
    return(
        <div>
            <center>
                <h4 style={{backgroundColor:"green",color:"white"}}>State Details Form</h4>
                <table>
                    <tr>
                        <td>State Id</td>
                        <td>
                            <input type="number" onChange={handleStIdText}
                             className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <td>State Name</td>
                        <td>
                            <input type="text" onChange={handleStNameText} 
                            className="form-control"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" className="btn btn-primary"
                             onClick={handleSaveButton}>Save</button>
                        </td>
                        <td>
                            <button type="submit" className="btn btn-success"
                             onClick={handleShowButton}>Show</button>
                        </td>
                    </tr>
                </table>
                <h4 style={{backgroundColor:"green", color:"white"}}>State List</h4>
                <table>
                    <tr>
                        <th>State Id</th>
                        <th>State Name</th>
                    </tr>
                    {
                        stlist.map((item)=>(
                            <tr>
                                <td>{item.stid}</td>
                                <td>{item.stname}</td>
                            </tr>
                        ))
                    }
                </table>
            </center>
        </div>
    );
}export default StateForm;