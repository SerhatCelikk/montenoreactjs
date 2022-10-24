
// import 'swiper/swiper.min.css';
import {React , useEffect} from 'react';
import '../src/assets/icons/font-awesome.css';
import './App.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import {
    WalletProvider,
    HippoWalletAdapter,
    AptosWalletAdapter,
    HippoExtensionWalletAdapter,
    MartianWalletAdapter,
    FewchaWalletAdapter,
    PontemWalletAdapter,
    SpikaWalletAdapter,
    RiseWalletAdapter,
    FletchWalletAdapter
  } from '@manahippo/aptos-wallet-adapter';

import { Route , Routes } from 'react-router-dom';

import routes from './pages/index'


function App() {
    const wallets = [
        new RiseWalletAdapter(),
        // new HippoWalletAdapter(),
        new MartianWalletAdapter(),
        new AptosWalletAdapter(),
        new FewchaWalletAdapter(),
        // new HippoExtensionWalletAdapter(),
        new PontemWalletAdapter(),
        new SpikaWalletAdapter(),
        new FletchWalletAdapter()
      ];
    
    useEffect(() => {
        AOS.init({
          duration : 2000
        }); 
      }, []);
    return (
        <WalletProvider
      wallets={wallets}
      autoConnect={false} /** allow auto wallet connection or not **/
      onError={(error) => {
        console.log('Handle Error Message', error);
      }}>
        <Routes >
            {
            routes.map((data,index) => (
                <Route exact={true} path={data.path} element={data.component} key={index} />
            ))
            }
        </Routes></WalletProvider>
    );
}

export default App;
