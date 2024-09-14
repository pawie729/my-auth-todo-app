import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';
import { TodoProvider } from './context/TodoContext';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const headerRoutes = ["/home", "/add-todo"];

  return (
    <>
      {headerRoutes.includes(location.pathname) && <Header />}
      {children}
    </>
  );
};

function App() {
  return (
    <div className='h-dvh'>
      <AuthProvider>
        <TodoProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<TodoList />} />
                <Route path="/add-todo" element={<AddTodo />} />
              </Routes>
            </Layout>
          </Router>
        </TodoProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
