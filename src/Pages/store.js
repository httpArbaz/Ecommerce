import React from 'react'
import Feature from '../components/feautureProduct/feature'
import StoreHero from '../components/store/store'


function Store() {
  return (
    <div style={{backgroundColor:"#f5f5f5",paddingBottom:"120px"}}>
    <StoreHero/>
    <Feature />
    </div>
  )
}

export default Store