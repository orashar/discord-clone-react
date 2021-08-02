import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
            .catch(err => alert(err.message))
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xu_bY_vwJwfexm3PCR7n4gHaEK%26pid%3DApi&f=1"
                 alt=""/>
            </div>
            <Button onClick={signIn}>Sign in</Button>

        </div>
    )
}

export default Login
