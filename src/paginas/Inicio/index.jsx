import Post from "@/componentes/Post";
import styles from './Inicio.module.css';
import posts from '@/json/posts.json'

export default function Inicio() {

    // Apenas o conteúdo principal da página Inicio,
    // isto é, os posts !!

    return (

        <ul className={styles.posts}>

            { posts.map( (post)=> {
                return (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                );
            } ) }

        </ul>
    )
}

