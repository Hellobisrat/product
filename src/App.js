import { useState } from 'react';

import Product from './component/Product';
import './App.css';
import Details from './component/Details';

function App() {
  const[product, setProduct]=useState('')
  const[price,setPrice]=useState('')
  const[productList,setProductList]=useState([])
  const[productDetails,setProductDeatils]=useState([])
  const handleName=(event)=>{
    setProduct(event.target.value)
  }
  const handlePrice=(e)=>{
    setPrice(e.target.value)
  }
  const handleProduct=(event)=>{
    event.preventDefault();
    let templist ={ id:Math.random*100,
                    name:product,
                    price:price

                  }
    
    setProductList(oldproduct=>[...oldproduct,templist])
    setProduct('')
    
      }
      const handleDetail=(id)=>{ 
    
       const newlist =productList.filter(pro=>pro.id===id)
       setProductDeatils(newlist) 
        setProduct('') }
    


  return (
    <div className="App">
      <form onSubmit={handleProduct}>
    <div>
    <input type={Text} className='input1' placeholder='Name' onChange={handleName}/>
    </div>
    <div>
    <input type={Text} className=' input2' placeholder='Price' onChange={handlePrice}/>
    </div>
    <div>
    <button  type='submit' className='addpro' > ADD product</button>
    </div>
  </form>
      
      
       <Product productList={productList} handleDetail={handleDetail}/>
       <Details productDetails={productDetails}/>
          
       
      
          
    </div>
  );
}

export default App;
