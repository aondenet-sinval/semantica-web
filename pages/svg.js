import Layout from '../components/layout'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import styled from '../styles/Home.module.css'
import Transforms from '../components/transforms'
import TextRotation from '../components/text-rotation'
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
       <section>
       <header>
         <h2>Ícones</h2>
       </header>
         <div className="rows">
          <Image className="margins" src="/img/icons/estrelas.svg" width={100} height={100} alt="Stars" />
          <Image className="margins" src="/img/icons/zap.svg" width={100} height={100} alt="Whatsapp" />
          <Image className="margins" src="/img/icons/bars.svg" width={100} height={100} alt="Bars" />
          <Image className="margins" src="/img/icons/drinks.svg" width={100} height={100} alt="Drinks" />
          <Image className="margins" src="/img/icons/flash.svg" width={100} height={100} alt="Flash" />
          <Image className="margins" src="/img/icons/checked.svg" width={100} height={100} alt="Checked" />
          <div className={styled.rotation}>
            <Image className={styled.rotater}
              src="/img/icons/spinners.svg" width={100}
              height={100} alt="Spinner"
            />
          </div>
          <Image className="margins" src="/img/icons/aple.svg" width={100} height={100} alt="Aple" />
        </div>
       </section>
       <Transforms />
       <TextRotation />
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
