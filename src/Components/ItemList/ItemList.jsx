/* eslint-disable react/prop-types */
import Item from "../Item/Item"
import './ItemList.css'


// eslint-disable-next-line react/prop-types
const ItemList = ({productos}) => {
  return (
    <div className="containerItemList">
      {productos.map(prod => <Item key={prod.id} {...prod}/>)}
    </div>
  )
}

export default ItemList
