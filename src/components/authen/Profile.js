import React, { useEffect, useState } from 'react'
import { ACCESS_TOKEN, HOST, ISLOGIN, USERDATA } from '../../api/constants'
import { getData } from '../../api/UserAPI'
import { updateLoginState } from '../../store/actions'
import { useStore } from '../../store'

const Profile = () => {
    const [state, dispatch] = useStore()
    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem(USERDATA)) ?? {})
    const [isLoaded, setLoaded] = useState(false)
    useEffect(() => {
        const getUserData = async () => {
            setLoaded(false)
            const token = window.localStorage.getItem(ACCESS_TOKEN)
            let result = await getData(token, "user");

            if (result.status == 200) {
                setUser(result.data)
            }
            setLoaded(true)
        }

        getUserData()
    }, [])

    const SignOut = () => {
        window.localStorage.removeItem(ACCESS_TOKEN)
        window.localStorage.removeItem(ISLOGIN)
        window.localStorage.removeItem(USERDATA)
        dispatch(updateLoginState(false))
    }
    const RenderUser = () => {
        if (user != {}) {
            return (
                <div className='w-full h-fit'>
                    <div className='flex flex-col md:flex-row items-center md:items-start bg-slate-200 p-2 rounded'>
                        <img src={HOST + "api/public/image/profile/" + user.profile_image} className='profile_image rounded-full object-cover' />
                        <div className='w-full h-fit flex flex-col ml-0 md:ml-5  items-center md:items-start'>
                            <h3 className='font-bold text-3xl whitespace-break-spaces'>{user.name}</h3>
                            <p className='text-lg'>{user.email}</p>
                            <button className='w-fit px-3 py-1 mt-1 hover:bg-orange-900 transition-all rounded bg-orange-700 text-white' onClick={()=>SignOut()}>Sign out</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (

        <div className='w-full lg:w-1/2 2xl:w-1/3 p-5'>
            {
                isLoaded
                    ?
                    <RenderUser />
                    :
                    <div></div>
            }
        </div>
    )
}

export default Profile