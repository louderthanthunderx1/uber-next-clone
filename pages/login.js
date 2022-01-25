import React, { useEffect }from 'react';
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router';
import {  signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase';

const Login = () => {

    const router = useRouter()

    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    },[])
  return (
      <Wrapper>
          <UberLogo src="http://i.ibb.co/ZMhy8ws/uber-logo.png" />
          <Title>Login in to accesss your account</Title>
          <HeadImage src="http://i.ibb.co/CsV9RYZ/login-image.png"/>
          <SignInButton onClick={()=> signInWithPopup(auth, provider)}>
              Sign in with Google
          </SignInButton>
      </Wrapper>
  )
};

export default Login;

const Wrapper = tw.div`
flex flex-col h-scren w-screen p-4  
`
const UberLogo = tw.img`
h-20 w-auto  object-contain self-start
`
const Title = tw.div`
text-5xl pt-4 text-gray-500
`
const HeadImage = tw.img`

`
const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full
`