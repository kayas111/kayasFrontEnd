import {useContext,createContext, useReducer} from 'react'
export const kayasDomainUrl='https://kayas-4abb3c2de27b.herokuapp.com'
export const cheapItemsGroupLink='https://chat.whatsapp.com/BU6aMsNR6jL5x11rcWc9HZ'

export const setCookieOptionsObj={
    path:'/',sameSite:'strict',secure:true
   }
export const user={name:'Not logged in',contact:null,role:'user'}
export const AppContext=createContext()
export const bnplMaxCreditAmount=4000
export const audienceSmsCost=0
export const articleViewCost=50