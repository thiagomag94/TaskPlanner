import Head from 'next/head'
import Image from 'next/image'
import InputSearch from '../components/tasks'
import { Html } from 'next/document'
import Link from 'next/link'




export default function Home() {
  return (
      
    <>
      <Head>
          <title>NEW TO DO LIST</title>
          <link rel="icon" href="/images/favicon.ico"/>
          <link rel="stylesheet" href="globals.css" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300&display=swap" rel="stylesheet"></link>
      </Head>
      
      <main className="relative flex flex-col font-Roboto min-h-screen justify-center items-center bg-gradient-to-t from-pgreen to-pblue ">
          <div className='absolute top-0 flex flex-col items-center w-10/12 min-h-4/6 py-12 rounded-b-3xl bg-slate-200 shadow-lg'>
              <Image src="/images/task-logo.png" alt="logo" width={100} height={100} className="mt-10 mb-8"/>
            
              <div id="start-label" className='flex flex-col justify-center items-center w-full'>
                  <h1 className='text-neutral-800  font-bold text-2xl text-center mb-6'>Task Organizer</h1>
              </div>
              <div id="secondary-label" className='flex mt-4 w-full'>
                  <Image src="/images/check.png" alt="logo" width={25} height={25} className="ml-14"/>
                  <p className='text-center align-center text-neutral-800  ml-4'>Do important things first</p>
              </div>
              <div id="terciary-label" className='flex mt-4 w-full'>
                  <Image src="/images/check.png" alt="logo" width={25} height={25} className="ml-14"/>
                  <p className='text-neutral-800  ml-4'>Get more free time to chill</p>
              </div>
              <div id="quaternary-label" className='flex  items-center mt-4 w-full'>
                  <Image src="/images/check.png" alt="logo" width={25} height={25} className="ml-14"/>
                  <p className='text-center text-neutral-800  ml-4'>Make your day productive</p>
              </div>
              
              <Link href={{pathname: 'dashboard'}}>
                <button className='rounded-full w-40 font-bold bg-neutral-800 p-2 text-pgreen mt-12 shadow-lg'>Let's start</button>
              </Link>
          </div>
         
      </main>
    </>

  )
}
