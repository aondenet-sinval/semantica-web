import Layout from '../components/layout'
import Head from 'next/head'
const Atribuicao = () => {
  return(<Layout>
    <Head>
    <title>Atribuição - Desenvolvimento SEMÂNTICO</title>
      <meta name="description" content="Fontes usadas para o aprendizado" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section>
    <header>
      <h1 className="w3-xlarge">Passos para atribuir o trabalho do autor:</h1>
    </header>
      <h2 className="w3-large">Descrição</h2>
      <ol>
        <li>
          Insira em seu website/trabalho a frase: "Imagem/código criado/desenvolvido por Sinval Gomes"
        </li>
        <li>
          Crie um link para o website do autor https://www.aondenet.com
        </li>
      </ol>
      <h2 className="w3-large">Exemplo de código para artibuição de ícones</h2>
      <pre>{`
          <a rel="atribuicao" href="https://www.aondenet.com">
            Ícone criado por Sinval Gomes
          </a>
        `}
      </pre>
    </section>
    </Layout>
  )
}
export default Atribuicao
