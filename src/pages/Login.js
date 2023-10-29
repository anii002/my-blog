import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [userData, setData] = useState({
        email: "",
        password: ''
    });
    const navigate = useNavigate()
    const handleChange = (e) => {
        setData({
            ...userData,
            [e.target.name]: e.target.value
        })

    }
    const handlerLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, userData.email, userData.password);
            const user = {
                token: userCredential.user.accessToken,
                email: userCredential.user.email
            };
            localStorage.setItem("user", JSON.stringify(user))
            navigate("/dashboard")
          
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>
            <div className="forms rounded shadow p-5 mt-5">
                    <div className="form-content mx-auto">
                        <div className="login-form ">
                            <div className="title">Login</div>
                            <div className="input-boxes">
                                <div className="input-box">
                                    <FontAwesomeIcon className="icon" icon="fas fa-envelope" />
                                    <input type="email" placeholder="Enter your email" required value={userData.email} name="email" onChange={handleChange} />
                                </div>
                                <div className="input-box">
                                    <FontAwesomeIcon className="icon" icon="fas fa-lock" />
                                    <input type="password" placeholder="Enter your password" required value={userData.password} name="password" onChange={handleChange} />
                                </div>

                                <div className="button input-box">
                                    <button onClick={handlerLogin}  >Login</button>
                                </div>

                                <div className="text sign-up-text">Don't have an account? <Link to="/signup"><label for="flip">Sigup
                                    now</label></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Login;