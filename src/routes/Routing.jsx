import React , {useState} from 'react';
import { Route ,Routes } from 'react-router-dom';
import Main from '../Main';
import BagShop from '../pages/BagShop';
const Routiing = () => {
  const [card , setCard]= useState([])

  const handleItem=(item)=>{
      setCard([...card , item])
  }
  return (
    <Routes>
    <Route path='/' element={<Main size={card.length} handleItem={handleItem}/>}/>
    <Route path='/BagShop' element={<BagShop setCard={setCard} card={card} size={card.length}/>}/>
   </Routes>
  )
}

export default Routiing