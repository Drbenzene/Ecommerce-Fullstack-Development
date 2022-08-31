import React from 'react'
import Carts from '../components/Cart'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

function Cart() {
  return (
    <div>
      <div className="mb-5">
      <Header/>
      </div>
      <div className="d-grid mt-5">
        <Carts/>
      </div>
    </div>
  )
}

export default Cart