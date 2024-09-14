import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import FormInput from '../ui/FormInput';  
import FormButton from '../ui/FormButton';

const Register = () => {
  const { register } = useContext(AuthContext);
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('*First Name is required'),
    lastName: Yup.string().required('*Last Name is required'),
    email: Yup.string().email('Invalid email').required('*Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('*Password is required'),
  });

  const handleSubmit = (values) => {
    register(values.firstName, values.lastName, values.email, values.password);
    setIsRegistered(true);

    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className='container mx-auto lg:grid lg:grid-cols-1 flex justify-center h-dvh items-center bg-gradient-to-tl from-gray-500 via-cyan-300 to-cyan-600'>
            
          <div className='lg:mx-20 mx-7 flex flex-col w-full lg:w-1/4 rounded-3xl shadow-2xl p-5 bg-neutral-50 relative'>
            <div className='space-y-5'>
              <h1 className='text-center text-cyan-600 font-semibold uppercase'>Register</h1>

              <FormInput 
                label="First Name" 
                name="firstName" 
                type="text" 
                autocomplete="given-name" 
              />
              
              <FormInput 
                label="Last Name" 
                name="lastName" 
                type="text" 
                autocomplete="family-name" 
              />
              
              <FormInput 
                label="Email" 
                name="email" 
                type="email" 
                autocomplete="email" 
              />

              <FormInput 
                label="Password" 
                name="password" 
                type="password" 
                autocomplete="new-password" 
              />
            </div>

            <div className=' pt-3'>
              <FormButton
                type="submit"
                btnlabel="Register"
              />

              <div className='flex text-xs justify-center space-x-2'>
                <p>Already have an account?</p> 
                <a href='/' className='underline text-cyan-700'>Login</a>
              </div>
            </div>

            {isRegistered && (
              <div className='absolute top-full w-full left-1/2 transform -translate-x-1/2 p-3 shadow-xl text-green-600 text-center bg-white bg-opacity-50 rounded-xl text-xs z-30'>
                Registration successful! Redirecting to login...
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Register;