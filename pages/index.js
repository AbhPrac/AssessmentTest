import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Displaycoins from '../components/coinsMarket'
export default function Home() {
  return (
    <div>
        {<Displaycoins/>}
    </div>
  )
}
