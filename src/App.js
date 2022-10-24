
// import 'swiper/swiper.min.css';
import {React , useEffect} from 'react';
import '../src/assets/icons/font-awesome.css';
import './App.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';


import { Route , Routes } from 'react-router-dom';

import routes from './pages/index'


function App() {

    useEffect(() => {
        AOS.init({
          duration : 2000
        }); 
      }, []);
    return (
        <Routes >
            {
            routes.map((data,index) => (
                <Route exact={true} path={data.path} element={data.component} key={index} />
            ))
            }
        </Routes>
    );
}

export default App;
