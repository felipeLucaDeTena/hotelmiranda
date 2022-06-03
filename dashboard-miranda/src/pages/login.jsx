import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn({ togglePopup }) {
    const [login, setLogin] = useState({});

    useEffect(() => {
        if (auth) {
            navigate("/", { replace: true });
        }
    }, []);

    const navigate = useNavigate();

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        navigate("/", { replace: true });
    };

    const handleChange = (ev, control) => {
        setLogin({ ...login, [control]: ev.target.value });
    };

    return (
        <div>
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={login.name}
                            required
                            onChange={(ev) => handleChange(ev, "email")}
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={login.password}
                            required
                            onChange={(ev) => handleChange(ev, "password")}
                        />

                        <button type="submit">LOGIN</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LogIn;
