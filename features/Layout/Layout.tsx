import React from 'react'
import styles from './Layout.module.css'

interface Layout{
    children: any
}

export const Layout = ({children}:Layout) => {
  return (
    <>
    {children}
    </>
  )
}
