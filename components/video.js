import Layout from '../components/layout'
import Head from 'next/head'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

const Video = () => {
  return(
    <>
        <section className="player">
          <video controls>
            <source src="/video/web-semantica.mp4" type="video/mp4" />
            <source src="/video/websemantica.webm" type="video/webm" />
            <p>
              Seu navegador não suporta html vídeo. Veja
              <a href="/video/web-semantica.mp4">o link do</a> vídeo.
            </p>
          </video>
          <div className="controls">
            <button className="playpause">Play</button>
            <button className="stop">Stop</button>
            <button className="rwd">Rwd</button>
            <button className="fwd">Fwd</button>
            <div className="time">00:00</div>
          </div>
        <Script id="show-button" strategy="lazyOnload">
          {`
            const player = document.querySelector("video")
            player.removeAttribute("controls")
            const playPauseBtn = document.querySelector(".playpause")
            const stopBtn = document.querySelector(".stop")
            const rwdBtn = document.querySelector(".rwd")
            const fwdBtn = document.querySelector(".fwd")
            const timeLabel = document.querySelector(".time")
            playPauseBtn.onclick = () => {
              if (player.paused) {
                player.play()
                playPauseBtn.textContent = "Pause"
              } else {
                player.pause()
                playPauseBtn.textContent = "Play"
              }
            }
            stopBtn.onclick = () => {
              player.pause()
              player.currentTime = 0
              playPauseBtn.textContent = "Play"
            }
            rwdBtn.onclick = () => {
              player.currentTime -= 3
            }

            fwdBtn.onclick = () => {
              player.currentTime += 3
              if (player.currentTime >= player.duration || player.paused) {
                player.pause()
                player.currentTime = 0
                playPauseBtn.textContent = "Play"
              }
            }
            player.ontimeupdate = () => {
              const minutes = Math.floor(player.currentTime / 60)
              const seconds = Math.floor(player.currentTime - minutes * 60)
              const minuteValue = minutes < 10 ? (0 + minutes) : minutes
              const secondValue = seconds < 10 ? (0 + seconds) : seconds

              const mediaTime = minuteValue + ':' + secondValue
              timeLabel.textContent = mediaTime
            }
          `}
        </Script>
      </section>
      <style jsx> {`
        .controls{display: flex; flex-direction: row; flex-wrap: wrap;}
        video{
          width: 100%;
        }
        `}
      </style>
      </>
  )
}
export default Video
