import React, {useEffect, useState} from 'react'
import Header from '../components/Header'



function Payment() {

useEffect(() => {
  localStorage.removeItem("cartItems");
})

  return (
    <div>
        <Header />
        <h1> PAYMENT</h1>
    </div>
  )
}
export default Payment