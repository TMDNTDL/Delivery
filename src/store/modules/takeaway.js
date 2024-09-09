// edit Store
import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
const foodsStore = createSlice({
    name: 'foods',
    initialState:{
        //商品列表
        foodsList:[],
        //Menu
        activeIndex:0
    },
    reducers:{
        setFoodsList(state, action){
            state.foodsList =action.payload
        },
        // change activeIndex
        changeActiveIndex(state, action){
            state.activeIndex = action.payload
        }
    }
})

//asyn 
const { setFoodsList, changeActiveIndex } = foodsStore.actions
const fetchFoodsList =()=>{
    return async(dispatch)=>{
        const res = await axios.get('http://localhost:3004/takeaway')

        dispatch(setFoodsList(res.data))
    }
}

// a
export { fetchFoodsList, changeActiveIndex }
const reducer = foodsStore.reducer
export default reducer
