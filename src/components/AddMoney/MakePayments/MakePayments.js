import React from 'react'
import { AiFillSecurityScan } from 'react-icons/ai'
import {MakePayment,Text} from './MakePaymentsStyle'
function MakePayments(props) {
    const Payment=(values)=>{
        const url = "http://localhost:3001/AddMoney"
        const data = {
            userid: localStorage.getItem("userid"),
            cardNumber:values.CardNumber,
            cardName: values.FullName,
            expiryDate:values.ExpiryDate,
            cvv: values.CVV,
            amount: values.Amount
        }
        fetch(url,{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          }) 
        .then((res)=>{
          return res.json()
        })
        .then((res)=>{
          alert(res.message)
        })
        .catch((err)=>{
          console.log(err)
        })
    }
    return (
        <MakePayment onClick={()=>Payment(props.values)} ><Text>Make Payment</Text></MakePayment>
    )
}

export default MakePayments
