import React, { FC, ReactElement, useEffect } from 'react';
import TextInput from './textInput';

const Login: FC = (): ReactElement => { 
    
    return(
        <>
        <div className="w-full h-full flex flex-col items-center justify-center">
            <h1>new form</h1>
            <TextInput/>
            <TextInput/>
            <button>submit</button>
        </div>
    </>
    );
};

export default Login;