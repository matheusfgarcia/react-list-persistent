import { useSelector,useDispatch } from 'react-redux'
import { useState,useRef } from 'react'

export default function CourseList() {

  const [itemName, setItemName] = useState("");
  const dispatch = useDispatch();
  
  const inputRef = useRef(null);

  const items = useSelector(state => state.data)

  const handleSubmit = (evt) => {

    evt.preventDefault();

    dispatch({type: "ADD_ITEM",name:itemName});

    inputRef.current.value = "";
  }


  return (
    <>

    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} onChange={e => setItemName(e.target.value)} />
      <input type="submit" value="Submit" />
    </form>

    <ul>
      {items.map(item => <li key={item.name}>{item.name}</li>)}
    </ul>

    </>
  )
}
