import {useContext, useReducer} from 'react'
import { GetControlVariables } from './pages/Functions'
export const kayasDomainUrl='https://kayas-4abb3c2de27b.herokuapp.com'
export const cheapItemsGroupLink='https://chat.whatsapp.com/BU6aMsNR6jL5x11rcWc9HZ'

export const setCookieOptionsObj={
    path:'/',sameSite:'strict',secure:true
   }
export const user={name:'Not logged in',contact:null,role:'user'}

export const bnplMaxCreditAmount=4000
export const audienceSmsCost=0
export const articleViewCost=75

export const getAvailableHostelRoomUpdatesSmsCost=500
// let minimumDepositAmount=await GetControlVariables(['minimumDepositAmount']).then(resp=>{
//   return resp.minimumDepositAmount
// })

export const kayasUnlockMessage=`Deposit to access all information (including other information). Refresh this page after depositing.`