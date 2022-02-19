export const productReducer  = (
    state={products:[],cart:[],details:[]},
    action
 ) => {
   if(action.type === "Add Product"){
       return{...state,products:[{...action.data,key:state.cart.length},...state.products]}
   }
   if(action.type === "Add-Cart"){
       return{...state,cart:[action.data,...state.cart]};
   }
   if(action.type === "Selected-Item"){
       return{...state,details:[action.data]}
   }
   if(action.type ==="Remove-Item"){
       const fileredProducts = state.cart.filter(
           (item) => item.key !== action.data.key
       );
       return{...state,card:fileredProducts};
   }
   return state;
};
