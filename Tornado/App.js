import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Header';
import Body from './src/Body';
import AboutUs from './src/AboutUs';
import ContactUs from './src/ContactUs';
import Error from './src/Error';
import RestuarantMenu from './src/RestuarantMenu';
import { createBrowserRouter,RouterProvider, Outlet } from 'react-router';

// const heading = <h1 id='heading'>This is a food delivery App!</h1>
// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/27/50c87a55-05ff-4a7e-b013-a25f97fd4edd_1016812.jpg

const AppLayout = () => {
    return (
        <div className='app'>
           <Header />
           <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <AboutUs/>,
            },
            {
                path: "/contact",
                element: <ContactUs/>,
            },
            {
                path: "/restuarants/:id",
                element: <RestuarantMenu />,
            }

        ],
        errorElement: <Error />,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< RouterProvider router={appRouter} />);
