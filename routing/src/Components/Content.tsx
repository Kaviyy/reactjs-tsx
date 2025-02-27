import React, { useState } from "react";
import Shop from "./Shop";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { BiCheck } from "react-icons/bi";

const Content = () => {
  let [items, setItems] = useState([
    { id: 1, label: "HTML & CSS", checked: true },
    { id: 2, label: "JavaScript", checked: false },
    { id: 3, label: "React JS", checked: false },
  ]);
 let [newItem,setNewItem] = useState("")
 let [isEditing,setIsEditing]=useState(false);
 let [currentEleID,setCurrentEleID] = useState(null)
 let handleChecked=(id)=>{
  let newListItems=items.map((item)=>{return item.id===id?{...item,checked:!item.checked}:item})
  setItems(newListItems)
 }
 let handleUpdate =(id)=> {
  let listItem=items.find(item=>item.id===id)
  setNewItem(listItem.label)
  setIsEditing(true);
  setCurrentEleID(id)
 };
 let handleaddorSaveItem=()=>{
  if(isEditing){
    let newListItems=items.map((item)=>{
      return item.id===currentEleID?{...item,label:newItem}:item
    })
    setItems(newListItems)
    setCurrentEleID(null)
    setNewItem("")
    setIsEditing(false)
  }
  else{
    setItems([...items,{id:items.length+1,label:newItem,checked:false}])
  setNewItem("")//clear the input field after adding the item
 }

  }
  
 //handleDelete=>3
 //items=>1!==3=>push to new array
 let handleDelete=(id)=>{
  let newItems = items.filter(item=>item.id!==id)
  .map((item,index)=>{
    return {...item,id:index+1};
  });
  setItems(newItems);

 };
  return (
    <main>
      <div>
        <input type="text" value={newItem} placeholder="add new item" onChange={(e)=>{setNewItem(e.target.value)}}/>
        
        <button onClick={handleaddorSaveItem}>{isEditing ? "save":"add"}</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}> 
            <input type="checkbox" checked={item.checked} onChange={()=>handleChecked(item.id)}/>
            <label>{item.label}</label> 
            <CiEdit id="edit" role="button" tabIndex={0} onClick={ ()=>handleUpdate(item.id) } />
            <RiDeleteBin3Fill id="delete" role="button" tabIndex={0} onClick={()=>handleDelete(item.id)}/>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;

