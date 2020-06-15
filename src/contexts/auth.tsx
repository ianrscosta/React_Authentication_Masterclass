import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../Services/auth';
import api from '../Services/api'

interface AuthContextData {
    signed: boolean;
    token: string;
    user: object | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<Object | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem('@Authentication/React-Native:user');
            const storageToken = await AsyncStorage.getItem('@Authentication/React-Native:token');

            if (storageToken && storageUser) {
                api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;

                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
        }

        loadStorageData();
    }, []);

    async function signIn() {
        const response = await auth.signIn();

        const { token, user } = response;

        setUser(response.user);

        api.defaults.headers['Authorization'] = `Bearer ${response.token}`;

        await AsyncStorage.setItem('@Authentication/React-Native:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@Authentication/React-Native:token', response.token);

    }
    
    function signOut() {
        AsyncStorage.clear().then(() =>  {
            setUser(null);
        })
    }

    return (
        <AuthContext.Provider value={{signed: !!user, user, loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;