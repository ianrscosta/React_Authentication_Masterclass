import React, { createContext } from 'react';
import * as auth from '../Services/auth'

interface AuthContextData {
    signed: boolean;
    token: string;
    user: object;
    signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    async function signIn() {
        const response = await auth.signIn();

        console.log(response);
    }
    
    return (
        <AuthContext.Provider value={{signed: false, user: {}, signIn}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;