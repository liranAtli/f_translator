import {Provider} from "react-redux";
import {store} from "../state";
import {Route, Routes} from 'react-router-dom';
import SignUpPage from "../pages/auth/signup";
import {PrivateWrapper} from "./PrivateRoute";
import Dashboard from "../pages/dashboard/dashboard";
import LoginPage from "../pages/auth/login";

export const App = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route
                    path='/dashboard'
                    element={(
                        <PrivateWrapper>
                            <Dashboard/>
                        </PrivateWrapper>
                    )}
                />

                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
            </Routes>
        </Provider>
    );
};

export default App;
