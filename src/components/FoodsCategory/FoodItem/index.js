import { useDispatch, useSelector } from 'react-redux'
import { addCart, deleteCart } from '../../../store/modules/takeaway'
import { useEffect } from 'react'
import './index.scss'

const Foods = ({
  id,
  picture,
  name,
  unit,
  description,
  food_tag_list,
  month_saled,
  like_ratio_desc,
  price,
  tag,
  count
}) => {
  const dispatch = useDispatch()
  const carList = useSelector(state=> state.foods)
  console.log(carList.carList)
  const getCount = () =>{
    const item = carList.carList.find(item => item.id === id)
    if(item){
      return item.count
    }else{
      return 0
    }
  }
  return (
    <dd className="cate-goods">
      <div className="goods-img-wrap">
        <img src={picture} alt="" className="goods-img" />
      </div>
      <div className="goods-info">
        <div className="goods-desc">
          <div className="goods-title">{name}</div>
          <div className="goods-detail">
            <div className="goods-unit">{unit}</div>
            <div className="goods-detail-text">{description}</div>
          </div>
          <div className="goods-tag">{food_tag_list.join(' ')}</div>
          <div className="goods-sales-volume">
            <span className="goods-num">月售{month_saled}</span>
            <span className="goods-num">{like_ratio_desc}</span>
          </div>
        </div>
        <div className="goods-price-count">
          <div className="goods-price">
            <span className="goods-price-unit">¥</span>
            {price}
          </div>
          <div className="goods-count">
          <span className="substraction">
              <button className="button sub-button" onClick={()=>dispatch(deleteCart({
                id,
                picture,
                name,
                unit,
                description,
                food_tag_list,
                month_saled,
                like_ratio_desc,
                price,
                tag,
                count

              }))}>-</button>
            </span>
            <div className='item-number'>{getCount()}</div>
            <span className="addition">
              <button className="button add-button" onClick={()=>dispatch(addCart({
                id,
                picture,
                name,
                unit,
                description,
                food_tag_list,
                month_saled,
                like_ratio_desc,
                price,
                tag,
                count

              }))}>+</button>
            </span>
            
          </div>
        </div>
      </div>
    </dd>
  )
}

export default Foods
