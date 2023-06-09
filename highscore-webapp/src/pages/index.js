import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import WelcomeMessage from '@/components/WelcomeMessage'
import LoginForm from '@/components/LoginForm'
import { useState } from 'react'
import GameInfo from '@/components/GameInfo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [userName, setUserName] = useState('');
  
  return (
    <>
      <Head>
        <title>HighScore - Igor Follador</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <LoginForm userName={userName} setUserName={setUserName}/>

      <WelcomeMessage userName={userName} />
      
      <GameInfo></GameInfo>

      <Footer />
    </>
  )
}
