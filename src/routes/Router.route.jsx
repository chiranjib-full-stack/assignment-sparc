import React from 'react'
import Layout from './Layout.route'
import Error from '../pages/error/Error';
import Home from '../pages/home/Home';
import AboutUs from '../pages/aboutUs/AboutUs';
import CommonPage from '../pages/commonPage/CommonPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        errorElement:<Error/>,
        children:
            [
                {
                    path:"",
                    element: <Home/>
                    

                },
                {
                    path:"about",
                    element:<AboutUs/>
                },
                {
                    path:"services",
                    
                    errorElement:<Error/>,
                    children:[
                        {
                            path:"service1",
                            element:<CommonPage/>
                        },
                        {
                            path:"services2",
                            element:<CommonPage/>,
                            
                        },
                        {
                            path:"services3",
                            element:<CommonPage/>
                        }
                    ]
                },
                {
                    path:"contact",
                    element:<CommonPage/>
                },
                


            ]
        
    }
]);

export default router