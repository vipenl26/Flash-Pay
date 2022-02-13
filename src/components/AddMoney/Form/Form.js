import React , {useState} from 'react'
import MakePayments from '../MakePayments/MakePayments'
import {Details, FormContainer,FormWrapper,Input,InputContainer,Label} from './FormStyle'
import CreditCard from '../CreditCard/CreditCard'
import useForm from './useForm'
function Form() {

    const [values,handleChange]=useForm({CardNumber:'',FullName:'',ExpiryDate:'',CVV:'',Amount:''})
    
  



    return (
        <FormContainer>
            <CreditCard values={values}></CreditCard>
            <FormWrapper>
                <InputContainer>
                    <Label>Card Number</Label>
                    <Input width="23rem" name="CardNumber" value={values.CardNumber} onChange={handleChange}></Input>
                </InputContainer>
                <InputContainer>
                    <Label>Full Name</Label>
                    <Input width="23rem" name="FullName" value={values.FullName} onChange={handleChange}></Input>
                </InputContainer>
                <Details>
                <InputContainer>
                    <Label>Expiry Date</Label>
                    <Input width="7rem" name="ExpiryDate" value={values.ExpiryDate} onChange={handleChange}></Input>
                </InputContainer>
                
                <InputContainer>
                    <Label>CVV</Label>
                    <Input width="7rem" name="CVV" value={values.CVV} onChange={handleChange}></Input>
                </InputContainer>
                <InputContainer>
                    <Label>Amount</Label>
                    <Input  width="7rem" name="Amount" value={values.Amount} onChange={handleChange} id="amount"></Input>
                </InputContainer>

                </Details>
           
                <MakePayments amount={values.Amount}></MakePayments>
            </FormWrapper>
        </FormContainer>        
    )
}

export default Form
