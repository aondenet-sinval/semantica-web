import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Script from 'next/script'
const NavBarMobile = () => {
  const showBar = "w3-show w3-bar-block"
  const hideBar = "w3-hide w3-bar-block"
  const [bar, setBar] = useState(hideBar)
  const setMobile = (e) => {
    const pressedKey = e
    console.log('key ', pressedKey)
    e.preventDefault()
    if (bar === hideBar) {
      setBar(showBar)
    }else {
      setBar(hideBar)
    }
    console.log('show');
  }
  return(<>
    <header className="w3-top w3-dark-gray">
      <h1 className="w3-large">
        <Image className="w3-margin-right w3-margin-left" alt="" src="/logoaondenet.png" width={36} height={36} />
        Sinval Gomes - Prado BA
      </h1>
      <nav  role="navigation">
        <i className="w3-padding w3-button" tabIndex="0" onClick={setMobile}>
          <Image width={50} height={37} className="w3-bar"
            alt="" src="/img/icons/bars.svg"
          />
        </i>
        <ul className={bar}>
        <li onClick={setMobile}><Link href="/" className="w3-button bar w3-bar-item w3-mobile">Home</Link></li>
        <li onClick={setMobile}><Link href="/tabela" className="w3-button bar w3-bar-item w3-mobile">Tabela</Link></li>
        <li onClick={setMobile}><Link href="/imagem" className="w3-button bar w3-bar-item w3-mobile">Imagem</Link></li>
        <li onClick={setMobile}><Link href="/css" className="w3-button bar w3-bar-item w3-mobile">CSS</Link></li>
        <li onClick={setMobile}><Link href="/estrutura" className="w3-button bar w3-bar-item w3-mobile">Estrutura</Link></li>
        <li onClick={setMobile}><Link href="/fontes" className="w3-button bar w3-bar-item w3-mobile">Fontes</Link></li>
        <li onClick={setMobile}><Link href="/seo" className="w3-button bar w3-bar-item w3-mobile">SEO</Link></li>
        <li onClick={setMobile}><Link href="/svg" className="w3-button bar w3-bar-item w3-mobile">SVG</Link></li>
        <li onClick={setMobile}><Link href="/multimidia" className="w3-button bar w3-bar-item w3-mobile">Multimídia</Link></li>
        </ul>
      </nav>
    </header>
    <style jsx>{`
      .image-decor{background-color: tranparent; marginLeft: 10px }
      a{padding: 2px;}
      nav{
        display: flex;
        flexDirection: row;
        list-style: none;
      }
      ul{
        flexDirection: column;
        list-style: none;
      }
      li{ width: 180px;}
      nav h2{fontSize: 18px;}
      h1{fontSize: 20px;}
      img{
        width: auto;
      }
      `}
    </style>
  </>)
}
export default NavBarMobile
