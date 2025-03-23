import styles from './Post.module.css';

export default function Post(props) {

    return (

        <div className={styles.post}>

            <img
                className={styles.capa}
                src={`/assets/posts/${props.post.id}/capa.png`}
                alt="imagem de capa do post"
            />

            <h2 className={styles.titulo}>{props.post.titulo}</h2>

            <button className={styles.botaoLer}>Ler</button>

        </div>

    );

}

