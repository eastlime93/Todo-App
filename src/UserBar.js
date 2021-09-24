import React from 'react'
import Login from './Login'
import Logout from './Logout'
import Registration from './Registration'

export default function UserBar(){
  const user=''
  if(user){
      return <Logout user={user} />
    }else{
      return (
        <>
          <Login />
          <Registration />
        </>
      )
    }

}
