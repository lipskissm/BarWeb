import React, { useState } from 'react';
import './AddProduct.css'
import upload from '../../assets/upload.png'
const AddProduct = () => {
    const[image,setImage] = useState(false);
    const[productDetails, setProductDetails] = useState({
        name:"",
        image:"",
        category:"Alus",
        price:""

    })
    const imageHandler = (e)=>{
        setImage(e.target.files[0]);
    }

    const changeHandler = (e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const Add_Product = async ()=>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json'
            },
            body:formData,
        }).then((resp) =>resp.json()).then((data)=>{responseData=data})
   
        if(responseData.success){
            product.image=responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct', {
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json' // Corrected typo here
            },
            body:JSON.stringify(product),
        }).then((resp)=>resp.json()).then((data)=>{
            data.success ? alert("Pridetas") : alert("Ne")
        });
        }
    }


  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Produkto pavadinimas</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Tekstas'/>
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
            <p>Kaina</p>
            <input value={productDetails.price} onChange={changeHandler} type="text" name='price' placeholder='Skaicius'>   
            </input>
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Produkto kategorija</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className='addproduct-selector'>
            <option value="Alus">Alus</option>
            <option value="Sidras">Sidras</option>
            <option value="Nealkoholiniai">Nealkoholiniai</option>
        </select>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload} className='addproduct-tumbnail-img' alt="" />
            </label>
            <input onChange={imageHandler} type='file' name="image" id="file-input" hidden/>
            <button onClick={()=>{Add_Product()}} className='addproduct-btn'>Prideti</button>
        </div>
      </div>
    </div>
  )
}

export default AddProduct