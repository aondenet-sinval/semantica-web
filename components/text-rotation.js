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
        CSS3
      </p>
      <p id={styles.tresd}>
        CSS3 3D
      </p>
    </section>
    </>
  )
}
export default TextRotation
