function addToCart(Src,Rate,Name,Cost){ 
     console.log("action passed");
    return{
        type:"ADD_TO_CART",
        payload:{
            src:Src,
            rate:Rate,
            Quantity:1,
            productName:Name,
            cost:Cost
        }
    };
}


module.exports={
   atc: addToCart,
 
}
