import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoginIn, setIsLoginIn] = useState(true)

    const {login, signUp, currentUser} = useAuth()
    console.log(currentUser)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please enter email and password')
            return
        }

        if(isLoginIn){
            try {
                await login(email, password)
            } catch (error) {
                setError("Incorrect email or password")
            }
            return 
        }
        await signUp(email,password)
    };



    return (
        <div className="flex items-center justify-center h-screen bg-gray-600" >
            <div className="flex flex-col justify-center items-center  w-2/5 bg-white space-y-10  border rounded-2xl  pt- py-8" onSubmit={handleSubmit}>
                <h1 className="text-3xl uppercase">{isLoginIn ? "login" : "register"}</h1>
                {error && <div className="">{error}</div>}
                <input type="email" className=" w-96  p-1  outline-none border-b-2 border-black"
                    placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="w-96  p-1  outline-none border-b-2 border-black"
                    placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} />      
                <button onClick={handleSubmit} className="w-96 border border-solid border-black rounded">SUBMIT</button>
                <p className=" text-gray-600 hover:text-gray-900 cursor-pointer">Forgot your password?</p>
                <div className="flex justify-between">
                    <button onClick={()=>setIsLoginIn(true)} className="w-48 h-8 bg-gray-300 hover:bg-gray-400">
                        LOGIN
                    </button>
                    <button onClick={()=>setIsLoginIn(false)} className="w-48 h-8 text-white bg-gray-700 hover:bg-gray-800 hover:text-gray-400">
                        REGISTER
                    </button>
                </div>

            </div>
        </div>
    )

};

export default SignIn;