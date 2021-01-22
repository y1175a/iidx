import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId = "192205815159-qu1iu8isco1lushv60lerbb0vpu1vnmi.apps.googleusercontent.com";

export default function GoogleButton({ onSocial }){
    const onSuccess = async(response) => {
    	console.log(response);
    
        const { googleId, profileObj : { email, name } } = response;

        //웹사이트 서버 로그인 함수가 구현되어야 작동함
        // await onSocial({
        //     socialId : googleId,
        //     socialType : 'google',
        //     email,
        //     nickname : name
        // });
        console.log(response);
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}/>
        </div>
    )
}