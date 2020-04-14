import SwaggerUI from "swagger-ui-react";

const Swagger = () => {

    /*useEffect(() => {
        const {pathname} = Router
        if(pathname == '/' ){
            Router.push('/api')
        }
    });

    return <div>Redirecting...</div>*/
    return <SwaggerUI url="/openapi.json"></SwaggerUI>
}

export default Swagger;