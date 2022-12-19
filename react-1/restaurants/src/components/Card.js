import React from "react"
// import CardsList from "./CardsList"
const style = {
    imgStyle: {
        
        maxHeight: "200px"
    }
}
const Cards = function(props) {

     return props.data.map((card, i) => {
return<div className="col" key={i}>
    <div className="card shadow-sm">
      <img src={card.image} alt="" style={style.imgStyle}/>
      <div className="card-body">
      <h3>{card.name}</h3>
      <h3>{card.category}</h3>
      <h3>{card.price}</h3>
        <p className="card-text">{card.description}</p>
      </div>
    </div>
  </div>
    })
}
export default Cards;
