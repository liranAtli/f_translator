import React, {useState} from "react";
import {useTypedSelector} from "../../state/hooks/useTypedSelector";
import {useAction} from "../../state/hooks/useAction";
import {Navigate, useNavigate} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;


const LoginPage: React.FC = () => {

    const [login, setLogin] = useState({
        email: '',
        password: ''
    });
    const {loginUser} = useAction();
    const {data, error, loading} = useTypedSelector((state) => state.users);
    const navigate = useNavigate();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        loginUser(login);

        if (data && !error && !loading) {
            navigate('/dashboard')
        }
    }

    const onChange = (event: any) => {
        const {name, value} = event.target;
        setLogin({
            ...login,
            [name]: value
        })
    }

    return (
        <div className="col-md-6 col-md-offset-3">
            <h2>Login</h2>
            <form name="form" onSubmit={onSubmit}>
                <div className={'form-group'}>
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" name="email" value={login.email}
                           onChange={onChange}/>
                    {/*    {submitted && !user.username &&
                        <div className="help-block">Username is required</div>
                    }*/}
                </div>
                <div className={'form-group'}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={login.password}
                           onChange={onChange}/>
                    {/*   {submitted && !user.password &&
                        <div className="help-block">Password is required</div>
                    }*/}
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Login</button>
                    {/*<Link to="/login" className="btn btn-link">Cancel</Link>*/}
                </div>
            </form>
        </div>
    )
}

export default LoginPage;