import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import AdminNavigation from './AdminNavigation';

function AddProduct() {
   const [productsName,setPname]=useState("");
    const [category,setCategory]=useState("");
    const [image,setImage]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDesc]=useState("");
    const history=useHistory();

     async function AddProduct() {
        let item = { productsName, category, image, price, description};
    
        let result = await fetch("http://localhost:8082/addproduct", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(item),
        });
        result = await result.json();
        console.warn("result", result);
        localStorage.setItem("user-info", JSON.stringify(result));
        history.push("/add");
      }  

    return (
        <div>
        <AdminNavigation/>
            <br></br><br></br><br></br><br></br><br></br>
<div class="d-flex justify-content-center">
<div  class="col-md-offset-4">
    <h1>Add Products</h1>
    <br></br>
    
    <div class="col-sm-12">
    <input type="text" class="form-control" value={productsName} onChange={(e)=>setPname(e.target.value)}  placeholder="Product Name"   required />
    </div>
    <br />
    <div class="col-sm-12">
    <input type="text" class="form-control" value={category} onChange={(e)=>setCategory(e.target.value)}  placeholder="Category Name"  required />
    </div>
    <br />
    <div class="col-sm-12" >
    <input type="text" class="form-control" value={image} onChange={(e)=>setImage(e.target.value)}  placeholder="Image URL"  required />
    </div>
    <br />
    <div class="col-sm-12">
    <input type="text" class="form-control" value={price} onChange={(e)=>setPrice(e.target.value)}   placeholder="Price"  required />
    </div>
    <br />
    <div class="col-sm-12" >
    <input type="text" class="form-control" value={description} onChange={(e)=>setDesc(e.target.value)}  placeholder="Description"   required />
    </div>
    <br />
   
        <br />
        
    
    <button onClick={AddProduct} class="col-md-4 col-md-offset-4 btn" type="button"> Add
    </button>
    </div>
    </div>
    
        </div>
    )
}

export default AddProduct
