const Product = ({productList,handleDetail}) => {
   
    
    return (  
        
        <>
        {
          productList.map((items)=>{
            return (
              <  >
              <form  onClick={handleDetail}>
              <h4  className='productlist'> {items.name} 
             
              <button  type='submit' className='detail'  >
                 DETAIL</button>
               
                 </h4>
              </form>
              
              </>
            )
          }) 

        }
        </>
    );
}
 
export default Product;