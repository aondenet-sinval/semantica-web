import Layout from '../components/layout'
import MyModal from '../components/modal'
import Head from 'next/head'
const Modal = () => {
  return(<Layout>
    <Head>
    <title>Fontes - Desenvolvimento SEMÂNTICO</title>
      <meta name="description" content="Fontes usadas para o aprendizado" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section>
      <header>
        <h1 className="w3-xlarge">Janela Modal Acessível</h1>
      </header>
      <section>
        <header>
          <h2>
            Exemplo de janela modal
          </h2>
        </header>
        <p>Observe essa modal que é um exemplo de funcionalidade tirado da eMAGv31.<br />
        Tente percorrer a página usando somente o teclado.<br />
        Adicionei ao link somente o plano de fundo e fonte <strong lang="en"> white</strong>.</p>
        <MyModal />
      </section>
    </section>
    </Layout>
  )
}
export default Modal
