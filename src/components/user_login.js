import { useState } from 'react';
import '../css/user_login.css';
import { LoginContext } from '../App';
export default function UserLogin() {

    const [login, setLogin] = useState(true);
    const [register, setRegister] = useState(false);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginhandler = () => {
        console.log(email, password);
        setLogin(true);
        setRegister(false);

    };
    const signuphandler = () => {
        setLogin(false);
        setRegister(true);
    };


    return (
        <div className='container'>
            {login && (
                <div className="center">
                <h1>Login</h1>
                <form>
                    <div className="textfild">
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
                        <span></span>
                        <label>Username</label>
                    </div>
                    <div className="textfild">
                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <div className="forget">
                        Forget Password?
                    </div>
                    <LoginContext.Consumer>
                        {(context, setContext) =>  {
                            return (<button type="button" id='login' name="submit" onClick={(event) => {
                                console.log(email, password);
                                context.setContext({
                                    login: {
                                        loggedin: true,
                                        username: email,
                                        password: password
                                    }
                                })
                                
                            }}> LogIn </button>)
                        }
                        }
                    </LoginContext.Consumer>
                    <div className="signup">
                        <button type='button' id='signup' onClick={signuphandler}>SignUp</button>
                    </div>
                    {/* submit script */}

                </form>

            </div>
            )}
            {register && (
                <div className="card mx-auto col-6 m-3" style={{fontFamily:'sans-serif'}}>
                    <div className="card-body">
                        <h5 className="card-title text-center">Register Here</h5>
                        <form className="row g-3 ">
                            <div className="mb-3">
                                <label for="name" className="form-label">Full Name <span style={{color:'red'}}>*</span></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-auto">
                                <label className="form-label">Contact No. <span style={{color:'red'}}>*</span></label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="col-auto">
                                <label className="form-label">User Name <span style={{color:'red'}}>*</span></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-auto">
                                <label className="form-label">Password <span style={{color:'red'}}>*</span></label>
                                <input type="password" className="form-control" />
                            </div>
                            <div className="col-auto ">
                                <label className="form-label">City <span style={{color:'red'}}>*</span></label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-auto">
                                <label className="form-label">Aadhaar No. <span style={{color:'red'}}>*</span></label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="col-auto">
                                <label for="formFile" className="form-label">Aadhaar Photo <span style={{color:'red'}}>*</span></label>
                                <input className="form-control" type="file" id="formFile" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email Address <span style={{color:'red'}}>*</span></label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Full Address <span style={{color:'red'}}>*</span></label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                            <div className="mb-3" id="loginbtn">
                                <p id='loginfont'>If Already Have An Account? <button type="button" id='loginbtn' onClick={loginhandler}> Log In</button></p>
                            </div>
                        </form>
                    </div>

                </div>
            )
            }
        </div>

    )
}