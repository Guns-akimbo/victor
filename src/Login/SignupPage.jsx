import { useRef, useState } from "react"
import Forminputlogin from "../Form/Forminputlogin";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const SignupPage = () => {

    const navigate = useNavigate()
    const [load, setload] = useState(false)
    const [values, setValues] = useState({
        // username: "",
        password: "",
        email: "",

    })
    // ^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^*]{8,20}$ 

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be an email",
            label: "Username",
            // pattern:"^[A-Z-z0-9]{3,16}$",
            required: true
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be a 20 character and should include one letter,one number and one special character",
            label: "Password",
            pattern: "^[A-Z-z0-9]{3,16}$",
            required: true
        },
    ]

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setload(true)
            const { email, password } = values 
            const api = "https://eflexshop.onrender.com/user/login"
            const res = await axios.post(api, { email, password })
            const user = res.data.data
            localStorage.setItem("user", JSON.stringify({ id: user._id, token: user.token, name: user.name }))
            console.log(res)
            setload(false)
            navigate("/")
        } catch (err) {
            setload(false)
            console.error(err)
        }
    };


    // console.log(values)
    return (
        <div className="Loginpage">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="register">Login</h1>
                {inputs.map((input) => (
                    <Forminputlogin
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange} />
                ))}

                <button disabled={load} className="subBtn">Login</button>
            </form>


        </div>
    )
}

export default SignupPage 