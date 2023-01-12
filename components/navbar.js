import Link from 'next/link'
import Image from 'next/image'
const NavBar = () => {
  return(<>
    <header>
      <h1 className="w3-bar-block w3-transparent w3-large"><Image alt="" src="/logoaondenet.png" width={36} height={36} />Sinval Gomes Desenvolvimento WEB - Prado BA</h1>
      <nav className="w3-bar-block w3-dark-grey">
        <Link href="/" className="w3-button">Home</Link>
        <Link href="/tabela" className="w3-button">Tabela</Link>
        <Link href="/imagem" className="w3-button">Imagem</Link>
        <Link href="/css" className="w3-button">CSS</Link>
        <Link href="/estrutura" className="w3-button">Estrutura</Link>
      </nav>
    </header>
    <style jsx>{`
      img{background-color: tranparent;}
      a{padding: 2px;}
      nav{
        display: flex;
        flexDirection: row;
      }
      nav h2{fontSize: 1.2rem;}
      h1{fontSize: 20px;}
      `}
    </style>
  </>)
}
export default NavBar
