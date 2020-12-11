import { useSelector, useDispatch} from 'react-redux';
import './Login.css';
import {Link } from 'react-router-dom';
const Login = () => {

    const user = useSelector(state => state.userState.user);

    const dispatch = useDispatch();
   

    const handleClick = () =>{
        dispatch({ type: 'SIGNOUT', payload: ({})})

        console.log(user);

    }

    if(user.auth){
        return (
            <Link to="/" onClick={handleClick}>Logout</Link>
            )
        }else{
            return (    
        
                <Link to="/signIn">SignIn</Link>

                )
        }

}

export default Login;