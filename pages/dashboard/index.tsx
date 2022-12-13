import Head from 'next/head'
import Image from 'next/image'
import { Html } from 'next/document'
import Link from 'next/link'
import Tasks from '../../components/tasks'
import MainContainer from '../../components/maincontainer'
import Footer from '../../components/footer'


export default function Home() {
  return (
      
    <>
      <Head>
          <title>Dashboard tasks</title>
          <link rel="icon" href="/images/favicon.ico"/>
          <link rel="stylesheet" href="globals.css" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300&display=swap" rel="stylesheet"></link>
      </Head>
      
      <main className="w-full relative flex flex-col font-Roboto min-h-screen justify-start items-center bg-white ">
          <header className='bg-pblue w-full h-20 relative flex flex-col justify-center items-center'>
              <Image src="/images/task-logo.png" alt="logo" width={100} height={100} className="absolute -bottom-16"/>
             
          </header>
          <MainContainer/>
          
          <Footer/>
            
              
      </main>
    </>

  )
}
