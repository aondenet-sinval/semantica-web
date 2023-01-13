import Layout from '../components/layout'
import Head from 'next/head'
const Fontes = () => {
  return(<Layout>
    <Head>
    <title>Fontes - Desenvolvimento SEMÂNTICO</title>
      <meta name="description" content="Fontes usadas para o aprendizado" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section>
    <header>
      <h1 className="w3-xlarge">Fontes usadas sobre acessibilidade:</h1>
    </header>
      <h2 className="w3-large">Google</h2>
      <ul>
        <li><a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content">Criação de conteúdo</a></li>
        <li><a href="https://developers.google.com/search">Central do Webmaster</a></li>
      </ul>
      <h2 className="w3-large">Gov.br</h2>
      <ul>
        <li><a href="https://www.gov.br/governodigital/pt-br/acessibilidade-digital/eMAGv31.pdf/view">eMAGv31</a></li>
      </ul>
      <h2 className="w3-large">Mozzila MDN</h2>
      <ul>
        <li>
          <a href="https://developer.mozilla.org/pt-BR/docs/Learn/Accessibility/HTML">
            HTML - Boas práticas
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/CSS_and_JavaScript">
            CSS e Javascript
          </a>
        </li>
      </ul>
    </section>
    </Layout>
  )
}
export default Fontes
