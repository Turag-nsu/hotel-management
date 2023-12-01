import React from 'react';
import { useGoogleOAuth } from '@react-oauth/google';
import { Button } from 'react-bootstrap';
import { GoogleLogin } from '@react-oauth/google';

const LoginPage = () => {
    

    return (
        <div style={{marginTop: "10rem"}}>
            <GoogleLogin
            onSuccess={credentialResponse => {
                console.log(credentialResponse);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            useOneTap
        />
        </div>
    );
};

export default LoginPage;
