'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { ChakraProvider } from '@chakra-ui/react'
import Pricing from './pricing'
import Header from './header'
import Features from './features'
import Footer from './footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ChakraProvider>
    <Header/>
    <Pricing/>
    <Features/>
    <Footer/>
    </ChakraProvider>
  )
}
