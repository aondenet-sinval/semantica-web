import Layout from '../components/layout'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
const Tabela = () => {
  return(
    <Layout>
    <Head>
    <title>Tabelas - Semantica WEB - Sinval Gomes</title>
      <meta name="description" content="Criando tabelas semanticamente" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section>
      <header>
        <h1 className={styles.title}>
          USANDO TABELAS COM RESPEITO À SEMÂNTICA
        </h1>
      </header>
      <table className="w3-table">
        <caption>Resumo de frutas disponíveis(preço/kg/unidade):</caption>
        <thead>
          <tr className="w3-black">
            <th scope="col">Fruta</th>
            <th scope="col">Produtor</th>
            <th scope="col">Colheita</th>
            <th scope="col">Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Banana</th>
            <td>Genérico/organico</td>
            <td>12/01/2023</td>
            <td>R$ 12,00</td>
          </tr>
          <tr className="w3-indigo">
            <th scope="row">Jaca</th>
            <td>MST/organico</td>
            <td>12/01/2023</td>
            <td>R$ 20,00(un)</td>
          </tr>
          <tr>
            <th scope="row">Laranja pêra</th>
            <td>Importada/não organica</td>
            <td>12/01/2023</td>
            <td>R$ 6,00</td>
          </tr>
          <tr className="w3-indigo">
            <th scope="row">Graviola</th>
            <td>Genérico/Organica</td>
            <td>12/01/2023</td>
            <td>R$ 9,00</td>
          </tr>
          <tr>
            <th scope="row">Melancia</th>
            <td>Importada/organica</td>
            <td>12/01/2023</td>
            <td>R$ 10,00</td>
          </tr>
          <tr className="w3-indigo">
            <th scope="row">Mamão</th>
            <td>Importada/não organica</td>
            <td>12/01/2023</td>
            <td>R$ 12,00</td>
          </tr>
          <tr>
            <th scope="row">Uva argentina</th>
            <td>Importada/não organica</td>
            <td>12/01/2023</td>
            <td>R$ 19,00</td>
          </tr>
          <tr className="w3-indigo">
            <th scope="row">Pera</th>
            <td>Importada/não organica</td>
            <td>12/01/2023</td>
            <td>R$ 9,00</td>
          </tr>
          <tr>
            <th scope="row">Maçã verde</th>
            <td>Nacional/não organica</td>
            <td>12/01/2023</td>
            <td>R$ 8,00</td>
          </tr>
          <tr className="w3-indigo">
            <th scope="row">Abacate</th>
            <td>Genérico/organico</td>
            <td>12/01/2023</td>
            <td>R$ 8,00</td>
          </tr>
          <tr>
            <th scope="row">Abil</th>
            <td>Nacional/não organico</td>
            <td>12/01/2023</td>
            <td>R$ 15,00</td>
          </tr>
          <tr className="w3-indigo">
            <th scope="row">Tangerina</th>
            <td>Genérica/não organica</td>
            <td>12/01/2023</td>
            <td>R$ 7,00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colSpan="2">Total de variedades:</th>
            <td colSpan="2">12</td>
          </tr>
        </tfoot>
      </table>
        <h2>Observações</h2>
        <details>
          <summary>Visualmente essa é uma tabela acessível pois possui os seguintes pontos a favor:</summary>
          <ul>
            <li>
              O cabeçalho está diferenciado recebendo cor única.
            </li>
            <li>
              As linhas estão em cores diferentes, não deixando dúvida.
            </li>
            <li>
              As informações são bem destacadas para o usuário.
            </li>
            <li>
              A navegação para quem usa apenas teclado pode ser feita facilmente.
            </li>
            <li>
              A tabela foi preparada para o uso com leitor de tela.
            </li>
          </ul>
        </details>
      </section>
      <style jsx> {`
        summary{
          padding: 10px;
          background-color: #CCC;
        }
        `}
      </style>
    </Layout>
  )
}
export default Tabela
