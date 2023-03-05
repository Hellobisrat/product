const Details = ({productDetails,handleClose,handleAdd}) => {
     
    return ( 
     <>
        
      
            <h5>Details</h5>
            <h2>{productDetails.id}</h2>
            <h6> {productDetails.name}</h6>
            <h6>{productDetails.price}</h6>
            <button onClick={handleClose}>Close</button>
            <button onClick={()=>handleAdd(productDetails)}>ADD</button>
           
    
      </> 
      );
}
 
export default Details;