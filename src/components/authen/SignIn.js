import React, { useState } from 'react'
import InputWithLabel from '../InputWithLabel'
import ButtonWithIcon from '../ButtonWithIcon';
import { ACCESS_TOKEN, ISLOGIN, USERDATA, USERNAME, rememberMe } from '../../api/constants';
import { getData, loginUser } from '../../api/UserAPI';
import { useStore } from '../../store';
import { updateLoginState } from '../../store/actions';


const SignIn = () => {
    const [state, dispatch] = useStore()

    const [username, setUname] = useState(window.localStorage.getItem(USERNAME) ?? '');
    const [password, setUPw] = useState('');
    const [remember, setRemember] = useState(Boolean(window.localStorage.getItem(rememberMe)) ?? false);

    const handleUsernameChange = (event) => {
        setUname(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setUPw(event.target.value);
      };
    const handleLogin = async () => {
        let user = {
            username,
            password
        }
        if(remember){
            window.localStorage.setItem(USERNAME, username)
            window.localStorage.setItem(rememberMe, true)
        }else{
            window.localStorage.removeItem(USERNAME)
            window.localStorage.removeItem(rememberMe)
        }
        const result = await loginUser(user);
        if(result.status == 200){
            const token = result.data.token
            let data = await getData(token, "user")
            if(data.status == 200){
                window.localStorage.setItem(USERDATA, JSON.stringify(data.data))
                window.localStorage.setItem(ACCESS_TOKEN, token)
                window.localStorage.setItem(ISLOGIN, true)
                dispatch(updateLoginState(true))
            }
        }
        
    }
    const handleRememberMe = (event) => {
        setRemember(event.target.checked);
    }

    
    return (
        
        <div className='m-auto w-4/5 xl:w-2/3 2xl:w-1/3 flex flex-col gap-3 authen-form p-5 xl:p-0'>
        <h3 className='text-4xl font-bold m-auto'>Welcome back!</h3>
        <p className='text-md m-auto'>Sign in to <strong>Private things</strong></p>
        <hr className='my-3'/>
            <InputWithLabel
                label="Username"
                type="text"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Enter your username"
                style={"w-full text-sm rounded"}
                styleLabel={"font-bold"}
            />
            <InputWithLabel
                label="Password"
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                style={"w-full text-sm rounded"}
                styleLabel={"font-bold"}
            />
            <InputWithLabel
                label={"Keep me logged in"}
                style={"flex flex-row-reverse text-end w-fit gap-3 rounded"}
                name={"remember"}
                type={"checkbox"}
                value={remember}
                styleLabel={"text-sm whitespace-nowrap"}
                onChange={handleRememberMe}
            />
            <ButtonWithIcon
            style={"p-2 rounded border font-bold text-sm bg-cyan-500 hover:bg-cyan-700 transition-all text-white"}
            title={"Log in"}
            onclick={handleLogin}
            />
        </div>
    )
}

export default SignIn