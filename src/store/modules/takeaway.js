// edit Store
import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
const foodsStore = createSlice({
    name: 'foods',
    initialState:{
        //商品列表
        foodsList:[]
    },
    reducers:{
        setFoodsList(state, action){
            state.foodsList =action.payload
        }
    }
})

//asyn 
const { setFoodsList } = foodsStore.actions
const fetchFoodsList =()=>{
    return async(dispatch)=>{
        const res = await axios.get('http://localhost:3004/takeaway')

        dispatch(setFoodsList(res.data))
    }
}

// a
export { fetchFoodsList }
const reducer = foodsStore.reducer
export default reducer