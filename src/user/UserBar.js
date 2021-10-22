import React, {useContext} from 'react'
import {StateContext} from '../contexts'
import Login from './Login'
import Logout from './Logout'
import Registration from './Registration'

export default function UserBar(){

  const {state} = useContext(StateContext)

  if(state.user){
      return <Logout />
    }else{
      return (
        <>
          <Login />
          <Registration />
        </>
      )
    }

}
