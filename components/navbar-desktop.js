import Link from 'next/link'
import Image from 'next/image'
const NavBarDesktop = () => {
  return(<>
    <header className="w3-top w3-dark-grey">
      <h1 className="w3-bar w3-transparent w3-large">
        <Image className="w3-margin-right w3-margin-left" alt="" src="/logoaondenet.png" width={36} height={36} />
      Sinval Gomes Desenvolvimento WEB - Prado BA
      </h1>
      <nav  role="navigation">
      <ul className="w3-bar-block w3-dark-grey">
        <li><Link href="/" className="w3-button">Home</Link></li>
        <li><Link href="/tabela" className="w3-button">Tabela</Link></li>
        <li><Link href="/imagem" className="w3-button">Imagem</Link></li>
        <li><Link href="/css" className="w3-button">CSS</Link></li>
        <li><Link href="/estrutura" className="w3-button">Estrutura</Link></li>
        <li><Link href="/fontes" className="w3-button">Fontes</Link></li>
        <li><Link href="/seo" className="w3-button">SEO</Link></li>
      </ul>
      </nav>
    </header>
    <style jsx>{`
      .image-decor{background-color: tranparent; marginLeft: 10px }
      a{padding: 2px;}
      ul{
        display: flex;
        flexDirection: row;
        list-style: none;
      }
      nav h2{fontSize: 1.2rem;}
      h1{fontSize: 20px;}
      `}
    </style>
  </>)
}
export default NavBarDesktop
