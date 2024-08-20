import { useRouteError } from "react-router-dom";
const ErrorPage = () => {

    const errorTest = useRouteError();
    console.log("error-test", errorTest)
    return <h1>error-page</h1>
}
export default ErrorPage;