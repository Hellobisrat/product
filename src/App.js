import { useState } from 'react';
import Cart from './component/Cart';
import Product from './component/Product';
import './App.css';
import Details from './component/Details';


function App() {
  const [product, setProduct]=useState('')
  const [price,setPrice]=useState('')
  const [productList,setProductList]=useState([])
  const [cart, setCart]= useState([])
  const [productDetails,setProductDetails]=useState(null)
  const [toggle, setToggle]=useState(false);
  const handleName = (event)=>{
    setProduct(event.target.value)
  }
  const handlePrice=(e)=>{
    setPrice(e.target.value)
  }
  const handleProduct=(event)=>{
    event.preventDefault();
    let templist ={ id:Math.random()*100,
                    name:product,
                    price:price

                  }
    
    setProductList(oldproduct=>[...oldproduct,templist])
    setProduct('')
    
  }
      const handleDetail = (product)=>{ 
    
       
       setProductDetails(product) 
        
      }
      
      const handleClose =() =>{
        setProductDetails(null)
      }

      const handleAdd =(product)=>{
        let templist ={ id:Math.random()*100,
          name:product.name,
          price:product.price

        }
      
        setCart(oldproduct=>[...oldproduct,templist])
        setToggle(true)
      }
      
     const handleRemove =(id)=>{
      const newcart =cart.filter(product => product.id !== id)
      setCart(newcart)
     }

     const handleExit =()=>{
      setToggle(false)
     }
      
    
  return (
    <div className="App">
      <form onSubmit={handleProduct}>
    <div>
    <input  className='input1' placeholder='Name' onChange={handleName}/>
    </div>
    <div>
    <input className=' input2' placeholder='Price' onChange={handlePrice}/>
    </div>
    <div>
    <button  type='submit' className='addpro' > ADD product</button>
    </div>
  </form>
      
      
       <Product productList={productList} handleDetail={handleDetail}  />
       {productDetails ? (<Details productDetails={productDetails} handleClose={handleClose} handleAdd={handleAdd}/>) : null}
        {toggle?<Cart cart={cart} handleRemove={handleRemove} handleExit={handleExit}/>:false}
       
      
          
    </div>
  );
}

export default App;
