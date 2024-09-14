import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Cart from './components/Cart'
import FoodsCategory from './components/FoodsCategory'
import FoodItem from './components/FoodsCategory/FoodItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFoodsList } from './store/modules/takeaway'
import './App.scss'
import { useEffect, useRef } from 'react'

// const foodsList = [
//   {
//     "tag": "318569657",
//     "name": "一人套餐",
//     "foods": [
//       {
//         "id": 8078956697,
//         "name": "烤羊肉串(10串)",
//         "like_ratio_desc": "好评度100%",
//         "month_saled": 40,
//         "unit": "10串",
//         "food_tag_list": ["点评网友推荐"],
//         "price": 90,
//         "picture": "https://i.ytimg.com/vi/qD5meFtkT8Q/maxresdefault.jpg",
//         "description": "",
//         "tag": "318569657"
//       },
//       {
//         "id": 7384994864,
//         "name": "腊味煲仔饭",
//         "like_ratio_desc": "好评度81%",
//         "month_saled": 100,
//         "unit": "1人份",
//         "food_tag_list": [],
//         "price": 39,
//         "picture": "https://www.hangheung.com.hk/cdn/shop/articles/a768a8953f9d16a1ab3a8834e2072c8b.jpg?v=1606893667",
//         "description": "",
//         "tag": "318569657"
//       },
//       {
//         "id": 2305772036,
//         "name": "鸡腿胡萝卜焖饭",
//         "like_ratio_desc": "好评度91%",
//         "month_saled": 300,
//         "unit": "1人份",
//         "food_tag_list": [],
//         "price": 34.32,
//         "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCBWX49EzqbiVTyVTxEAsKSzf18V1vaPOjxQ&s",
//         "description": "主料：大米、鸡腿、菜心、胡萝卜",
//         "tag": "318569657"
//       },
//       {
//         "id": 2233861812,
//         "name": "小份酸汤莜面鱼鱼+肉夹馍套餐",
//         "like_ratio_desc": "好评度73%",
//         "month_saled": 600,
//         "unit": "1人份",
//         "food_tag_list": ["“口味好,包装很好～点赞”"],
//         "price": 34.32,
//         "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa3NLgDxVLR7OuHREWBhE5tvqUqamDk0DMbw&s",
//         "description": "酸汤莜面鱼鱼，主料：酸汤、莜面 肉夹馍，主料：白皮饼、猪肉",
//         "tag": "318569657"
//       }
//     ]
//   }
// ]

const App = () => {
  // trigger action exec
  // 1. useDispatch -> dispatch 2. actionCreator 3.useEffect
  const dispatch =useDispatch()
  useEffect(() =>{
    dispatch(fetchFoodsList())
  },[dispatch])

  const dtRef = useRef([])

  const scroll = (index) =>{
    console.log(dtRef.current[index])
    dtRef.current[index].scrollIntoView({behavior:'smooth'})
  }
  useEffect(() =>{
    // dtRef.current[0].scrollIntoView({behavior:'smooth'})
  })
  // get FoodsList and render to the list
  // 1. useSelector
  const { foodsList, activeIndex } = useSelector(state => state.foods)
  return (
    <div className="home">
      {/* 导航 */}
      <NavBar />

      {/* 内容 */}
      <div className="content-wrap">
        <div className="content">
          <Menu
            scrollPage={scroll}
          />

          <div className="list-content">
            <div className="goods-list">
              {/* 外卖商品列表 */}
              {foodsList.map((item, index) => {
                console.log(dtRef)
                return (
                  <div className="category">
                    <dl className="cate-list">
                      <dt className="cate-title"
                        ref={el => dtRef.current[index] = el}
                      >{item.name}
                      
                      </dt>

                      {item.foods.map(item => {
                        return <FoodItem key ={item.id} {...item} />
                      })}
                    </dl>
                  </div>
                )
              })}
            </div> 
          </div>
        </div>
      </div>

      {/* 购物车 */}
      <Cart />
    </div>
  )
}

export default App
