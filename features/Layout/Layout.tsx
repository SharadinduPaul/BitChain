import Head from 'next/head'
import React from 'react'
import styles from './Layout.module.css'

interface Layout{
  title?: string
  className?: string
    children: any
}

export const Layout = ({title, className ,children}:Layout) => {
  return (
    <div className={className}>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
    </div>
  )
}
