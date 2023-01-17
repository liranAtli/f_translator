import React, {useState} from "react";
import {useTypedSelector} from "../../state/hooks/useTypedSelector";
import {useAction} from "../../state/hooks/useAction";
import {useNavigate} from "react-router-dom";


const SignUpPage: React.FC = () => {

    const [signUp, setSignUp] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const {signUpUser} = useAction();
    const {data, error, loading} = useTypedSelector((state) => state.users);
    const navigate = useNavigate();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        signUpUser(signUp);

        if (data && !error && !loading) {
            navigate('/dashboard')
        }

    }

    const onChange = (event: any) => {
        const {name, value} = event.target;
        setSignUp({
            ...signUp,
            [name]: value
        })
    }

    return (
        <div className="col-md-6 col-md-offset-3">
            <h2>Register</h2>
            <form name="form" onSubmit={onSubmit}>
                <div className={'form-group'}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" name="firstName" value={signUp.firstName}
                           onChange={onChange}/>
                    {/*    {submitted && !user.firstName &&
                        <div className="help-block">First Name is required</div>
                    }*/}
                </div>
                <div className={'form-group'}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" name="lastName" value={signUp.lastName}
                           onChange={onChange}/>
                    {/*  {submitted && !user.lastName &&
                        <div className="help-block">Last Name is required</div>
                    }*/}
                </div>
                <div className={'form-group'}>
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" name="email" value={signUp.email}
                           onChange={onChange}/>
                    {/*    {submitted && !user.username &&
                        <div className="help-block">Username is required</div>
                    }*/}
                </div>
                <div className={'form-group'}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={signUp.password}
                           onChange={onChange}/>
                    {/*   {submitted && !user.password &&
                        <div className="help-block">Password is required</div>
                    }*/}
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Register</button>
                    {/*<Link to="/login" className="btn btn-link">Cancel</Link>*/}
                </div>
            </form>
        </div>
    )
}

export default SignUpPage;