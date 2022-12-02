import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainLayout from '../components/layouts/MainLayout'
import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Home</title>
      </Head>
        <div className='app-content'>
            <h1>Welcome to our website !</h1>
            <Link href='/shop'>Visit our market :) </Link>
        </div>
    </MainLayout>
  )
}
