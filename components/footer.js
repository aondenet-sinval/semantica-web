import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return(<>
      <footer className="w3-footer w3-dark-grey w3-padding-small">
        <h1 className="w3-large">Sinval Gomes Desenvolvimento <a href="https://www.aondenet.com" target="_blank">WEB</a> - Acessibilidade.<br />
         Fontes desse projeto: <a href="https://github.com/aondenet-sinval/semantica-web" target="_blank">REPOSITÓRIO</a>.</h1>
        <p>
         <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
           <Image alt="Licença Creative Commons"
           src="/img/icons/license.svg"
           width={88} height={31} />
           </a>
         </p>
         <p>
           Esta obra está licenciada com uma Licença
           <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"> Creative Commons Atribuição 4.0 Internacional</a>.
           Veja <Link href="/atribuicao">aqui</Link> como fazer a atribuição.
         </p>
      </footer>
    </>
  )
}
export default Footer
