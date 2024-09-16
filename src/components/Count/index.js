import { useDispatch, useSelector } from 'react-redux'
import {addCart, deleteCart} from '../../store/modules/takeaway'
import './index.scss'

const Count = ({ onPlus, onMinus, id, count }) => {
  const carList = useSelector(state=> state.foods)
  
  const dispatch = useDispatch()
  
  return (
    <div className="goods-count">
      <span className="minus" onClick={()=>{
        const item = carList.carList.find(item => item.id === id)
        dispatch(deleteCart(item))
      }}></span>
      <span className="count">{count}</span>
      <span className="plus" onClick={()=>{
         const item = carList.carList.find(item => item.id === id)
         dispatch(addCart(item))
      }}></span>
    </div>
  )
}

export default Count
