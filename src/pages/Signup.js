import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Register = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        checkpassword: ''
    })
    const navigate = useNavigate()

    const handleChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handlerSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, input.email, input.password);
            alert("User Created!!")
            navigate("/")
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>
            <div class="forms rounded shadow p-5 mt-5">
                <div class="form-content mx-auto">
                        <div class="signup-form">
                            <div class="title">Signup</div>
                            <form onSubmit={handlerSignUp}>
                                <div class="input-boxes">
                                    <div class="input-box">
                                        <FontAwesomeIcon className="icon" icon="fa-solid fa-user" />
                                        <input type="text" placeholder="Enter your name" value={input.name} name="name" required onChange={handleChange} />
                                    </div>
                                    <div class="input-box">
                                        <FontAwesomeIcon className="icon" icon="fas fa-envelope" />
                                        <input type="text" placeholder="Enter your email" value={input.email} name="email" required onChange={handleChange} />
                                    </div>
                                    <div class="input-box">
                                        <FontAwesomeIcon className="icon" icon="fas fa-lock" />
                                        <input type="password" placeholder="Enter your password" value={input.password} name="password" required onChange={handleChange} />
                                    </div>
                                    <div class="input-box">

                                        <FontAwesomeIcon className="icon" icon="fas fa-lock" />
                                        <input type="password" placeholder="Enter your check password" value={input.checkpassword} name="checkpassword" required onChange={handleChange} />
                                    </div>
                                    <div class="button input-box">
                                        <button type="submit">Submit</button>
                                    </div>
                                    <div class="text sign-up-text">Already have an account?<Link to="/"> <label for="flip">Login
                                        now</label></Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Register;