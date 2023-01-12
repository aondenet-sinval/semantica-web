import Image from 'next/image'
import Layout from '../components/layout'

const Estrutura = ()=> {
  return(<Layout>
    <h1>Estrutura semantica de um projeto simples</h1>
      <Image src="/img/estrutura-semantica.png"
        alt="Estrutura Base do site Pousada Model"
        width={784} height={732}
      />
      <p>Futuramente haverá melhorias.</p>
    </Layout>
  )
}
export default Estrutura
