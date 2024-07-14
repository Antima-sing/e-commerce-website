import React,{useEffect, useState} from "react";
import axios from "axios";

function SaveProduct()
{
    const[pid,setPId]=useState();
    const[pname,setPName]=useState();
    const[pprice,setPPrice]=useState();
    const[oprice,setOPrice]=useState();
    const[ppicname,setPPicname]=useState();
    const[plist,setPList]=useState([]);
    const[image,setImage]=useState({preview:'',data:''})
    const[status,setStatus]=useState('');

    useEffect(()=>{
        axios.get("http://localhost:2021/product/getmaxpid").then((res)=>{
            var pid=res.data.length;
            var nextpid=pid+1;
            setPId(nextpid);
        }).catch((err)=>{
            alert(err);
        })
    })
    const handlePNameText=(evt)=>{
        setPName(evt.target.value);
    }

    const handlePriceText=(evt)=>{
        setPPrice(evt.target.value);
    }

    const handleOPriceText=(evt)=>{
        setOPrice(evt.target.value);
    }
    const handleSubmit =async (evt)=>{
        evt.preventDefault()
        let formData =new FormData()
        formData.append('file',image.data);
        const response = await fetch("http://localhost:2021/product/saveproductimage",{
            method:'POST',
            body:formData,
        })
        if (response) {
            setStatus(response.statusText)
        }
    }
    const handleFileChange = (evt)=>{
        const img = {
            preview:URL.createObjectURL(evt.target.files[0]),
            data:evt.target.files[0]
        }
        setImage(img)
        setPPicname(evt.target.files[0].name);
    }
    const handleSaveButton=()=>{
        if(pname===""||pprice===""||oprice==="")
        {
            alert("Fill All Fields");
        }
        else{
            var obj={
                pid:pid,
                pname:pname,
                pprice:pprice,
                oprice:oprice,
                ppicname:ppicname
            };
            axios.post("http://localhost:2021/product/saveproduct",obj).then((res)=>{
                alert("Product Saved");
                setPName("");
                setPPrice("");
                setOPrice("");
                image.preview=null;
                image.status="";
                setPPicname("");
                document.getElementById("file").value = "";
                setStatus("");
            }).catch((err)=>{
                alert(err);
            })
        }
        }
        const handleShowButton=()=>{
            axios.get("http://localhost:2021/product/showproduct").then((res)=>{
                setPList(res.data);
            }).catch((err)=>{
                alert(err);
            })
        }
        return(
            <div>
                <center>
                <h4 style={{backgroundColor:"green",color:"white"}}>Product Details Form</h4>
                <table>
                    <tr>
                        <td>Product Id</td>
                        <td>
                            {pid}
                        </td>
                    </tr>
                    <tr>
                        <td>Product Name</td>
                        <td>
                            <input type="text" onChange={handlePNameText} className="form-control" value={pname}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>
                            <input type="text" onChange={handlePriceText} className="form-control" value={pprice}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Offer Price</td>
                        <td>
                            <input type="text" onChange={handleOPriceText} className="form-control" value={oprice}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Photo</td>
                        <td>
                            {<img src={image.preview} width="50" height="50"/>}
                            <hr></hr>
                            <form onSubmit={handleSubmit} className="btn btn-danger">
                                <input type='file' name="file" id="file" onChange={handleFileChange} />
                                <button type="submit" className="btn btn-success">Submit</button>
                            </form>
                            <h4>Photo Uploaded:{status}</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" className="btn btn-primary" 
                            onClick={handleSaveButton}>Save</button>
                        </td>
                        <td>
                            <button type="submit" className="btn btn-primary" 
                            onClick={handleShowButton}>Show</button>
                        </td>
                    </tr>
                </table>
                <h4 style={{backgroundColor:"green",color:"white"}}>Product List</h4>
                <table>
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Offer Price</th>
                        <th>Photo</th>
                    </tr>
                    {
                        plist.map((item)=>(
                            <tr>
                                <td>{item.pid}</td>
                                <td>{item.pname}</td>
                                <td>{item.pprice}</td>
                                <td>{item.oprice}</td>
                                <td>
                                    <img src={("http://localhost:2021/product/getproductimage/"
                                    +item.ppicname)} height="50" width="50"/>
                                </td>
                            </tr>
                        ))
                    }
                </table>
                </center>
            </div>
        );
    }export default SaveProduct;