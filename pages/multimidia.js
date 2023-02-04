import Layout from '../components/layout'
import Audio from '../components/audio'
import Video from '../components/video'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Multimidia = () => {
  return(
    <Layout>
    <Head>
    <title>Áudio e Vídeo - SEMANTICA WEB - Sinval Gomes</title>
      <meta name="description" content="Adicionando multimídia semanticamente" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section>
      <header>
        <h1 className={styles.title}>
          INSERINDO VÍDEOS E ÁUDIOS MAS RESPEITANDO A SEMÂNTICA WEB
        </h1>
      </header>
        <p>O modo correto de inserir vídeos e áudios precisa seguir alguns requisitos:</p>
        <ul>
          <li>
            Devemos inserir pelo menos dois formatos de arquivo.
            Assim se o browser do usuário não tiver suporte para um formato, poderá
            executar o outro. Optei aqui por ogg e mp3 - áudio.
            Ou .webm e .mp4 - vídeo.
          </li>
          <li>
            Devemos inserir botões que sejam acessíveis usando javascript.
          </li>
        </ul>
        <h2>VÍDEO</h2>
        <Video />
        <h2>ÁUDIO</h2>
        <Audio />
      </section>
      <style jsx> {`
        video{
          width: 100%;
        }
        `}
      </style>
    </Layout>
  )
}
export default Multimidia
