import React from 'react'
import "../styles/Merch.scss";
import MerchImg from '../assets/jacket.webp'

export default function Merch() {
  return (
    <div className='merch'>
        <h1>Merch 👕</h1>
        <h2>The best way to support our endeavors is by <a href="https://merch.uuu.vip/" target='_blank'>purchasing</a> and rockin' our company merch!</h2>
        <a href="https://merch.uuu.vip/" target='_blank'><img src={MerchImg}/></a>
    </div>
  )
}
