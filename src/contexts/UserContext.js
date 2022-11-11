import React, {createContext} from 'react';

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const myName = "Talha Sarker";
    const authInfo = {myName};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;