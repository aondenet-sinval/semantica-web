import Layout from '../components/layout'
import Image from 'next/image'
import Head from 'next/head'
const Seo = () => {
  return(<Layout>
    <Head>
    <title>SVG - Desenvolvimento SEMÂNTICO</title>
      <meta name="description" content="Aplicando SVG no nextjs" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section>
      <header>
        <h1 className="w3-xlarge">Aplicando SVG:</h1>
      </header>
      <h2 className="w3-large">Aplicando SVG inline</h2>
      <section className="rows">
        <h3 className="w3-large">Circle</h3>
        <p className="cols">
          <svg width="90" height="90">
            <circle cx="50" cy="50" r="30" stroke="orange" strokeWidth="4" fill="red" />
          </svg>
        </p>
        <h3 className="w3-large">Sombras projetadas</h3>
        <p className="cols">
          <svg height="140" width="140">
            <defs>
              <filter id="f4" x="0" y="0" width="200%" height="200%">
                <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
                <feColorMatrix result="matrixOut" in="offOut" type="matrix"
                values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0" />
                <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
              </filter>
            </defs>
            <rect width="90" height="90" stroke="red" strokeWidth="3"
            fill="blue" filter="url(#f4)" />
          </svg>
        </p>
      </section>
    </section>
    <section>
    <header>
      <h2>Imagens SVG - arquivos:</h2>
    </header>
     <section className="rows">
      <Image className="margins" src="/img/icons/estrelas.svg" width={100} height={100} alt="" />
      <Image className="margins" src="/img/icons/zap.svg" width={100} height={100} alt="" />
      <Image className="margins" src="/img/icons/bars.svg" width={100} height={100} alt="" />
      <Image className="margins" src="/img/icons/drinks.svg" width={100} height={100} alt="" />
     </section>
    </section>
    <style jsx>{`
      .rows{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .cols{
        flex-direction: column;
        margin: 5px;
      }
      .margins{ margin: 5px; }
      `}
    </style>
    </Layout>
  )
}
export default Seo
