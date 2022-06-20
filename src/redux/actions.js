function addToCart(Src,Rate,Name,Cost){ 
     //actionCreator
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
function increamentQuantity(){
    return{
        type:"INCREAMENT_QUANTITY"
    };
}
function decreamentQuantity(){
    return{
        type:"DECREAMENT_QUANTITY"
    };
}

// function SearchPro(text){
// switch(text){
//     case "Women clothing":
// }
// }
module.exports={
   atc: addToCart,
   iq:increamentQuantity,
   dq:decreamentQuantity
}
