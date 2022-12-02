import React from 'react'
import Header from '../header/Header'
import styles from './MainLayout.module.css'
function MainLayout({children}) {
  return (
    <div className={`${styles.layout_self} content-limiter `}>
      <Header />
        {children}
    </div>
  )
}

export default MainLayout