import { forwardRef, useEffect } from 'react'
import FoodItem from './FoodItem'
import './index.scss'

const FoodsCategory = forwardRef(( props, ref ) => {

  useEffect(() =>{
    ref.current = ref.current.slice(0, props.foods.length)

  },[props.foods])
  return (
    <div className="category">
      <dl className="cate-list">
        <dt className="cate-title"
          ref={el => ref.current[props.index] = el}
        >{props.name}</dt>

        {props.foods.map(item => {
          return <FoodItem key ={item.id} {...item} />
        })}
      </dl>
    </div>
  )
})

export default FoodsCategory
