import Layout from '../components/layout'
import Head from 'next/head'
const Css = ()=> {
  return(<Layout>
    <Head>
    <title>CSS - Desenvolvimento SEMÂNTICO</title>
      <meta name="description" content="Uso correto do css" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1 className="w3-xlarge">Usando CSS sem danificar a acessibilidade</h1>
    <h2 className="w3-large">Paragrafos:</h2>
    <p className="par">Esse é um paragrafo para demonstrar uma forma de melhorar
     a acessibilidade. Isso implica em definir espaçamento entre
    linhas e tamanho da fonte apropriado.
    </p>
    <h2 className="w3-large">Links</h2>
    <p>
      Link com estilo padrão removido
      mas <a href="https://www.aondenet.com"><strong>destacado</strong></a> para o usuário.
    </p>
    <h2 className="w3-large">Observações</h2>
    <ul>
      <li>Evite alterar a formatação de links, caso afete negativamente.</li>
    </ul>
    <style jsx>{`
      p .par{
        width: 200px;
        line-height: 1.5;
        font-size: 1.2rem;
      }
      `}
    </style>
    </Layout>
  )
}
export default Css
