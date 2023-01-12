import Layout from '../components/layout'
const Css = ()=> {
  return(<Layout>
      <h1>Usando CSS sem danificar a acessibilidade</h1>
      <h2>Paragrafos:</h2>
      <p>Esse é um paragrafo para demonstrar uma forma de melhorar
       a acessibilidade. Isso implica em definir espaçamento entre
        linhas e tamanho da fonte.
      </p>
      <style jsx>{`
        p{
          width: 120px;
          line-height: 1.5;
          font-size: 1.2rem;
        }
        `}
      </style>
    </Layout>
  )
}
export default Css
