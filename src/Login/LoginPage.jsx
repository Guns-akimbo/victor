import { useRef, useState } from "react"
import Forminput from "../Form/Forminput"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const LoginPage = () => {
    const navigate = useNavigate()
    const [load, setLoad] = useState(false)
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    })
    // ^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^*]{8,20}$ 

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special characters",
            label: "Username",
            pattern: "^[A-Z-z0-9]{3,16}$",
            required: true

        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be an email",
            label: "Email",
            required: true
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            errorMessage: "",
            label: "Birthday"
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be a 20 character and should include one letter,one number and one special character",
            label: "Password",
            pattern: "^[A-Z-z0-9]{3,16}$",
            required: true
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Password don't match",
            label: "Confirm Password",
            pattern: values.password,
            required: true
        },
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoad(true)
            const { username, email, password } = values
            const api = "https://eflexshop.onrender.com/user/register"
            const res = await axios.post(api, { name: username, email, password })
            console.log(res)
            setLoad(false)
            navigate("/loginpage")
        } catch (err) {
            setValues({
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
            setLoad(false)
            console.error(err)
        }
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    // console.log(values)
    return (
        <div className="Loginpage">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="register"> Register</h1>
                {inputs.map((input) => (
                    <Forminput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange} />
                ))}

                <button disabled={load} className="subBtn">Submit</button>
            </form>


        </div>
    )
}

export default LoginPage 