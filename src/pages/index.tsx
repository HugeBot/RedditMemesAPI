import dynamic from 'next/dynamic';
import Router from 'next/router'
import React, { useEffect } from "react";
import sw from 'swagger-ui-react';
const SwaggerUI=dynamic(import("../components/Swagger").then(m=>m.default), { ssr: false })


const Home = () => {

    /*useEffect(() => {
        const {pathname} = Router
        if(pathname == '/' ){
            Router.push('/api')
        }
    });

    return <div>Redirecting...</div>*/
    return <SwaggerUI></SwaggerUI>
}

export default Home;