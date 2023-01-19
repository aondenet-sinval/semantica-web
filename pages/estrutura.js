import Image from 'next/image'
import Layout from '../components/layout'
import Head from 'next/head'
const Estrutura = ()=> {
  return(<Layout>
    <Head>
    <title>HOME - Desenvolvimento SEMÂNTICO</title>
      <meta name="description" content="Estruturando corretamente os elementos" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>Estrutura semantica de um projeto simples</h1>
      <Image src="/img/estrutura-semantica.png"
        alt="Estrutura Base do site Pousada Model"
        className="w3-mobile"
        width={784} height={732}
      />
      <p>Futuramente haverá melhorias.</p>
    </Layout>
  )
}
export default Estrutura
