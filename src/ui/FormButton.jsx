import React from 'react';;

const FormButton = ({ btnlabel, name, type, className = '' }) => {
    return (
      <div>
        <button
          id={name}
          name={name}
          type={type}
          className={`block w-full mr-2 bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-600 text-white px-2 py-1 rounded-md duration-500 hover:scale-105 ${className}`}
        >
            {btnlabel}
        </button>
      </div>
    );
  };
  
  export default FormButton;