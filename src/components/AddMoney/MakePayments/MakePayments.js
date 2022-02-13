import React from 'react'
import {MakePayment,Text} from './MakePaymentsStyle'
function MakePayments(props) {
    const Payment=(amount)=>{
        amount=amount.toString()
        console.log(amount)
        fetch("http://localhost:3001/AddMoney",{
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
            body: JSON.stringify(amount) // body data type must match "Content-Type" header
          }) 
         .catch((err)=>{
            console.log(err)
          })
    }
    return (
        <MakePayment onClick={()=>Payment(props.amount)} ><Text>Make Payment</Text></MakePayment>
    )
}

export default MakePayments
