import axios from 'axios'
import {GET_ERRORS, GET_WALLET, DELETE_WALLET,GETWALLET} from './types'


export const createWallet = (newWallet , history) => async dispath => {

   await axios.post('/wallet', newWallet)
    .then((res) =>{

     
      history.push('/dashboard')
       

    }).catch((err) => {
    
    dispath({type:GET_ERRORS,payload:err.response.data})
   
    });
}



export const updateWallet = (id,updateWaller , history) => async dispath => {

   await axios.put(`/wallet/${id}`, updateWaller)
    .then((res) =>{

     
      history.push('/dashboard')
       

    }).catch((err) => {
    
    dispath({type:GET_ERRORS,payload:err.response.data})
   
    });

}



export const getWallets = () => async dispath => {

  await axios.get('/wallet/${id}')
   .then((res) =>{

      dispath({type:GET_WALLET,payload:res.data})
   });

}

export const getWallet = (id) => async dispath => {

   await axios.get(`/wallet/${id}`)
    .then((res) =>{
 
       dispath({type:GETWALLET,payload:res.data})
    });

 
 }
export const deleteWallet = (id) => async dispath => {

   await axios.delete( 'http://localhost:8080/wallet/'+id)
    .then((res) =>{
 
       dispath({type:DELETE_WALLET,payload:id})
    });
 
 
 }
 
 
 //Transactions
 
 export const createTransaction = (newTransaction , history, walletid) => async dispath => {

   await axios.post(`/transaction/$(walletid)`, newTransaction)
    .then((res) =>{

     
      history.push(`/transactions/${walletid}`)
       

    }).catch((err) => {
           console.log(err);
    dispath({type:GET_ERRORS,payload:err.response.data})
   
    });
}