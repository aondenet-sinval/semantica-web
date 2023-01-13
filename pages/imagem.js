import Image from 'next/image'
import Layout from '../components/layout'
import Head from 'next/head'
const Imagem = () => {
  return(<Layout>
    <Head>
    <title>Imagem - Desenvolvimento SEMÂNTICO</title>
      <meta name="description" content="Usando corretamente imagens na web" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section>
      <header>
        <h1>Usando Imagens de acordo com a semântica WEB</h1>
      </header>
      <article>
        <h2>Imagem para conteúdo com figure</h2>
        <figure>
          <Image src="/img/features.jpg" width={200} height={133} alt="Cama de quarto" />
           <figcaption>
             Modelo desenvovimento WEB de Sinval Gomes WebDesigner.
          </figcaption>
        </figure>
        <h2>Imagem para conteúdo aria-labelledby</h2>
          <Image src="/img/features.jpg" width={200} height={133} alt="" />
           <p>
             Modelo desenvovimento WEB de Sinval Gomes WebDesigner.
          </p>

        <h2>Imagem decorativa</h2>
        <h3>
          <Image alt="" src="/img/features.jpg" width={50} height={33} />
             Modelo desenvovimento WEB de Sinval Gomes WebDesigner.
        </h3>
      </article>
    </section>
      <style jsx>{`
        h3{marginLeft: 10px;}
        `}
      </style>
    </Layout>
  )
}
export default Imagem
