import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";

const handlePath = () => {
    const path = window.location.pathname;
    if (path === '/session/login') {
        return <Login />
    } else if (path === '/session/register') {
        return <Register />
    }

}

function Session() {
    return (
        <div>
            {
                handlePath()
            }
        </div>
    )
}

export default Session;