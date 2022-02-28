import React from 'react'

export const Display = ({textToDisplay}) => {

  

  return (
    <div id="result" className="result">{textToDisplay || "0.00"}</div>

  )
}
