import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/signup'
import Signin from './pages/signin'
import Blog from './pages/blog'
import { ToastContainer } from 'react-toastify'
import { Bounce } from 'react-toastify/unstyled'
import Allblogs from './pages/AllBlogs'
import CreatePost from './pages/Create'



function App() {

  return (
    <div>
      <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
      />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/blogs' element={<Allblogs/>}/>
        <Route path='/create' element={<CreatePost />} />
        <Route path='/update' element />
      </Routes> 
      </BrowserRouter>
      
    </div>
  )
}

export default App
