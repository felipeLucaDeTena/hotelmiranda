import { createContext, useContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = localStorage.getItem("authenticated")
    ? JSON.parse(localStorage.getItem("authenticated"))
    : { authenticated: false, userName: null, email: null };

const authReducer = (state, action) => {
    switch (action.type) {
        case "login":
            localStorage.setItem(
                "authenticated",
                JSON.stringify({ ...action.payload, authenticated: true })
            );
            console.log(action.payload);
            return {
                ...state,
                authenticated: true,
                userName: action.payload.personal.fullname,
                email: action.payload.personal.email,
            };
        case "logout":
            localStorage.removeItem("authenticated");
            return { ...state, authenticated: false };
        case "updateUsername":
            return { ...state, userName: action.payload.personal };
        case "updateEmail":
            return { ...state, email: action.payload.perosnal.email };
        default:
            return state;
    }
};

export function AuthProvider({ children }) {
    const [authState, dispatchAuth] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{ authState, dispatchAuth }}>
            {children}
        </AuthContext.Provider>
    );
}
export const useAuth = () => useContext(AuthContext);
