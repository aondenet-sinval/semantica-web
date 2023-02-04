import { useEffect, useState } from 'react'
const Audio = () => {
  const [audioStatus, setAudioStatus] = useState({})
  const [btnPlayPause, setBtnPlayPause] = useState({})
  const playPause = () => {
    if (audioStatus.paused) {
      audioStatus.play()
      btnPlayPause.textContent = "Pause"
    } else {
      audioStatus.pause()
      btnPlayPause.textContent = "Play"
    }
  }
  const playStop = () => {
      audioStatus.pause()
      audioStatus.currentTime = 0
  }
  useEffect(() => {
    const myAudio = document.querySelector("audio")
    const playPauseBtn = document.querySelector(".playpause")
    const stopBtn = document.querySelector(".stop")
    const timeLabel = document.querySelector(".time")
    setAudioStatus(myAudio)
    setBtnPlayPause(playPauseBtn)
  },[])
  return(
    <>
        <section className="myAudio">
          <audio controls id="player">
            <source src="/audio/music.ogv" type="audio/ogg" />
            <source src="/audio/jhenyferlira-plano-b.mp3" type="audio/mpeg" />
            <p>
              Seu navegador não suporta html áudio. Veja
              <a href="/audio/jhenyferlira-plano-b.mp3">o link do</a> áudio.
            </p>
          </audio>
          <div className="controls">
            <button onClick={playPause} className="playpause">Play</button>
            <button onClick={playStop} className="stop">Stop</button>
          </div>
      </section>
      <style jsx> {`
        .controls{
          display: flex; flex-direction: row; flex-wrap: wrap;
        }
        audio{
          width: 100%;
        }
        `}
      </style>
      </>
  )
}
export default Audio
