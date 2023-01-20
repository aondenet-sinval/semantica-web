import Layout from '../components/layout'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
const Seo = () => {
  return(<Layout>
      <Head>
      <title>SVG - Desenvolvimento SEMÂNTICO</title>
        <meta name="description" content="Aplicando SVG no nextjs - ícones grátis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <header>
          <h1 className="w3-xlarge">Aplicando SVG:</h1>
        </header>
       <section className="rows">
       <header>
         <h2>Ícones</h2>
       </header>
        <Image className="margins" src="/img/icons/estrelas.svg" width={100} height={100} alt="Stars" />
        <Image className="margins" src="/img/icons/zap.svg" width={100} height={100} alt="Whatsapp" />
        <Image className="margins" src="/img/icons/bars.svg" width={100} height={100} alt="Bars" />
        <Image className="margins" src="/img/icons/drinks.svg" width={100} height={100} alt="Drinks" />
        <Image className="margins" src="/img/icons/flash.svg" width={100} height={100} alt="Flash" />
        <Image className="margins" src="/img/icons/checked.svg" width={100} height={100} alt="Checked" />
        <Image className="margins" src="/img/icons/spinner.svg" width={100} height={100} alt="Spinner" />
        <Image className="margins" src="/img/icons/aple.svg" width={100} height={100} alt="Aple" />
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
