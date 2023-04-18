import React from 'react'

const InputWithLabel = ({ label, type, name, value, onChange, style, styleLabel, placeholder }) => {
    return (
        <div className={`form-group ${style}`}>
          <label className={`w-full ${styleLabel}`} htmlFor={name}>{label}</label>
          <input
          className='w-full p-2 rounded-sm border '
            type={type}
            name={name}
            id={name}
            value={value}
            checked={value}
            onChange={onChange}
            placeholder={placeholder}
          />
        </div>
      )
}

export default InputWithLabel