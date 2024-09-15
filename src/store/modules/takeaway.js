// edit Store
import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
const foodsStore = createSlice({
    name: 'foods',
    initialState:{
        //商品列表
        foodsList:[],
        //Menu
        activeIndex:0,
        // Cart List
        carList:[]
    },
    reducers:{
        setFoodsList(state, action){
            state.foodsList =action.payload
        },
        // change activeIndex
        changeActiveIndex(state, action){
            state.activeIndex = action.payload
        },
        addCart(state, action){
          //determine whether the cart already exist in the list
          // using action.payload.id and search cartList 
          // find an object in the list and return 
          const foundItem = state.carList.find(item => item.id === action.payload.id)
          if(foundItem){
            foundItem.count++
          }
          else{
            
            action.payload.count++
            state.carList.push(action.payload)
          }
        },
        deleteCart(state,action){
            // determine whether if the item is in the cart or not
            // if not count = 0
            // if yes count --
            const deleteItem = state.carList.find(item => item.id === action.payload.id)
            if(deleteItem){
                deleteItem.count--
                if(deleteItem.count === 0){
                    const index = state.carList.indexOf(deleteItem)
                    state.carList = state.carList.splice(index,index)
                }
            }
            else{
                action.payload.count = 0
            }
        }
    }
})

//asyn 
const { setFoodsList, changeActiveIndex, addCart, deleteCart } = foodsStore.actions
const fetchFoodsList =()=>{
    return async(dispatch)=>{
        const res = await axios.get('http://localhost:3004/takeaway')

        dispatch(setFoodsList(res.data))
    }
}

// a
export { fetchFoodsList, changeActiveIndex, addCart,deleteCart}
const reducer = foodsStore.reducer
export default reducer
