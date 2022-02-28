import React from 'react'

export const Button = ({item, handleOnClick}) => {
    


  return (
    <button className={item.cls} 
    onClick={() => handleOnClick(item.label)}>
        {item.label}
        </button>
  )
}
