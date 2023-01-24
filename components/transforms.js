import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Transforms = () => {
  return(<>
    <section>
    <header>
      <h3>Usando Transforms</h3>
    </header>
    <div className={styles.localization}>
    <Image src="/img/features.jpg" width={200} height={133} alt="Cama de quarto" />
      <h4>Rotate</h4>
      <div className={styles.imagesRotate}>
      <Image src="/img/features.jpg" width={200} height={133} alt="propriedade css transform" />
      </div>
      <h4>Skew</h4>
      <div className={styles.imagesSkew}>
      <Image src="/img/features.jpg" width={200} height={133} alt="propriedade css transform" />
      </div>
      <h4>Skew e Rotate</h4>
      <div className={styles.imagesSkewRotate}>
      <Image src="/img/features.jpg" width={200} height={133} alt="propriedade css transform" />
      </div>
    </div>
    </section>
    </>
  )
}
export default Transforms
