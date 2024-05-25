import SideBar from '../components/SideBar'
import BottomBar from '../components/BottomBar'
import styles from '../styles/Principal.module.css'
export default function Home() {
  return (
 <>
   <SideBar/>
   <img src="/logo.png" alt="" className={styles.placa}/>
   <img src="/educacao.png" alt="" className={styles.logo}/>
   <p className={styles.texto2}>A educação digital pode ser divertida e transformadora_</p>
   <p className={styles.texto}>Nós vamos hackear o mundo!</p>
   <button className={styles.botao1}>
      <p>Materias de Estudo</p>
   </button>
   <button className={styles.botao2}>
      <p>Artigos Científicos</p>
   </button>
   <BottomBar/>
 </>
  );
}
