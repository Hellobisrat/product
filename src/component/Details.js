const Details = ({productDetails}) => {
     
    return ( 
     <>
        {
       productDetails.map((items)=>{
        return(
          <>
            <h5>Details</h5>
            <h6> {items.name}</h6>
            <h7>{items.price}</h7>
          </>
        )
        })
      }
      
    
      
    
      </> );
}
 
export default Details;