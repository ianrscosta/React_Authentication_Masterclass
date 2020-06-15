import React, { createContext, useState } from 'react';
import * as auth from '../Services/auth'

interface AuthContextData {
    signed: boolean;
    token: string;
    user: object | null;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<Object | null>(null);

    async function signIn() {
        const response = await auth.signIn();

        const { token, user } = response;

        setUser(response.user);
    }
    
    function signOut() {
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{signed: !!user, user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;