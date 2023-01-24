import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
const TextRotation = () => {
  return(<>
    <section>
      <header>
        <h3>Keyframes:</h3>
      </header>
      <p id={styles.text}>
        <div>
        CSS3
        </div>
      </p>

    </section>
    </>
  )
}
export default TextRotation
