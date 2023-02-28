const Productlist = ({productList}) => {
  
    return ( 
        <>
        {
          productList.map((items)=>{
            return (
              <h4> {items}</h4>
            )
          }) 

        }
          </>
    )
}
 
export default Productlist;



