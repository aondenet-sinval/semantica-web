import styles from '../styles/layout.module.css'
import NavBar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {

  return (<>
      <NavBar />
      <main className={styles.container}>{children}</main>
      <Footer />
      <style jsx> {`
        main{
          padding-top: 88px;
        }
        `}
      </style>
    </>)
}
