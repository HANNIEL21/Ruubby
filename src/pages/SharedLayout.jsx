import React from 'react'
import { Footer, Header } from '../Export'

const SharedLayout = ({children}) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default SharedLayout