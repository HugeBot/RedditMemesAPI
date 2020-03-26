import Router from 'next/router'
import React, { useEffect } from "react";


const Home = () => {

    useEffect(() => {
        const {pathname} = Router
        if(pathname == '/' ){
            Router.push('/api')
        }
    });

    return <div>Redirecting...</div>
}

export default Home;