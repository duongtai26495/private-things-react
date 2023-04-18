import React from 'react'

const ButtonWithIcon = ({style, onclick = () => {}, title, isLoading}) => {
  return (
    <button className={`${style} w-full`}
    onClick={onclick}>
    {
        isLoading == true 
        ? 
        "Loading..."
        :
        title
    }
        
    </button>
  )
}

export default ButtonWithIcon