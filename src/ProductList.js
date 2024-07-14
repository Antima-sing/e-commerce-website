import React,{useEffect,useState} from "react";
import axios from "axios";
import cart from "./images/cart.png";

function ProductList()
{
    const [plist,setPList]=useState([]);
    const [itemcount,setItemCount]=useState(0);
    const [selitems,selItems]=useState([]);

    const handleCheckOut=()=>{
    
    }
    const handleAddToCart=(evt)=>{
        setItemCount(itemcount+1);
    }

    useEffect(()=>{
        axios.get("http://localhost:2021/product/showproduct").then((res)=>{
            setPList(res.data);
        }).catch((err)=>{
            alert(err);
        })
    });
      return(
             <div>
                <div style={{backgroundColor:"yellow",color:"red",height:"120px",width:"100%"}}>
                <img src={cart} height="120" width="140"/>  
                 <label>{itemcount}</label>
                 <span>            </span> 
                 <button type="submit" onClick={handleCheckOut} className="btn btn-primary">CheckOut</button>
                              </div>
                <center>
                    <h4 style={{backgroundColor:"green",color:"white"}}>Product List</h4>
                    <table>
                        <tr>
                              <th>Item Code</th>
                              <th>Product Name</th>
                              <th>Price</th>
                              <th>Offer Price</th>
                              <th>photo</th>
                              <th>Action</th>
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
                                        +item.ppicname)} height="90" width="150"/>
                                    </td>
                                    <td>
                                                <button type="submit" onClick={handleAddToCart}
                                               className="btn btn-warning" ><b>Add to Cart</b></button>
                                            </td>
                                </tr>
                            ))
                         }
                    </table>
                </center>
             </div>
      );
        }export default ProductList;