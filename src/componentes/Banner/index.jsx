
import styles from './Banner.module.css';
import circuloColorido from '@/assets/circulo_colorido.png';
import minhaFoto from '@/assets/minha_foto.png';

export default function Banner() {

    return (

        <div className={styles.banner}>

            <div className={styles.apresentacao}>

                <h1 className={styles.titulo}>
                    Olá Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Seja bem-vindo! Eu sou Asdrubal Topolinski, personagem fictício 
                    que o Carlão utiliza nas aulas. Neste momento estou ajudando na 
                    condução da disciplina PRW2, tanto pra ADS quanto pra BES. 
                    Vamos nessa!
                </p>

            </div>

            <div className={styles.imagens}>

                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    alt="um circulo"
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Asdrubal"
                />
                
            </div>

        </div>
    );
}

