import React from 'react';
import { Field, ErrorMessage } from 'formik';

const FormInput = ({ label, name, type, autocomplete, disabled, className = '' }) => {
    return (
      <div>
        <div className='flex justify-between'>
          <label 
            htmlFor={name} 
            className='text-neutral-500 text-xs'
          >
            {label}
          </label>
          <ErrorMessage 
            name={name} 
            component="div" 
            className="text-red-500 text-[9px] text-right" 
          />
        </div>
        <Field
          id={name}
          name={name}
          type={type}
          autoComplete={autocomplete}
          disabled={disabled}
          className={`block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm outline-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6 ${className}`}
        />
      </div>
    );
  };
  
  export default FormInput;