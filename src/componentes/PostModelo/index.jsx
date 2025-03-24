
import styles from './PostModelo.module.css';

export default function PostModelo( props ) {

    return (

        <article className={styles.postModeloContainer}>

            <div
                className={styles.fotoCapa}
                style = { { backgroundImage: `url(${props.fotoCapa})` } }
            />

            <h2 className={styles.titulo}>
                {props.titulo}
            </h2>

            <div className={styles.postConteudoContainer}>
                {props.children}
            </div>

        </article>

    )

}

