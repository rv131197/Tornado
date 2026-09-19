import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Header';
import Body from './src/Body';

// const heading = <h1 id='heading'>This is a food delivery App!</h1>
// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/27/50c87a55-05ff-4a7e-b013-a25f97fd4edd_1016812.jpg

const AppLayout = () => {
    return (
        <div className='app'>
           <Header />
           <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
