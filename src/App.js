import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';

// style
import './App.css';

// components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Validation from './components/signUpAndSignIn/Validation';
import SignIn from './components/signUpAndSignIn/SignIn';
import SignUp from './components/signUpAndSignIn/SignUp';
import CartGeneralInfo from './components/CartGeneralInfo';
import Categories from './components/Categories';
import SubCategory from './components/SubCategory';
import SpecialProducts from './components/SpecialProducts';
import Cart from './components/Cart';
import AllProducts from './components/AllProducts';
import Footer from './components/footer/Footer';
import Detail from './components/Detail';
import Notify from './components/notification/Notify';

// redux
import store from './redux/store';

const App = () => {

  return (
    <div className='shoppingContainer'>
      <Provider store={store}>
          <Routes>
            <Route path='/home' element={ 
              <>
                <Header/> 
                <Navbar/>
                <CartGeneralInfo/>
                <Categories/>
                <SpecialProducts/>
                <AllProducts/>
              </>
            }/>  
            {/* <Route path='/sign-in' element={ <SignIn/> }/>
            <Route path='/sign-up' element={ <SignUp/> }/> */}
            <Route path='/validation/:pageType' element={<Validation />}/>
            <Route path='/categories/:category' element={ 
              <>
                <Header/> 
                <Navbar/>
                <CartGeneralInfo/>
                <Categories/>
                <SubCategory/>
              </> 
            }/>
            <Route path='/products' element={ 
              <>
                <Header/> 
                <Navbar/>
                <CartGeneralInfo/>
                <AllProducts/> 
              </>
            }/>
            <Route path='/products/:id' element={ 
              <>
                <Navbar/>
                <CartGeneralInfo/>
                <Detail/>
              </> 
            }/>
            <Route path='/cart' element={ 
              <>
                <Navbar/>
                <Cart/> 
              </>
            }/>
            <Route path='/' element={ <Navigate to="/home"/> }/>
          </Routes>
          <Footer/>
          <Notify/>
      </Provider>
    </div>
  );
};

export default App;

