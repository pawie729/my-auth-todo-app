import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';
import FormButton from '../ui/FormButton';
import FormInput from '../ui/FormInput';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('*Email is required'),
    password: Yup.string().required('*Password is required'),
  });

  const handleSubmit = (values) => {
    const success = login(values.email, values.password);
    if (success) {
      navigate('/home');
    } else {
      setErrorMessage('Invalid credentials, Please Try Again');
    }
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className='container mx-auto lg:grid lg:grid-cols-1 flex justify-center h-dvh items-center bg-gradient-to-tl from-gray-500 via-cyan-300 to-cyan-600 '>
          
          <div className='md:mx-20 mx-7 flex flex-col w-full lg:w-1/4 rounded-3xl shadow-2xl p-5 bg-neutral-50 relative'>

            <div className='space-y-5'>

              <h1 className='text-center text-cyan-600 font-semibold uppercase'>Login</h1>

              <FormInput 
               label="Email" 
               name="email" 
               type="email" 
               autoComplete="email" 
              />

              <FormInput 
               label="Password" 
               name="password" 
               type="password" 
               autoComplete="current-password" 
              />

            </div>

            {errorMessage && (

              <div className='absolute top-full w-full left-1/2 transform -translate-x-1/2 p-3 shadow-xl text-red-500 text-center bg-white bg-opacity-50 rounded-xl text-xs z-30'>
                {errorMessage}
              </div>
            )}

            <div className=' pt-3'>
              <FormButton type="submit" btnlabel="Login" />

              <div className='flex text-xs justify-center space-x-2'>
                
                <p>You don't have an account?</p>
                <a 
                 href='/register' 
                 className='underline text-cyan-700'>
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;