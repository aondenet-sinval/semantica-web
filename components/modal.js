import Layout from '../components/layout'
import Head from 'next/head'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

const MyModal = () => {
  return(
    <>
      <div id="conteudo" role="main">
        <a href="#openModal">Abrir Janela Modal</a>
        <section id="openModal">
          <div>
            <a href="#close" className="close">Fechar</a>
            <header><h2>Janela Modal</h2></header>
            <p>
            Esta é uma janela modal acessível e foi criada utilizando apenas
            HTML e CSS3.
            </p>
            <p>É importante disponibilizar o link abaixo para sinalizar o final da janela
            modal.</p>
            <a href="#close">Fim do conteúdo modal, clique aqui para retornar</a>
          </div>
        </section>
      </div>
    <style jsx>{`
      a{background-color: black; color: white; padding: 10px; border-radius: 10px;}
      section {
        position: fixed;
        font-family: Arial, Helvetica, sans-serif;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,0.8);
        z-index: 99999;
        display:none;
        -webkit-transition: opacity 400ms ease-in;
        -moz-transition: opacity 400ms ease-in;
        transition: opacity 400ms ease-in;
        pointer-events: none;
        }
        section:target {
        display: block;
        pointer-events: auto;
        }
        section > div {
        width: 400px;
        position: relative;
        margin: 10% auto;
        padding: 5px 20px 13px 20px;
        border-radius: 10px;
        background: #fff;
        background: -moz-linear-gradient(#fff, #999);
        background: -webkit-linear-gradient(#fff, #999);
        background: -o-linear-gradient(#fff, #999);
        }
        .close {
        background: #606061;
        color: #FFFFFF;
        line-height: 25px;
        position: absolute;
        right: -12px;
        text-align: center;
        top: -10px;
        width: 104px;
        text-decoration: none;
        font-weight: bold;
        -webkit-border-radius: 12px;
        -moz-border-radius: 12px;
        border-radius: 12px;
        -moz-box-shadow: 1px 1px 3px #000;
        -webkit-box-shadow: 1px 1px 3px #000;
        box-shadow: 1px 1px 3px #000;
        }
      `}
    </style>
    </>
  )
}
export default MyModal
