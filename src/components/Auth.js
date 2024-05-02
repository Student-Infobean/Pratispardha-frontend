import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function Auth({children}){
    const currentUser = JSON.parse(sessionStorage.getItem('current-user'));
    return currentUser ? children : <Navigate to='/signin'/>
}
export default Auth;