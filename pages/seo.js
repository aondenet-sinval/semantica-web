import Layout from '../components/layout'
import Head from 'next/head'
const Seo = () => {
  return(<Layout>
    <Head>
    <title>Fontes - Desenvolvimento SEMÂNTICO</title>
      <meta name="description" content="Onde aprender SEO gratuitamente" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section>
    <header>
      <h1 className="w3-xlarge">Onde aprender SEO:</h1>
    </header>
      <h2 className="w3-large">Algumas fontes de conteúdo para aprendizado</h2>
      <ul>
        <li><a href="https://mangools.com/blog/learn-seo/">Mangools</a></li>
        <li><a href="https://www.semrush.com/academy/courses/seo-fundamentals-course-with-greg-gifford">SEMrush</a></li>
        <li><a href="https://developers.google.com/search/docs/beginner/seo-starter-guide">Google</a></li>
        <li><a href="https://www.contentkingapp.com/academy/seo-guide/">ContentKing</a></li>
        <li><a href="https://learningseo.io/seo-fundamentals/">LearningSEO.io</a></li>
      </ul>
      <section itemScope itemType="https://schema.org/CreativeWork">
      <h2  className="w3-large" itemProp="name">Dicas de aprendizado de SEO.</h2>
      <p>Autor: <span itemProp="author">Sinval Gomes dos Santos.</span></p>
      <p>Nota: Conteudo em construção.</p>
      </section>
    </section>
    <style jsx>{`
      li{
        list-style-image:
        url("/img/icons/checked-list.svg")
      }
      `}
    </style>
    </Layout>
  )
}
export default Seo
